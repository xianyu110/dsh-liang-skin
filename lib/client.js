window.__ModuleLoader__.load({id:"dsh-client-liang-intensity-skin",factory:(require)=>{var module={exports:{}};var exports=module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_react = require("react");

// src/client/skin.css
var skin_default = '.liang-skin-backdrop {\n  position: fixed;\n  z-index: 0;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n  background: var(--liang-page, transparent);\n  opacity: 0;\n  transition: opacity 220ms ease, background-color 180ms linear;\n}\n\nbody[data-liang-skin="on"] .liang-skin-backdrop {\n  opacity: 1;\n}\n\n.liang-skin-backdrop video,\n.liang-skin-backdrop img {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  display: block;\n  width: min(42vw, 720px);\n  height: 100vh;\n  object-fit: cover;\n  object-position: 50% 42%;\n  opacity: var(--liang-portrait-opacity, 0.45);\n  transform: translateY(-50%);\n  filter: none;\n  mask-image: linear-gradient(90deg, transparent 0%, rgb(0 0 0 / 20%) 10%, black 30%, black 100%);\n  transition: filter 180ms linear;\n}\n\n.liang-skin-backdrop img {\n  display: none;\n}\n\n.liang-skin-backdrop[data-media="sequence"] video,\n.liang-skin-backdrop[data-media="sequence"] .liang-skin-poster {\n  display: none;\n}\n\n.liang-skin-backdrop[data-media="sequence"] .liang-skin-sequence-frame {\n  display: block;\n  opacity: var(--liang-portrait-opacity, 0.82);\n}\n\n.liang-skin-backdrop[data-media="video"] .liang-skin-sequence-frame,\n.liang-skin-backdrop[data-media="video"] .liang-skin-poster {\n  display: none;\n}\n\n.liang-skin-backdrop[data-media="poster"] video,\n.liang-skin-backdrop[data-media="poster"] .liang-skin-sequence-frame {\n  display: none;\n}\n\n.liang-skin-backdrop[data-media="poster"] .liang-skin-poster {\n  display: block;\n}\n\n.liang-skin-backdrop[data-media="color"] video,\n.liang-skin-backdrop[data-media="color"] img {\n  display: none;\n}\n\n.liang-skin-backdrop::after {\n  position: absolute;\n  inset: 0;\n  content: "";\n  background: linear-gradient(90deg, var(--liang-page, transparent) 0 28%, transparent 57% 100%);\n}\n\nbody[data-liang-skin="on"] {\n  --dsw-alias-bg-base: var(--liang-bg-base) !important;\n  --dsw-alias-bg-layer-1: var(--liang-layer-1) !important;\n  --dsw-alias-bg-layer-2: var(--liang-layer-2) !important;\n  --dsw-alias-bg-layer-3: var(--liang-layer-3) !important;\n  --dsw-specific-sidebar-fill: var(--liang-sidebar) !important;\n  --dsw-alias-label-primary: var(--liang-ink) !important;\n  --dsw-alias-label-primary-dimmed: var(--liang-ink) !important;\n  --dsw-alias-label-secondary: var(--liang-secondary) !important;\n  --dsw-alias-label-tertiary: var(--liang-tertiary) !important;\n  --dsw-alias-label-caption: var(--liang-tertiary) !important;\n  --dsw-alias-border-l1: var(--liang-border) !important;\n  --dsw-alias-border-l2-darkmode-thin: var(--liang-border) !important;\n  --dsw-alias-border-l2: var(--liang-border) !important;\n  --dsw-alias-border-l3: var(--liang-border) !important;\n  --dsw-alias-button-primary-fill: var(--liang-accent) !important;\n  --dsw-alias-button-primary-hover: var(--liang-accent-hover) !important;\n  --dsw-alias-button-info-fill: var(--liang-accent) !important;\n  --dsw-alias-button-info-hover: var(--liang-accent-hover) !important;\n  --dsw-alias-state-business-primary: var(--liang-accent) !important;\n  --dsw-alias-interactive-bg-hover: var(--liang-hover) !important;\n  --dsw-alias-interactive-bg-active: var(--liang-hover) !important;\n  --dsw-alias-button-elevated-fill: var(--liang-layer-1) !important;\n  --dsw-alias-button-floating-fill: var(--liang-layer-2) !important;\n  --dsw-alias-button-floating-hover: var(--liang-layer-3) !important;\n  --dsw-alias-interactive-bg-hover-solid: var(--liang-layer-2) !important;\n  --dsw-specific-bubble: var(--liang-layer-2) !important;\n  --dsw-specific-input-major: var(--liang-layer-1) !important;\n  --dsw-specific-menu: var(--liang-layer-3) !important;\n  --dsw-specific-selector: var(--liang-layer-2) !important;\n  background: var(--liang-page) !important;\n}\n\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) {\n  --dsw-alias-brand-primary-new-colorprimary-new-color: rgb(65 118 230) !important;\n  --dsw-alias-brand-primary: rgb(15 17 21) !important;\n  --dsw-alias-brand-text: rgb(15 17 21) !important;\n  --dsw-alias-button-primary-fill: rgb(15 17 21) !important;\n  --dsw-alias-button-primary-hover: rgb(53 54 56) !important;\n  --dsw-alias-button-info-fill: rgb(65 118 230) !important;\n  --dsw-alias-button-info-hover: rgb(103 158 254) !important;\n  --dsw-alias-state-business-primary: rgb(65 118 230) !important;\n  --dsw-alias-label-primary-inverted: rgb(249 250 251) !important;\n  --dsw-alias-button-elevated-fill: rgb(255 255 255) !important;\n  --dsw-alias-button-floating-fill: rgb(255 255 255) !important;\n  --dsw-alias-button-floating-hover: rgb(241 243 245) !important;\n  --dsw-alias-interactive-bg-hover-solid: rgb(241 243 245) !important;\n  --dsw-specific-bubble: rgb(237 243 254) !important;\n  --dsw-specific-input-major: rgb(255 255 255) !important;\n  --dsw-specific-menu: rgb(255 255 255) !important;\n  --dsw-specific-selector: rgb(245 246 247) !important;\n}\n\nbody[data-liang-skin="on"][data-liang-stage="5"] {\n  --dsw-alias-brand-primary-new-colorprimary-new-color: #c19a49 !important;\n  --dsw-alias-brand-primary: #c19a49 !important;\n  --dsw-alias-brand-text: #d5b56e !important;\n  --dsw-alias-button-info-fill: #c19a49 !important;\n  --dsw-alias-button-info-hover: #d5b56e !important;\n  --dsw-alias-state-business-primary: #c19a49 !important;\n}\n\n/* Preserve the wordmark badge contrast even when the underlying Harness\n   preference is dark while our low-intensity shell is light. */\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"] svg[viewBox="0 0 182 24"] > rect[width="52"] {\n  fill: rgb(15 17 21) !important;\n}\n\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"] svg[viewBox="0 0 182 24"] > g[clip-path*="badge"] path {\n  fill: rgb(249 250 251) !important;\n}\n\nbody[data-liang-skin="on"][data-liang-stage="5"] button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"] svg[viewBox="0 0 182 24"] > rect[width="52"] {\n  fill: #c19a49 !important;\n}\n\nbody[data-liang-skin="on"][data-liang-stage="5"] button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"] svg[viewBox="0 0 182 24"] > g[clip-path*="badge"] path {\n  fill: #171816 !important;\n}\n\nbody[data-liang-skin="on"][data-liang-stage="5"] [aria-label^="\u9009\u62E9\u6A21\u578B"] > span:nth-of-type(2) {\n  color: #d5b56e !important;\n}\n\nbody[data-liang-skin="on"][data-liang-stage="5"] [class*="heroGlow"] ellipse {\n  fill: #c19a49 !important;\n  fill-opacity: 0.16 !important;\n}\n\nbody[data-liang-skin="on"][data-liang-stage="5"] span[class*="_previewBadge"] {\n  color: #171816 !important;\n  background: #c19a49 !important;\n}\n\nbody[data-liang-skin="on"][data-liang-stage="5"] button[aria-label="\u53D1\u9001\u6D88\u606F"] {\n  color: #171816 !important;\n}\n\nbody[data-liang-skin="on"][data-liang-stage="5"] button[aria-label="\u53D1\u9001\u6D88\u606F"]:disabled {\n  opacity: 0.62;\n}\n\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) button[aria-label="\u53D1\u9001\u6D88\u606F"] {\n  color: #fff !important;\n}\n\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) button[aria-label="\u53D1\u9001\u6D88\u606F"]:disabled {\n  color: rgb(255 255 255 / 92%) !important;\n  background: rgb(65 118 230 / 42%) !important;\n  opacity: 1;\n}\n\nbody[data-liang-skin="on"] > #root {\n  position: relative;\n  z-index: 1;\n  background: transparent !important;\n}\n\nbody[data-liang-skin="on"] button,\nbody[data-liang-skin="on"] input,\nbody[data-liang-skin="on"] textarea {\n  transition: color 160ms linear, background-color 160ms linear, border-color 160ms linear;\n}\n\n/* Harness can itself be in dark mode while the low intensity stages are light.\n   The composer card has a native theme-mode fill, so explicitly bring only\n   those light stages back to the original light surface and readable ink. */\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) [data-composer-card="true"] {\n  border-color: var(--liang-border) !important;\n  color: var(--liang-ink) !important;\n  background: var(--liang-layer-1) !important;\n  box-shadow: 0 8px 28px rgb(20 22 20 / 8%);\n}\n\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) [data-composer-card="true"] :is(textarea, button, [data-input-mirror="true"]) {\n  color: var(--liang-ink) !important;\n  caret-color: var(--liang-accent) !important;\n}\n\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) [data-composer-card="true"] textarea::placeholder {\n  color: var(--liang-tertiary) !important;\n  opacity: 1;\n}\n\n.liang-effort-control {\n  --liang-control-accent: var(--dsw-alias-brand-primary-new-colorprimary-new-color, #4176e6);\n  --liang-control-rail: var(--dsw-alias-border-l3, rgb(0 0 0 / 16%));\n  position: relative;\n  display: flex;\n  width: 124px;\n  height: 28px;\n  align-items: center;\n  margin: 0 3px;\n  overflow: visible;\n}\n\nbody[data-liang-skin="on"] .liang-effort-control {\n  --liang-control-accent: var(--liang-accent);\n  --liang-control-rail: color-mix(in srgb, var(--liang-accent) 34%, transparent);\n}\n\nbody[data-liang-skin="on"]:is(\n  [data-liang-stage="0"],\n  [data-liang-stage="1"],\n  [data-liang-stage="2"],\n  [data-liang-stage="3"]\n) .liang-effort-control {\n  --liang-control-accent: var(--liang-secondary);\n  --liang-control-rail: color-mix(in srgb, var(--liang-secondary) 28%, transparent);\n}\n\n.liang-effort-control__ticks {\n  position: absolute;\n  z-index: 0;\n  inset: 0 10px;\n  pointer-events: none;\n}\n\n.liang-effort-control__tooltip {\n  position: absolute;\n  z-index: 4;\n  bottom: calc(100% + 7px);\n  left: var(--liang-tooltip-position);\n  min-width: max-content;\n  padding: 5px 8px;\n  border: 1px solid var(--liang-border, rgb(0 0 0 / 12%));\n  border-radius: 7px;\n  color: var(--liang-ink, #171816);\n  background: var(--liang-layer-1, #fff);\n  box-shadow: 0 5px 16px rgb(0 0 0 / 16%);\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  pointer-events: none;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n.liang-effort-control__tooltip::after {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  width: 7px;\n  height: 7px;\n  content: "";\n  background: inherit;\n  transform: translate(-50%, -4px) rotate(45deg);\n}\n\n.liang-effort-control__tick {\n  position: absolute;\n  top: 50%;\n  width: 1px;\n  height: 7px;\n  background: var(--liang-control-accent);\n  opacity: 0.42;\n  transform: translate(-50%, -50%);\n}\n\n.liang-effort-control__range {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 28px;\n  margin: 0;\n  cursor: ew-resize;\n  appearance: none;\n  background: transparent;\n  touch-action: pan-y;\n}\n\n.liang-effort-control__range:disabled {\n  cursor: progress;\n  opacity: 0.58;\n}\n\n.liang-effort-control__range::-webkit-slider-runnable-track {\n  height: 1px;\n  border-radius: 1px;\n  background: linear-gradient(90deg, var(--liang-control-accent) 0 var(--liang-slider-progress), var(--liang-control-rail) var(--liang-slider-progress) 100%);\n}\n\n.liang-effort-control__range::-webkit-slider-thumb {\n  width: 13px;\n  height: 13px;\n  margin-top: -6px;\n  border: 1.5px solid color-mix(in srgb, var(--liang-control-accent) 72%, transparent);\n  border-radius: 50%;\n  appearance: none;\n  background: radial-gradient(circle, var(--liang-control-accent) 0 2px, color-mix(in srgb, var(--liang-control-accent) 22%, var(--dsw-alias-bg-layer-1, #fff)) 2.5px);\n  box-shadow: 0 1px 4px rgb(0 0 0 / 14%);\n}\n\nbody[data-liang-skin="on"] .liang-effort-control__range::-webkit-slider-thumb {\n  width: 13px;\n  height: 13px;\n  margin-top: -6px;\n  border-color: color-mix(in srgb, var(--liang-control-accent) 72%, transparent);\n  background: radial-gradient(circle, var(--liang-control-accent) 0 2px, color-mix(in srgb, var(--liang-control-accent) 22%, var(--liang-layer-1)) 2.5px);\n}\n\n.liang-effort-control__range::-moz-range-track {\n  height: 1px;\n  background: var(--liang-control-rail);\n}\n\n.liang-effort-control__range::-moz-range-progress {\n  height: 1px;\n  background: var(--liang-control-accent);\n}\n\n.liang-effort-control__range::-moz-range-thumb {\n  width: 11px;\n  height: 11px;\n  border: 1.5px solid color-mix(in srgb, var(--liang-control-accent) 72%, transparent);\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--liang-control-accent) 24%, var(--dsw-alias-bg-layer-1, #fff));\n}\n\n.liang-effort-control__range:focus-visible {\n  outline: none;\n}\n\n.liang-effort-control[data-state="error"] {\n  --liang-control-accent: var(--dsw-alias-state-error-primary, #e43c3c);\n}\n\n.liang-settings-row {\n  display: flex;\n  min-height: 82px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--dsw-alias-border-l1, rgb(0 0 0 / 6%));\n  color: var(--dsw-alias-label-primary);\n}\n\n.liang-settings-row__title {\n  flex: 0 0 auto;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.liang-settings-row__choices {\n  display: flex;\n  gap: 8px;\n}\n\n.liang-settings-row__choice {\n  min-width: 76px;\n  height: 40px;\n  padding: 0 14px;\n  border: 1px solid var(--dsw-alias-border-l2, rgb(0 0 0 / 10%));\n  border-radius: 10px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-1);\n  cursor: pointer;\n}\n\n.liang-settings-row__choice:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.liang-settings-row__choice[aria-pressed="true"] {\n  border-color: var(--dsw-alias-label-primary);\n  color: var(--dsw-alias-label-primary);\n  box-shadow: inset 0 0 0 1px var(--dsw-alias-label-primary);\n}\n\n@media (max-width: 760px) {\n  .liang-effort-control {\n    width: 92px;\n  }\n\n  .liang-skin-backdrop video,\n  .liang-skin-backdrop img {\n    right: -18vw;\n    width: 92vw;\n    opacity: calc(var(--liang-portrait-opacity, 0.45) * 0.72);\n  }\n\n  .liang-settings-row {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .liang-skin-backdrop,\n  .liang-skin-backdrop video,\n  .liang-skin-backdrop img,\n  body[data-liang-skin="on"] button,\n  body[data-liang-skin="on"] input,\n  body[data-liang-skin="on"] textarea {\n    transition: none;\n  }\n}\n';

// src/client/logic.ts
var PREVIEW_MAX_FRAME = 240;
var MAX_LEVEL = 30;
var LIANG_RANKS = ["\u5C0F\u96BE\u6881", "\u7262\u6881", "\u6881\u5B50", "\u6881\u5723", "\u6881\u795E", "\u6881\u7956"];
var STOPS = [
  { at: 0, page: [232, 233, 229], surface: [248, 248, 245], surface2: [238, 239, 235], ink: [23, 24, 22], secondary: [112, 116, 111], accent: [181, 43, 36], portraitOpacity: 0.92 },
  { at: 6, page: [211, 211, 206], surface: [239, 239, 234], surface2: [224, 224, 218], ink: [26, 26, 24], secondary: [101, 101, 96], accent: [181, 43, 36], portraitOpacity: 0.93 },
  { at: 12, page: [171, 168, 162], surface: [211, 208, 201], surface2: [190, 186, 179], ink: [27, 26, 24], secondary: [83, 79, 74], accent: [166, 54, 42], portraitOpacity: 0.94 },
  { at: 18, page: [117, 112, 106], surface: [154, 148, 140], surface2: [128, 122, 115], ink: [24, 22, 20], secondary: [65, 61, 56], accent: [154, 56, 42], portraitOpacity: 0.94 },
  { at: 24, page: [43, 39, 37], surface: [48, 43, 40], surface2: [58, 51, 46], ink: [244, 241, 232], secondary: [184, 180, 169], accent: [181, 92, 54], portraitOpacity: 0.94 },
  { at: 30, page: [17, 17, 17], surface: [30, 27, 25], surface2: [41, 35, 30], ink: [244, 241, 232], secondary: [184, 180, 169], accent: [193, 154, 73], portraitOpacity: 0.94 }
];
function clampFrame(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.min(PREVIEW_MAX_FRAME, Math.max(0, Math.round(value)));
}
function frameForEffort(index, count) {
  if (count <= 1 || !Number.isFinite(index)) return 0;
  const safe = Math.min(count - 1, Math.max(0, Math.round(index)));
  return Math.round(safe / (count - 1) * PREVIEW_MAX_FRAME);
}
function nearestEffortIndex(frame, efforts) {
  if (efforts.length === 0) return -1;
  const safe = clampFrame(frame);
  let best = 0;
  let distance = Math.abs(safe - frameForEffort(0, efforts.length));
  for (let index = 1; index < efforts.length; index += 1) {
    const next = Math.abs(safe - frameForEffort(index, efforts.length));
    if (next < distance) {
      best = index;
      distance = next;
    }
  }
  return best;
}
function selectedEffortIndex(efforts, selectedId, defaultId) {
  const id = selectedId ?? defaultId;
  return id === void 0 ? -1 : efforts.findIndex((effort) => effort.id === id);
}
function portraitBlendForLevel(level, anchors) {
  if (anchors.length === 0) return { lowerIndex: -1, upperIndex: -1, mix: 0 };
  const safeLevel = Number.isFinite(level) ? Math.min(anchors[anchors.length - 1], Math.max(anchors[0], level)) : anchors[0];
  let upperIndex = anchors.findIndex((anchor) => anchor >= safeLevel);
  if (upperIndex < 0) upperIndex = anchors.length - 1;
  const lowerIndex = Math.max(0, upperIndex - (anchors[upperIndex] > safeLevel ? 1 : 0));
  const span = anchors[upperIndex] - anchors[lowerIndex];
  return {
    lowerIndex,
    upperIndex,
    mix: span === 0 ? 0 : (safeLevel - anchors[lowerIndex]) / span
  };
}
function liangRankForFrame(rawFrame) {
  const level = clampFrame(rawFrame) / PREVIEW_MAX_FRAME * MAX_LEVEL;
  const index = level >= MAX_LEVEL ? LIANG_RANKS.length - 1 : Math.floor(level / 6);
  return LIANG_RANKS[Math.min(LIANG_RANKS.length - 1, Math.max(0, index))];
}
function indicatorLabel(rawFrame, efforts) {
  const effort = efforts[nearestEffortIndex(rawFrame, efforts)];
  return effort === void 0 ? liangRankForFrame(rawFrame) : `${liangRankForFrame(rawFrame)} \xB7 ${effort.name}`;
}
function lerp(a, b, amount) {
  return a + (b - a) * amount;
}
function mix(a, b, amount) {
  return [
    Math.round(lerp(a[0], b[0], amount)),
    Math.round(lerp(a[1], b[1], amount)),
    Math.round(lerp(a[2], b[2], amount))
  ];
}
function rgb(value, alpha = 1) {
  return alpha === 1 ? `rgb(${value[0]} ${value[1]} ${value[2]})` : `rgb(${value[0]} ${value[1]} ${value[2]} / ${alpha})`;
}
function paletteForFrame(rawFrame) {
  const frame = clampFrame(rawFrame);
  const level = frame / PREVIEW_MAX_FRAME * MAX_LEVEL;
  const portraitStage = Math.min(5, Math.floor(level / 6));
  const portraitFrom = STOPS[portraitStage];
  const portraitTo = STOPS[Math.min(5, portraitStage + 1)];
  const portraitAmount = portraitFrom === portraitTo ? 0 : (level - portraitFrom.at) / (portraitTo.at - portraitFrom.at);
  const dark = level >= 24;
  const stage = dark ? 5 : 0;
  const ui = dark ? STOPS[5] : STOPS[0];
  const page = ui.page;
  const surface = ui.surface;
  const surface2 = ui.surface2;
  const sidebar = mix(page, surface2, 0.25);
  const ink = ui.ink;
  const secondary = ui.secondary;
  const accent = dark ? [193, 154, 73] : [65, 118, 230];
  const accentHover = mix(accent, ink, 0.13);
  return {
    level,
    stage,
    strength: level / MAX_LEVEL,
    page: rgb(page),
    // Keep the shell readable while allowing the right-side portrait to remain
    // visibly present. Dense controls use the opaque layer tokens below.
    base: rgb(page, dark ? 0.42 : 0.28),
    layer1: rgb(surface, 0.94),
    layer2: rgb(surface2, 0.96),
    layer3: rgb(surface2, 0.99),
    sidebar: rgb(sidebar, 0.96),
    ink: rgb(ink),
    secondary: rgb(secondary),
    tertiary: rgb(mix(secondary, page, 0.28)),
    border: rgb(ink, dark ? 0.15 : 0.12),
    accent: rgb(accent),
    accentHover: rgb(accentHover),
    hover: rgb(ink, dark ? 0.09 : 0.07),
    portraitOpacity: String(lerp(
      portraitFrom.portraitOpacity,
      portraitTo.portraitOpacity,
      portraitAmount
    ))
  };
}

// src/client/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var PACKAGE_ID = "dsh-client-liang-intensity-skin";
var LOCALE_NAMESPACE = "liang.skin";
var ASSET_PREFIX = `/plugins/${PACKAGE_ID}/assets`;
var VIDEO_DURATION = 8.033;
var PREFERENCE_KEY = "dsh-liang-intensity-skin.enabled";
var PORTRAIT_ANCHORS = [
  { level: 0, file: "stage-00.png" },
  { level: 6, file: "stage-06.png" },
  { level: 12, file: "stage-12.png" },
  { level: 15, file: "bridge-15.png" },
  { level: 18, file: "stage-18.png" },
  { level: 24, file: "stage-24.png" },
  { level: 27, file: "bridge-27.png" },
  { level: 30, file: "stage-30.png" }
];
var cssVariables = [
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
  "--liang-portrait-opacity"
];
var SkinPresenter = class {
  scope;
  root;
  video;
  poster;
  portrait;
  preloads;
  enabled = true;
  frame = 0;
  pendingFrame = 0;
  raf = 0;
  disposed = false;
  unsubscribe;
  constructor(scope) {
    this.scope = scope;
    this.root = document.createElement("div");
    this.root.className = "liang-skin-backdrop";
    this.root.dataset.plugin = PACKAGE_ID;
    this.root.dataset.media = "sequence";
    this.root.setAttribute("aria-hidden", "true");
    this.video = document.createElement("video");
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.preload = "auto";
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
  handleMetadata = () => {
    this.seek(this.frame);
  };
  handleVideoError = () => {
    this.root.dataset.media = "poster";
  };
  handleSequenceError = () => {
    this.root.dataset.media = "video";
  };
  handlePosterError = () => {
    this.root.dataset.media = "color";
  };
  syncSettings() {
    this.setEnabled(this.scope.getSnapshot().enabled);
  }
  isEnabled() {
    return this.enabled;
  }
  setEnabled(enabled) {
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
  setFrame(frame) {
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
  applyFrame() {
    const palette = paletteForFrame(this.frame);
    const body = document.body;
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
  updatePortrait(level) {
    const { lowerIndex, upperIndex, mix: mix2 } = portraitBlendForLevel(
      level,
      PORTRAIT_ANCHORS.map((anchor) => anchor.level)
    );
    const lower = PORTRAIT_ANCHORS[lowerIndex];
    const upper = PORTRAIT_ANCHORS[upperIndex];
    const selected = mix2 >= 0.5 ? upper : lower;
    const source = `${ASSET_PREFIX}/portrait-source-v2/${selected.file}`;
    if (this.portrait.getAttribute("src") !== source) this.portrait.src = source;
  }
  seek(frame) {
    if (this.video.readyState < 1 || this.video.duration === 0) return;
    const duration = Number.isFinite(this.video.duration) ? this.video.duration : VIDEO_DURATION;
    const target = Math.min(Math.max(0, duration - 1e-3), frame / PREVIEW_MAX_FRAME * duration);
    if (Math.abs(this.video.currentTime - target) > 0.025) this.video.currentTime = target;
  }
  async choose(enabled) {
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
};
function modelReasoning(state) {
  const current = state.current;
  if (current === null) return null;
  const group = state.groups.find((item) => item.id === current.provider);
  const model = group?.models.find((item) => item.id === current.model);
  if (model?.reasoning === void 0) return null;
  return {
    selection: current,
    efforts: model.reasoning.efforts,
    defaultEffort: model.reasoning.defaultEffort
  };
}
function LiangEffortSlider({ directory, load, select, presenter, scope }) {
  const state = (0, import_react.useSyncExternalStore)(
    (listener) => directory.subscribe(listener),
    () => directory.getSnapshot()
  );
  const skin = (0, import_react.useSyncExternalStore)(
    (listener) => scope.subscribe(listener),
    () => scope.getSnapshot()
  );
  const reasoning = (0, import_react.useMemo)(() => modelReasoning(state), [state]);
  const efforts = reasoning?.efforts ?? [];
  const committedIndex = selectedEffortIndex(
    efforts,
    reasoning?.selection.reasoningEffort,
    reasoning?.defaultEffort
  );
  const committedFrame = committedIndex < 0 ? 0 : frameForEffort(committedIndex, efforts.length);
  const [frame, setFrame] = (0, import_react.useState)(committedFrame);
  const [pending, setPending] = (0, import_react.useState)(false);
  const [failed, setFailed] = (0, import_react.useState)(false);
  const [interacting, setInteracting] = (0, import_react.useState)(false);
  const dragging = (0, import_react.useRef)(false);
  const enabled = skin.enabled;
  (0, import_react.useEffect)(() => {
    if (enabled) load();
  }, [enabled, load]);
  (0, import_react.useEffect)(() => {
    if (dragging.current || pending) return;
    setFrame(committedFrame);
    presenter.setFrame(committedFrame);
  }, [committedFrame, pending, presenter]);
  if (!enabled) return null;
  if (reasoning === null || efforts.length < 2) return null;
  const previewIndex = nearestEffortIndex(frame, efforts);
  const previewEffort = efforts[previewIndex];
  const progress = `${frame / PREVIEW_MAX_FRAME * 100}%`;
  const commit = async (rawFrame) => {
    const targetIndex = nearestEffortIndex(rawFrame, efforts);
    const target = efforts[targetIndex];
    if (target === void 0) return;
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
      reasoningEffort: target.id
    });
    setPending(false);
    if (!accepted) {
      setFailed(true);
      setFrame(committedFrame);
      presenter.setFrame(committedFrame);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "liang-effort-control",
      "data-plugin": PACKAGE_ID,
      "data-state": failed ? "error" : pending ? "pending" : "ready",
      title: previewEffort?.name,
      children: [
        interacting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "output",
          {
            className: "liang-effort-control__tooltip",
            style: { "--liang-tooltip-position": progress },
            children: indicatorLabel(frame, efforts)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "liang-effort-control__ticks", "aria-hidden": "true", children: efforts.map((effort, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "i",
          {
            className: "liang-effort-control__tick",
            style: { left: `${frameForEffort(index, efforts.length) / PREVIEW_MAX_FRAME * 100}%` }
          },
          effort.id
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: "liang-effort-control__range",
            type: "range",
            min: 0,
            max: PREVIEW_MAX_FRAME,
            step: 1,
            value: frame,
            disabled: pending || state.status === "selecting",
            "aria-label": "\u601D\u8003\u7B49\u7EA7",
            "aria-valuetext": previewEffort?.name ?? "",
            style: { "--liang-slider-progress": progress },
            onPointerDown: () => {
              dragging.current = true;
              setInteracting(true);
            },
            onInput: (event) => {
              dragging.current = true;
              const next = Number(event.currentTarget.value);
              setFrame(next);
              presenter.setFrame(next);
            },
            onPointerUp: (event) => {
              setInteracting(false);
              void commit(Number(event.currentTarget.value));
            },
            onPointerCancel: () => {
              setInteracting(false);
              dragging.current = false;
              setFrame(committedFrame);
              presenter.setFrame(committedFrame);
            },
            onKeyUp: (event) => {
              setInteracting(false);
              if (event.key !== "Escape") void commit(Number(event.currentTarget.value));
            },
            onBlur: (event) => {
              setInteracting(false);
              if (dragging.current) void commit(Number(event.currentTarget.value));
            },
            onKeyDown: (event) => {
              setInteracting(true);
              if (event.key === "Escape" && !pending) {
                setInteracting(false);
                dragging.current = false;
                setFrame(committedFrame);
                presenter.setFrame(committedFrame);
              }
            }
          }
        )
      ]
    }
  );
}
function AppearanceSkinRow({ scope, presenter, t }) {
  const snapshot = (0, import_react.useSyncExternalStore)(
    (listener) => scope.subscribe(listener),
    () => scope.getSnapshot()
  );
  const enabled = snapshot.enabled;
  const [pending, setPending] = (0, import_react.useState)(false);
  const choose = async (next) => {
    if (next === enabled || pending) return;
    setPending(true);
    try {
      await presenter.choose(next);
    } finally {
      setPending(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "liang-settings-row", "data-plugin": PACKAGE_ID, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "liang-settings-row__title", children: t("appearance.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "liang-settings-row__choices", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          className: "liang-settings-row__choice",
          type: "button",
          "aria-pressed": !enabled,
          disabled: pending,
          onClick: () => void choose(false),
          children: t("appearance.native")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          className: "liang-settings-row__choice",
          type: "button",
          "aria-pressed": enabled,
          disabled: pending,
          onClick: () => void choose(true),
          children: t("appearance.liang")
        }
      )
    ] })
  ] });
}
var inject = [
  "slots",
  "sessions",
  "modelDirectories",
  "locale"
];
function createPreferenceStore() {
  let snapshot = {
    enabled: localStorage.getItem(PREFERENCE_KEY) !== "0"
  };
  const listeners = /* @__PURE__ */ new Set();
  const onStorage = (event) => {
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
    }
  };
}
function apply(ctx) {
  const style = document.createElement("style");
  style.dataset.plugin = PACKAGE_ID;
  style.textContent = skin_default;
  document.head.append(style);
  ctx.effect(() => () => style.remove(), "liang-intensity-skin: scoped styles");
  const scope = createPreferenceStore();
  ctx.effect(() => () => scope.dispose(), "liang-intensity-skin: appearance preference");
  const presenter = new SkinPresenter(scope);
  ctx.effect(() => () => presenter.dispose(), "liang-intensity-skin: backdrop presenter");
  ctx.effect(() => ctx.locale.register(LOCALE_NAMESPACE, {
    zh: {
      "appearance.title": "\u5916\u89C2\u76AE\u80A4",
      "appearance.native": "\u539F\u751F",
      "appearance.liang": "\u6ED1\u52A8\u53D8\u7956"
    },
    en: {
      "appearance.title": "Visual skin",
      "appearance.native": "Native",
      "appearance.liang": "Slider"
    }
  }), "liang-intensity-skin: settings locale");
  ctx.slots.inject("settings.general.item", () => ctx.slots.register({
    name: "settings.general.item",
    id: "liang-intensity-appearance",
    order: 11,
    locale: LOCALE_NAMESPACE,
    inject: () => ({ scope, presenter })
  }, AppearanceSkinRow));
  ctx.slots.inject("conversation.input.right", () => ctx.slots.register({
    name: "conversation.input.right",
    id: "liang-intensity-control",
    order: 10,
    inject: (sessionId) => {
      const available = ctx.sessions.subagentAddress(sessionId) === void 0;
      const directory = ctx.modelDirectories.directoryFor(sessionId);
      return {
        directory: directory.store,
        presenter,
        scope,
        load: () => {
          if (available) void directory.load().catch(() => void 0);
        },
        select: (selection) => available ? directory.select(selection).then(() => true, () => false) : Promise.resolve(false)
      };
    }
  }, LiangEffortSlider));
}
return module.exports;}});
//# sourceMappingURL=client.js.map
