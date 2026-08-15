import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { ClientContext, SnapshotStore } from "@deepseek-ai/dsh-client-runtime/client";
import type {} from "@deepseek-ai/dsh-client-ui-conversation/client";
import type {} from "@deepseek-ai/dsh-client-ui-settings/client";
import type {} from "@deepseek-ai/dsh-client-ui-model-selection/client";
import styles from "./skin.css";
import {
  PREVIEW_MAX_FRAME,
  frameForEffort,
  indicatorLabel,
  nearestEffortIndex,
  paletteForFrame,
  portraitBlendForLevel,
  selectedEffortIndex,
  type EffortLike,
} from "./logic";

const PACKAGE_ID = "dsh-client-liang-intensity-skin";
const LOCALE_NAMESPACE = "liang.skin";
const ASSET_PREFIX = `/plugins/${PACKAGE_ID}/assets`;
const VIDEO_DURATION = 8.033;
const PREFERENCE_KEY = "dsh-liang-intensity-skin.enabled";

const PORTRAIT_ANCHORS = [
  { level: 0, file: "stage-00.png" },
  { level: 1, file: "level-01.png" },
  { level: 3, file: "level-03.png" },
  { level: 4, file: "level-04.png" },
  { level: 6, file: "stage-06.png" },
  { level: 7, file: "level-07.png" },
  { level: 9, file: "level-09.png" },
  { level: 10, file: "level-10.png" },
  { level: 12, file: "stage-12.png" },
  { level: 13, file: "level-13.png" },
  { level: 14, file: "level-14.png" },
  { level: 15, file: "bridge-15.png" },
  { level: 16, file: "level-16.png" },
  { level: 17, file: "level-17.png" },
  { level: 18, file: "stage-18.png" },
  { level: 19, file: "level-19.png" },
  { level: 21, file: "level-21.png" },
  { level: 22, file: "level-22.png" },
  { level: 24, file: "stage-24.png" },
  { level: 25, file: "level-25.png" },
  { level: 27, file: "bridge-27.png" },
  { level: 28, file: "level-28.png" },
  { level: 29, file: "level-29.png" },
  { level: 30, file: "stage-30.png" },
] as const;

interface SkinSettings {
  enabled: boolean;
}

interface PreferenceStore {
  getSnapshot(): SkinSettings;
  subscribe(listener: () => void): () => void;
  set(enabled: boolean): Promise<void>;
  dispose(): void;
}

type NativeThemeId = "light" | "dark";

interface ThemeService {
  getTheme(): { preference: string };
  setTheme(id: NativeThemeId): void;
}

interface ModelSelection {
  provider: string;
  model: string;
  reasoningEffort?: string;
}

interface CatalogModel {
  id: string;
  reasoning?: {
    efforts: EffortLike[];
    defaultEffort?: string;
  };
}

interface ModelDirectoryState {
  current: ModelSelection | null;
  groups: readonly { id: string; models: CatalogModel[] }[];
  status: "idle" | "loading" | "ready" | "selecting" | "error";
  error: string | null;
}

interface ModelDirectory {
  store: SnapshotStore<ModelDirectoryState>;
  load(): Promise<unknown>;
  select(selection: ModelSelection): Promise<void>;
}

interface SliderProps {
  directory: SnapshotStore<ModelDirectoryState>;
  load: () => void;
  select: (selection: ModelSelection) => Promise<boolean>;
  presenter: SkinPresenter;
  scope: PreferenceStore;
}

interface SettingsRowProps {
  scope: PreferenceStore;
  presenter: SkinPresenter;
  t: (key: string) => string;
}

const cssVariables = [
  "--liang-strength",
  "--liang-page",
  "--liang-bg-base",
  "--liang-layer-1",
  "--liang-layer-2",
  "--liang-layer-3",
  "--liang-sidebar",
  "--liang-ink",
  "--liang-secondary",
  "--liang-tertiary",
  "--liang-border",
  "--liang-accent",
  "--liang-accent-hover",
  "--liang-hover",
  "--liang-portrait-opacity",
] as const;

class SkinPresenter {
  private readonly scope: PreferenceStore;
  private readonly theme: ThemeService;
  private readonly root: HTMLDivElement;
  private readonly video: HTMLVideoElement;
  private readonly poster: HTMLImageElement;
  private readonly portrait: HTMLImageElement;
  private readonly preloads: HTMLImageElement[];
  private enabled = true;
  private frame = 0;
  private pendingFrame = 0;
  private raf = 0;
  private disposed = false;
  private unsubscribe: () => void;

  constructor(scope: PreferenceStore, theme: ThemeService) {
    this.scope = scope;
    this.theme = theme;
    this.root = document.createElement("div");
    this.root.className = "liang-skin-backdrop";
    this.root.dataset.plugin = PACKAGE_ID;
    this.root.dataset.media = "sequence";
    this.root.setAttribute("aria-hidden", "true");

    this.video = document.createElement("video");
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.preload = "auto";
    // A video poster stays painted while a paused video is scrubbed in some
    // browsers, which would make every effort show the same portrait. Keep the
    // separate image element as the true load-error fallback instead.
    const webm = document.createElement("source");
    webm.src = `${ASSET_PREFIX}/liang-evolution.webm`;
    webm.type = "video/webm";
    const mp4 = document.createElement("source");
    mp4.src = `${ASSET_PREFIX}/liang-evolution.mp4`;
    mp4.type = "video/mp4";
    this.video.append(webm, mp4);

    this.poster = document.createElement("img");
    this.poster.className = "liang-skin-poster";
    this.poster.src = `${ASSET_PREFIX}/liang-poster.png`;
    this.poster.alt = "";

    this.portrait = document.createElement("img");
    this.portrait.className = "liang-skin-sequence-frame";
    this.portrait.alt = "";
    this.portrait.draggable = false;
    this.portrait.addEventListener("error", this.handleSequenceError);

    this.preloads = PORTRAIT_ANCHORS.map(({ file }) => {
      const image = new Image();
      image.src = `${ASSET_PREFIX}/portrait-source-v2/${file}`;
      return image;
    });

    this.root.append(this.video, this.portrait, this.poster);
    document.body.prepend(this.root);

    this.video.addEventListener("loadedmetadata", this.handleMetadata);
    this.video.addEventListener("error", this.handleVideoError);
    this.poster.addEventListener("error", this.handlePosterError);
    this.video.load();
    this.unsubscribe = scope.subscribe(() => this.syncSettings());
    this.syncSettings();
  }

  private readonly handleMetadata = () => {
    this.seek(this.frame);
  };

  private readonly handleVideoError = () => {
    this.root.dataset.media = "poster";
  };

  private readonly handleSequenceError = () => {
    this.root.dataset.media = "video";
  };

  private readonly handlePosterError = () => {
    this.root.dataset.media = "color";
  };

  private syncSettings() {
    this.setEnabled(this.scope.getSnapshot().enabled);
  }

  isEnabled() {
    return this.enabled;
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    if (enabled) {
      if (!this.root.isConnected) document.body.prepend(this.root);
      document.body.dataset.liangSkin = "on";
      this.applyFrame();
    } else {
      this.root.remove();
      delete document.body.dataset.liangSkin;
      delete document.body.dataset.liangStage;
      for (const name of cssVariables) document.body.style.removeProperty(name);
    }
  }

  setFrame(frame: number) {
    this.pendingFrame = Math.min(PREVIEW_MAX_FRAME, Math.max(0, Math.round(frame)));
    this.frame = this.pendingFrame;
    if (!this.enabled) return;
    if (this.raf !== 0) return;
    this.raf = requestAnimationFrame(() => {
      this.raf = 0;
      this.frame = this.pendingFrame;
      this.applyFrame();
    });
  }

  private applyFrame() {
    const palette = paletteForFrame(this.frame);
    const body = document.body;
    this.syncNativeTheme(palette.stage === 5 ? "dark" : "light");
    body.dataset.liangStage = String(palette.stage);
    body.style.setProperty("--liang-strength", String(palette.strength));
    body.style.setProperty("--liang-page", palette.page);
    body.style.setProperty("--liang-bg-base", palette.base);
    body.style.setProperty("--liang-layer-1", palette.layer1);
    body.style.setProperty("--liang-layer-2", palette.layer2);
    body.style.setProperty("--liang-layer-3", palette.layer3);
    body.style.setProperty("--liang-sidebar", palette.sidebar);
    body.style.setProperty("--liang-ink", palette.ink);
    body.style.setProperty("--liang-secondary", palette.secondary);
    body.style.setProperty("--liang-tertiary", palette.tertiary);
    body.style.setProperty("--liang-border", palette.border);
    body.style.setProperty("--liang-accent", palette.accent);
    body.style.setProperty("--liang-accent-hover", palette.accentHover);
    body.style.setProperty("--liang-hover", palette.hover);
    body.style.setProperty("--liang-portrait-opacity", palette.portraitOpacity);
    this.updatePortrait(palette.level);
    this.seek(this.frame);
  }

  syncNativeTheme(theme: NativeThemeId = paletteForFrame(this.frame).stage === 5 ? "dark" : "light") {
    if (!this.enabled || this.theme.getTheme().preference === theme) return;
    this.theme.setTheme(theme);
  }

  private updatePortrait(level: number) {
    const { lowerIndex, upperIndex, mix } = portraitBlendForLevel(
      level,
      PORTRAIT_ANCHORS.map((anchor) => anchor.level),
    );
    const lower = PORTRAIT_ANCHORS[lowerIndex];
    const upper = PORTRAIT_ANCHORS[upperIndex];
    const selected = mix >= 0.5 ? upper : lower;
    const source = `${ASSET_PREFIX}/portrait-source-v2/${selected.file}`;
    if (this.portrait.getAttribute("src") !== source) this.portrait.src = source;
  }

  private seek(frame: number) {
    if (this.video.readyState < 1 || this.video.duration === 0) return;
    const duration = Number.isFinite(this.video.duration) ? this.video.duration : VIDEO_DURATION;
    const target = Math.min(Math.max(0, duration - 0.001), (frame / PREVIEW_MAX_FRAME) * duration);
    if (Math.abs(this.video.currentTime - target) > 0.025) this.video.currentTime = target;
  }

  async choose(enabled: boolean) {
    this.setEnabled(enabled);
    try {
      await this.scope.set(enabled);
    } catch (error) {
      this.syncSettings();
      throw error;
    }
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.unsubscribe();
    if (this.raf !== 0) cancelAnimationFrame(this.raf);
    this.video.pause();
    this.video.removeEventListener("loadedmetadata", this.handleMetadata);
    this.video.removeEventListener("error", this.handleVideoError);
    this.portrait.removeEventListener("error", this.handleSequenceError);
    this.poster.removeEventListener("error", this.handlePosterError);
    for (const image of this.preloads) image.src = "";
    this.root.remove();
    document.body.removeAttribute("data-liang-skin");
    delete document.body.dataset.liangStage;
    for (const name of cssVariables) document.body.style.removeProperty(name);
  }
}

function modelReasoning(state: ModelDirectoryState) {
  const current = state.current;
  if (current === null) return null;
  const group = state.groups.find((item) => item.id === current.provider);
  const model = group?.models.find((item) => item.id === current.model);
  if (model?.reasoning === undefined) return null;
  return {
    selection: current,
    efforts: model.reasoning.efforts,
    defaultEffort: model.reasoning.defaultEffort,
  };
}

function LiangEffortSlider({ directory, load, select, presenter, scope }: SliderProps) {
  const state = useSyncExternalStore(
    (listener) => directory.subscribe(listener),
    () => directory.getSnapshot(),
  );
  const skin = useSyncExternalStore(
    (listener) => scope.subscribe(listener),
    () => scope.getSnapshot(),
  );
  const reasoning = useMemo(() => modelReasoning(state), [state]);
  const efforts = reasoning?.efforts ?? [];
  const committedIndex = selectedEffortIndex(
    efforts,
    reasoning?.selection.reasoningEffort,
    reasoning?.defaultEffort,
  );
  const committedFrame = committedIndex < 0
    ? 0
    : frameForEffort(committedIndex, efforts.length);
  const [frame, setFrame] = useState(committedFrame);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const dragging = useRef(false);
  const enabled = skin.enabled;

  useEffect(() => {
    if (enabled) load();
  }, [enabled, load]);

  useEffect(() => {
    if (dragging.current || pending) return;
    setFrame(committedFrame);
    presenter.setFrame(committedFrame);
  }, [committedFrame, pending, presenter]);

  if (!enabled) return null;
  if (reasoning === null || efforts.length < 2) return null;

  const previewIndex = nearestEffortIndex(frame, efforts);
  const previewEffort = efforts[previewIndex];
  const progressRatio = frame / PREVIEW_MAX_FRAME;

  const commit = async (rawFrame: number) => {
    const targetIndex = nearestEffortIndex(rawFrame, efforts);
    const target = efforts[targetIndex];
    if (target === undefined) return;
    const targetFrame = frameForEffort(targetIndex, efforts.length);
    dragging.current = false;
    setFrame(targetFrame);
    presenter.setFrame(targetFrame);
    if (targetIndex === committedIndex || pending) return;
    setPending(true);
    setFailed(false);
    const accepted = await select({
      provider: reasoning.selection.provider,
      model: reasoning.selection.model,
      reasoningEffort: target.id,
    });
    setPending(false);
    if (!accepted) {
      setFailed(true);
      setFrame(committedFrame);
      presenter.setFrame(committedFrame);
    }
  };

  return (
    <div
      className="liang-effort-control"
      data-plugin={PACKAGE_ID}
      data-state={failed ? "error" : pending ? "pending" : "ready"}
      title={previewEffort?.name}
    >
      {interacting && (
        <output
          className="liang-effort-control__tooltip"
          style={{ "--liang-slider-ratio": progressRatio } as React.CSSProperties}
        >
          {indicatorLabel(frame, efforts)}
        </output>
      )}
      <div className="liang-effort-control__ticks" aria-hidden="true">
        {efforts.map((effort, index) => (
          <i
            className="liang-effort-control__tick"
            key={effort.id}
            style={{ left: `${(frameForEffort(index, efforts.length) / PREVIEW_MAX_FRAME) * 100}%` }}
          />
        ))}
      </div>
      <input
        className="liang-effort-control__range"
        type="range"
        min={0}
        max={PREVIEW_MAX_FRAME}
        step={1}
        value={frame}
        disabled={pending || state.status === "selecting"}
        aria-label="思考等级"
        aria-valuetext={previewEffort?.name ?? ""}
        onPointerDown={() => {
          dragging.current = true;
          setInteracting(true);
        }}
        onInput={(event) => {
          dragging.current = true;
          const next = Number(event.currentTarget.value);
          setFrame(next);
          presenter.setFrame(next);
        }}
        onPointerUp={(event) => {
          setInteracting(false);
          void commit(Number(event.currentTarget.value));
        }}
        onPointerCancel={() => {
          setInteracting(false);
          dragging.current = false;
          setFrame(committedFrame);
          presenter.setFrame(committedFrame);
        }}
        onKeyUp={(event) => {
          setInteracting(false);
          if (event.key !== "Escape") void commit(Number(event.currentTarget.value));
        }}
        onBlur={(event) => {
          setInteracting(false);
          if (dragging.current) void commit(Number(event.currentTarget.value));
        }}
        onKeyDown={(event) => {
          setInteracting(true);
          if (event.key === "Escape" && !pending) {
            setInteracting(false);
            dragging.current = false;
            setFrame(committedFrame);
            presenter.setFrame(committedFrame);
          }
        }}
      />
    </div>
  );
}

function AppearanceSkinRow({ scope, presenter, t }: SettingsRowProps) {
  const snapshot = useSyncExternalStore(
    (listener) => scope.subscribe(listener),
    () => scope.getSnapshot(),
  );
  const enabled = snapshot.enabled;
  const [pending, setPending] = useState(false);

  const choose = async (next: boolean) => {
    if (next === enabled || pending) return;
    setPending(true);
    try {
      await presenter.choose(next);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="liang-settings-row" data-plugin={PACKAGE_ID}>
      <span className="liang-settings-row__title">{t("appearance.title")}</span>
      <div className="liang-settings-row__choices">
        <button
          className="liang-settings-row__choice"
          type="button"
          aria-pressed={!enabled}
          disabled={pending}
          onClick={() => void choose(false)}
        >
          {t("appearance.native")}
        </button>
        <button
          className="liang-settings-row__choice"
          type="button"
          aria-pressed={enabled}
          disabled={pending}
          onClick={() => void choose(true)}
        >
          {t("appearance.liang")}
        </button>
      </div>
    </div>
  );
}

export const inject = [
  "slots",
  "sessions",
  "modelDirectories",
  "locale",
  "theme",
];

function createPreferenceStore(): PreferenceStore {
  let snapshot: SkinSettings = {
    enabled: localStorage.getItem(PREFERENCE_KEY) !== "0",
  };
  const listeners = new Set<() => void>();
  const onStorage = (event: StorageEvent) => {
    if (event.key !== PREFERENCE_KEY) return;
    const enabled = event.newValue !== "0";
    if (enabled === snapshot.enabled) return;
    snapshot = { enabled };
    for (const listener of listeners) listener();
  };
  window.addEventListener("storage", onStorage);
  return {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    async set(enabled) {
      if (enabled === snapshot.enabled) return;
      localStorage.setItem(PREFERENCE_KEY, enabled ? "1" : "0");
      snapshot = { enabled };
      for (const listener of listeners) listener();
    },
    dispose() {
      window.removeEventListener("storage", onStorage);
      listeners.clear();
    },
  };
}

export function apply(ctx: ClientContext) {
  const style = document.createElement("style");
  style.dataset.plugin = PACKAGE_ID;
  style.textContent = styles;
  document.head.append(style);
  ctx.effect(() => () => style.remove(), "liang-intensity-skin: scoped styles");

  const scope = createPreferenceStore();
  ctx.effect(() => () => scope.dispose(), "liang-intensity-skin: appearance preference");
  const theme = ctx.get("theme") as ThemeService;
  const presenter = new SkinPresenter(scope, theme);
  ctx.effect(() => () => presenter.dispose(), "liang-intensity-skin: backdrop presenter");
  ctx.effect(
    () => ctx.on("theme/change", () => presenter.syncNativeTheme()),
    "liang-intensity-skin: native theme synchronization",
  );

  ctx.effect(() => ctx.locale.register(LOCALE_NAMESPACE, {
    zh: {
      "appearance.title": "外观皮肤",
      "appearance.native": "原生",
      "appearance.liang": "滑动变祖",
    },
    en: {
      "appearance.title": "Visual skin",
      "appearance.native": "Native",
      "appearance.liang": "Slider",
    },
  }), "liang-intensity-skin: settings locale");

  ctx.slots.inject("settings.general.item", () => ctx.slots.register({
    name: "settings.general.item",
    id: "liang-intensity-appearance",
    order: 11,
    locale: LOCALE_NAMESPACE,
    inject: () => ({ scope, presenter }),
  }, AppearanceSkinRow));

  ctx.slots.inject("conversation.input.right", () => ctx.slots.register({
    name: "conversation.input.right",
    id: "liang-intensity-control",
    order: 10,
    inject: (sessionId: string) => {
      const available = ctx.sessions.subagentAddress(sessionId) === undefined;
      const directory = ctx.modelDirectories.directoryFor(sessionId) as ModelDirectory;
      return {
        directory: directory.store,
        presenter,
        scope,
        load: () => {
          if (available) void directory.load().catch(() => undefined);
        },
        select: (selection: ModelSelection) => available
          ? directory.select(selection).then(() => true, () => false)
          : Promise.resolve(false),
      };
    },
  }, LiangEffortSlider));
}
