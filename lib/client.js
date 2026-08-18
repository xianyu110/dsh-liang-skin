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
var skin_default = `.liang-skin-backdrop {\r
  position: fixed;\r
  z-index: 0;\r
  inset: 0;\r
  overflow: hidden;\r
  pointer-events: none;\r
  background: var(--liang-page, transparent);\r
  opacity: 0;\r
  transition: opacity 220ms ease, background-color 180ms linear;\r
}\r
\r
body[data-liang-skin="on"] .liang-skin-backdrop {\r
  opacity: 1;\r
}\r
\r
.liang-skin-backdrop video,\r
.liang-skin-backdrop img {\r
  position: absolute;\r
  top: 50%;\r
  right: 0;\r
  display: block;\r
  width: min(42vw, 720px);\r
  height: 100vh;\r
  object-fit: cover;\r
  object-position: 50% 42%;\r
  opacity: var(--liang-portrait-opacity, 0.45);\r
  transform: translateY(-50%);\r
  filter: none;\r
  mask-image: linear-gradient(90deg, transparent 0%, rgb(0 0 0 / 20%) 10%, black 30%, black 100%);\r
  transition: filter 180ms linear;\r
}\r
\r
.liang-skin-backdrop img {\r
  display: none;\r
}\r
\r
.liang-skin-backdrop[data-media="sequence"] video,\r
.liang-skin-backdrop[data-media="sequence"] .liang-skin-poster {\r
  display: none;\r
}\r
\r
.liang-skin-backdrop[data-media="sequence"] .liang-skin-sequence-frame {\r
  display: block;\r
  /* Crossfade layers: inactive sits transparent and slightly enlarged, the\r
     active one eases back to a calm 1:1. Dragging swaps fast so the preview\r
     stays glued to the pointer; settling swaps slow for a gentle landing. */\r
  opacity: 0;\r
  transform: translateY(-50%) scale(1.018);\r
  transition:\r
    opacity 120ms ease-out,\r
    transform 240ms cubic-bezier(0.22, 1, 0.36, 1);\r
  will-change: opacity, transform;\r
}\r
\r
.liang-skin-backdrop[data-media="sequence"] .liang-skin-sequence-frame.is-active {\r
  opacity: var(--liang-portrait-opacity, 0.82);\r
  transform: translateY(-50%) scale(1);\r
}\r
\r
.liang-skin-backdrop[data-crossfade="slow"] .liang-skin-sequence-frame {\r
  transition-duration: 340ms, 520ms;\r
}\r
\r
.liang-skin-backdrop[data-media="video"] .liang-skin-sequence-frame,\r
.liang-skin-backdrop[data-media="video"] .liang-skin-poster {\r
  display: none;\r
}\r
\r
.liang-skin-backdrop[data-media="poster"] video,\r
.liang-skin-backdrop[data-media="poster"] .liang-skin-sequence-frame {\r
  display: none;\r
}\r
\r
.liang-skin-backdrop[data-media="poster"] .liang-skin-poster {\r
  display: block;\r
}\r
\r
.liang-skin-backdrop[data-media="color"] video,\r
.liang-skin-backdrop[data-media="color"] img {\r
  display: none;\r
}\r
\r
.liang-skin-backdrop::after {\r
  position: absolute;\r
  inset: 0;\r
  content: "";\r
  background: linear-gradient(90deg, var(--liang-page, transparent) 0 28%, transparent 57% 100%);\r
}\r
\r
body[data-liang-skin="on"] {\r
  --dsw-alias-bg-base: var(--liang-bg-base) !important;\r
  --dsw-alias-bg-layer-1: var(--liang-layer-1) !important;\r
  --dsw-alias-bg-layer-2: var(--liang-layer-2) !important;\r
  --dsw-alias-bg-layer-3: var(--liang-layer-3) !important;\r
  --dsw-specific-sidebar-fill: var(--liang-sidebar) !important;\r
  --dsw-alias-label-primary: var(--liang-ink) !important;\r
  --dsw-alias-label-primary-dimmed: var(--liang-ink) !important;\r
  --dsw-alias-label-secondary: var(--liang-secondary) !important;\r
  --dsw-alias-label-tertiary: var(--liang-tertiary) !important;\r
  --dsw-alias-label-caption: var(--liang-tertiary) !important;\r
  --dsw-alias-border-l1: var(--liang-border) !important;\r
  --dsw-alias-border-l2-darkmode-thin: var(--liang-border) !important;\r
  --dsw-alias-border-l2: var(--liang-border) !important;\r
  --dsw-alias-border-l3: var(--liang-border) !important;\r
  --dsw-alias-button-primary-fill: var(--liang-accent) !important;\r
  --dsw-alias-button-primary-hover: var(--liang-accent-hover) !important;\r
  --dsw-alias-button-info-fill: var(--liang-accent) !important;\r
  --dsw-alias-button-info-hover: var(--liang-accent-hover) !important;\r
  --dsw-alias-state-business-primary: var(--liang-accent) !important;\r
  --dsw-alias-interactive-bg-hover: var(--liang-hover) !important;\r
  --dsw-alias-interactive-bg-active: var(--liang-hover) !important;\r
  --dsw-alias-button-elevated-fill: var(--liang-layer-1) !important;\r
  --dsw-alias-button-floating-fill: var(--liang-layer-2) !important;\r
  --dsw-alias-button-floating-hover: var(--liang-layer-3) !important;\r
  --dsw-alias-interactive-bg-hover-solid: var(--liang-layer-2) !important;\r
  --dsw-specific-bubble: var(--liang-layer-2) !important;\r
  --dsw-specific-input-major: var(--liang-layer-1) !important;\r
  --dsw-specific-menu: var(--liang-layer-3) !important;\r
  --dsw-specific-selector: var(--liang-layer-2) !important;\r
  --dsw-alias-markdown-citation: var(--liang-layer-2) !important;\r
  --dsw-alias-markdown-code-block-banner: var(--liang-layer-1) !important;\r
  --dsw-alias-markdown-code-block: var(--liang-layer-1) !important;\r
  --dsw-alias-markdown-code-segment-selected: var(--liang-layer-2) !important;\r
  --dsw-alias-markdown-code-segment-unselected: var(--liang-layer-1) !important;\r
  --dsw-alias-markdown-inline-code: var(--liang-layer-2) !important;\r
  --dsw-alias-markdown-placeholder: var(--liang-layer-1) !important;\r
  --dsw-alias-markdown-tag: var(--liang-layer-2) !important;\r
  background: var(--liang-page) !important;\r
}\r
\r
body[data-liang-skin="on"]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) {\r
  --dsw-alias-brand-primary-new-colorprimary-new-color: rgb(65 118 230) !important;\r
  --dsw-alias-brand-primary: rgb(15 17 21) !important;\r
  --dsw-alias-brand-text: rgb(15 17 21) !important;\r
  --dsw-alias-button-primary-fill: rgb(15 17 21) !important;\r
  --dsw-alias-button-primary-hover: rgb(53 54 56) !important;\r
  --dsw-alias-button-info-fill: rgb(65 118 230) !important;\r
  --dsw-alias-button-info-hover: rgb(103 158 254) !important;\r
  --dsw-alias-state-business-primary: rgb(65 118 230) !important;\r
  --dsw-alias-label-primary-inverted: rgb(249 250 251) !important;\r
  --dsw-alias-button-elevated-fill: rgb(255 255 255) !important;\r
  --dsw-alias-button-floating-fill: rgb(255 255 255) !important;\r
  --dsw-alias-button-floating-hover: rgb(241 243 245) !important;\r
  --dsw-alias-interactive-bg-hover-solid: rgb(241 243 245) !important;\r
  --dsw-specific-bubble: rgb(237 243 254) !important;\r
  --dsw-specific-input-major: rgb(255 255 255) !important;\r
  --dsw-specific-menu: rgb(255 255 255) !important;\r
  --dsw-specific-selector: rgb(245 246 247) !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] {\r
  --dsw-alias-brand-primary-new-colorprimary-new-color: #c19a49 !important;\r
  --dsw-alias-brand-primary: #c19a49 !important;\r
  --dsw-alias-brand-text: #d5b56e !important;\r
  --dsw-alias-button-info-fill: #c19a49 !important;\r
  --dsw-alias-button-info-hover: #d5b56e !important;\r
  --dsw-alias-state-business-primary: #c19a49 !important;\r
  --dsw-alias-bg-module-platform: var(--liang-layer-3) !important;\r
  --dsw-specific-sidebar-nav-item-active: var(--liang-layer-3) !important;\r
  --dsw-specific-sidebar-nav-item-hover: var(--liang-hover) !important;\r
}\r
\r
/* The low-intensity skin is light by default, but it must not turn a dark\r
   Harness document into a light surface. Keep the skin's portrait progression\r
   while switching the shared UI layers back to a readable charcoal palette. */\r
body[data-liang-skin="on"][data-ds-dark-theme]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) {\r
  --liang-page: rgb(17 17 17) !important;\r
  --liang-bg-base: rgb(17 17 17 / 42%) !important;\r
  --liang-layer-1: rgb(30 27 25 / 94%) !important;\r
  --liang-layer-2: rgb(41 35 30 / 96%) !important;\r
  --liang-layer-3: rgb(41 35 30 / 99%) !important;\r
  --liang-sidebar: rgb(23 20 18 / 96%) !important;\r
  --liang-ink: rgb(244 241 232) !important;\r
  --liang-secondary: rgb(184 180 169) !important;\r
  --liang-tertiary: rgb(137 134 126) !important;\r
  --liang-border: rgb(244 241 232 / 15%) !important;\r
  --liang-hover: rgb(244 241 232 / 9%) !important;\r
  --dsw-alias-brand-primary: var(--liang-accent) !important;\r
  --dsw-alias-brand-text: var(--liang-accent) !important;\r
  --dsw-alias-button-primary-fill: var(--liang-accent) !important;\r
  --dsw-alias-button-primary-hover: var(--liang-accent-hover) !important;\r
  --dsw-alias-button-info-fill: var(--liang-accent) !important;\r
  --dsw-alias-button-info-hover: var(--liang-accent-hover) !important;\r
  --dsw-alias-state-business-primary: var(--liang-accent) !important;\r
  --dsw-alias-button-elevated-fill: var(--liang-layer-1) !important;\r
  --dsw-alias-button-floating-fill: var(--liang-layer-2) !important;\r
  --dsw-alias-button-floating-hover: var(--liang-layer-3) !important;\r
  --dsw-alias-interactive-bg-hover-solid: var(--liang-layer-2) !important;\r
  --dsw-specific-bubble: var(--liang-layer-2) !important;\r
  --dsw-specific-input-major: var(--liang-layer-1) !important;\r
  --dsw-specific-menu: var(--liang-layer-3) !important;\r
  --dsw-specific-selector: var(--liang-layer-2) !important;\r
  background: var(--liang-page) !important;\r
}\r
\r
body[data-liang-skin="on"][data-ds-dark-theme]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) .liang-skin-backdrop {\r
  background: var(--liang-page) !important;\r
}\r
\r
body[data-liang-skin="on"][data-ds-dark-theme]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) .liang-skin-backdrop::after {\r
  background: linear-gradient(90deg, var(--liang-page) 0 28%, transparent 57% 100%);\r
}\r
\r
/* The host renders the running-turn label as a clipped blue text gradient.\r
   Retarget only that gradient's color tokens in the custom dark skin; keep\r
   the host's text clipping and shimmer behavior, and leave light mode alone. */\r
body[data-liang-skin="on"][data-liang-stage="5"] [class*="_turnStatus"] {\r
  --dsw-static-deepseek-500: #c19a49 !important;\r
  --dsw-static-deepseek-200: #d5b56e !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] [class*="_turnStatusClock"] {\r
  color: #c19a49 !important;\r
  -webkit-text-fill-color: #c19a49 !important;\r
}\r
\r
/* Preserve the wordmark badge contrast in the low-intensity shell. */\r
body[data-liang-skin="on"]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"] svg[viewBox="0 0 182 24"] > rect[width="52"] {\r
  fill: rgb(15 17 21) !important;\r
}\r
\r
body[data-liang-skin="on"]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"] svg[viewBox="0 0 182 24"] > g[clip-path*="badge"] path {\r
  fill: rgb(249 250 251) !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"] svg[viewBox="0 0 182 24"] > rect[width="52"] {\r
  fill: #c19a49 !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"] svg[viewBox="0 0 182 24"] > g[clip-path*="badge"] path {\r
  fill: #171816 !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] [aria-label^="\u9009\u62E9\u6A21\u578B"] > span:nth-of-type(2) {\r
  color: #d5b56e !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] [class*="heroGlow"] ellipse {\r
  fill: #c19a49 !important;\r
  fill-opacity: 0.16 !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] span[class*="_previewBadge"] {\r
  color: #171816 !important;\r
  background: #c19a49 !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] button[aria-label="\u53D1\u9001\u6D88\u606F"] {\r
  color: #171816 !important;\r
}\r
\r
body[data-liang-skin="on"][data-liang-stage="5"] button[aria-label="\u53D1\u9001\u6D88\u606F"]:disabled {\r
  opacity: 0.62;\r
}\r
\r
body[data-liang-skin="on"]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) button[aria-label="\u53D1\u9001\u6D88\u606F"] {\r
  color: #fff !important;\r
}\r
\r
body[data-liang-skin="on"]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) button[aria-label="\u53D1\u9001\u6D88\u606F"]:disabled {\r
  color: rgb(255 255 255 / 92%) !important;\r
  background: rgb(65 118 230 / 42%) !important;\r
  opacity: 1;\r
}\r
\r
body[data-liang-skin="on"] > #root {\r
  position: relative;\r
  z-index: 1;\r
  background: transparent !important;\r
}\r
\r
body[data-liang-skin="on"] button,\r
body[data-liang-skin="on"] input,\r
body[data-liang-skin="on"] textarea {\r
  transition: color 160ms linear, background-color 160ms linear, border-color 160ms linear;\r
}\r
\r
/* The composer card has a native theme-mode fill, so keep its surface and\r
   readable ink aligned with the active Liang palette. */\r
body[data-liang-skin="on"]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) [data-composer-card="true"] {\r
  border-color: var(--liang-border) !important;\r
  color: var(--liang-ink) !important;\r
  background: var(--liang-layer-1) !important;\r
  box-shadow: 0 8px 28px rgb(20 22 20 / 8%);\r
}\r
\r
body[data-liang-skin="on"]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) [data-composer-card="true"] :is(textarea, button, [data-input-mirror="true"]) {\r
  color: var(--liang-ink) !important;\r
  caret-color: var(--liang-accent) !important;\r
}\r
\r
body[data-liang-skin="on"]:is(\r
  [data-liang-stage="0"],\r
  [data-liang-stage="1"],\r
  [data-liang-stage="2"],\r
  [data-liang-stage="3"]\r
) [data-composer-card="true"] textarea::placeholder {\r
  color: var(--liang-tertiary) !important;\r
  opacity: 1;\r
}\r
\r
.liang-effort-control {\r
  --liang-control-accent: var(--dsw-alias-brand-primary-new-colorprimary-new-color, #4176e6);\r
  --liang-control-rail: var(--dsw-alias-border-l3, rgb(0 0 0 / 16%));\r
  position: relative;\r
  display: flex;\r
  /* Fixed footprint: the native model seat to the right changes its label\r
     width when the reasoning effort changes, which reflows the trailing flex\r
     row. Pin this control's own size so it never contributes to that shift\r
     (absolute position is additionally locked during interaction in JS). */\r
  flex: 0 0 124px;\r
  width: 124px;\r
  min-width: 124px;\r
  max-width: 124px;\r
  height: 28px;\r
  align-items: center;\r
  margin: 0 3px;\r
  overflow: visible;\r
}\r
\r
body[data-liang-skin="on"] .liang-effort-control {\r
  --liang-control-accent: var(--liang-secondary);\r
  --liang-control-rail: color-mix(in srgb, var(--liang-secondary) 28%, transparent);\r
}\r
\r
/* The native model seat (composer input.model) widens with the effort label\r
   text; give it a stable footprint under the Liang skin so switching effort\r
   never reflows the slider out of position. The label ellipsizes instead.\r
   Button-scoped on purpose: the inner label/effort spans also contain this\r
   class substring and must never be sized (sizing them pushed the effort text\r
   out of the button, splitting the model+effort pair apart). */\r
body[data-liang-skin="on"] button[class*="_7KE1Ra_trigger"] {\r
  box-sizing: border-box;\r
  width: 180px;\r
  min-width: 180px;\r
  max-width: 180px;\r
}\r
\r
.liang-effort-control__ticks {\r
  position: absolute;\r
  z-index: 0;\r
  inset: 0 10px;\r
  pointer-events: none;\r
}\r
\r
.liang-effort-control__ticks::before {\r
  position: absolute;\r
  top: 50%;\r
  right: 0;\r
  left: 0;\r
  height: 1px;\r
  content: "";\r
  background: var(--liang-control-rail);\r
  transform: translateY(-50%);\r
}\r
\r
.liang-effort-control__tooltip {\r
  position: absolute;\r
  z-index: 4;\r
  bottom: calc(100% + 7px);\r
  left: calc(10px + (100% - 20px) * var(--liang-slider-ratio));\r
  min-width: max-content;\r
  padding: 5px 8px;\r
  border: 1px solid var(--liang-border, rgb(0 0 0 / 12%));\r
  border-radius: 7px;\r
  color: var(--liang-ink, #171816);\r
  background: var(--liang-layer-1, #fff);\r
  box-shadow: 0 5px 16px rgb(0 0 0 / 16%);\r
  font-size: 11px;\r
  font-weight: 600;\r
  line-height: 16px;\r
  letter-spacing: 0.01em;\r
  pointer-events: none;\r
  transform: translateX(-50%);\r
  white-space: nowrap;\r
}\r
\r
.liang-effort-control__tooltip::after {\r
  position: absolute;\r
  top: 100%;\r
  left: 50%;\r
  width: 7px;\r
  height: 7px;\r
  content: "";\r
  background: inherit;\r
  transform: translate(-50%, -4px) rotate(45deg);\r
}\r
\r
.liang-effort-control__tick {\r
  position: absolute;\r
  top: 50%;\r
  width: 1px;\r
  height: 7px;\r
  background: var(--liang-control-accent);\r
  opacity: 0.42;\r
  transform: translate(-50%, -50%);\r
}\r
\r
.liang-effort-control__range {\r
  position: relative;\r
  z-index: 1;\r
  width: calc(100% - 7px);\r
  height: 28px;\r
  margin: 0 3.5px;\r
  /* Branded pointer (centered hotspot baked into the .cur); fall back to the\r
     native resize cursor if the asset fails to load. */\r
  cursor: url("/plugins/dsh-client-liang-intensity-skin/assets/liang-cursor.cur") 16 16, ew-resize;\r
  appearance: none;\r
  background: transparent;\r
  touch-action: pan-y;\r
}\r
\r
.liang-effort-control__range:disabled {\r
  cursor: progress;\r
  opacity: 0.58;\r
}\r
\r
.liang-effort-control__range::-webkit-slider-runnable-track {\r
  height: 1px;\r
  border-radius: 1px;\r
  background: transparent;\r
}\r
\r
.liang-effort-control__range::-webkit-slider-thumb {\r
  width: 13px;\r
  height: 13px;\r
  margin-top: -6px;\r
  border: 1.5px solid color-mix(in srgb, var(--liang-control-accent) 72%, transparent);\r
  border-radius: 50%;\r
  appearance: none;\r
  background: radial-gradient(circle, var(--liang-control-accent) 0 2px, color-mix(in srgb, var(--liang-control-accent) 22%, var(--dsw-alias-bg-layer-1, #fff)) 2.5px);\r
  box-shadow: 0 1px 4px rgb(0 0 0 / 14%);\r
}\r
\r
body[data-liang-skin="on"] .liang-effort-control__range::-webkit-slider-thumb {\r
  width: 13px;\r
  height: 13px;\r
  margin-top: -6px;\r
  border-color: color-mix(in srgb, var(--liang-control-accent) 72%, transparent);\r
  background: radial-gradient(circle, var(--liang-control-accent) 0 2px, color-mix(in srgb, var(--liang-control-accent) 22%, var(--liang-layer-1)) 2.5px);\r
}\r
\r
.liang-effort-control__range::-moz-range-track {\r
  height: 1px;\r
  background: transparent;\r
}\r
\r
.liang-effort-control__range::-moz-range-progress {\r
  height: 1px;\r
  background: transparent;\r
}\r
\r
.liang-effort-control__range::-moz-range-thumb {\r
  width: 11px;\r
  height: 11px;\r
  border: 1.5px solid color-mix(in srgb, var(--liang-control-accent) 72%, transparent);\r
  border-radius: 50%;\r
  background: color-mix(in srgb, var(--liang-control-accent) 24%, var(--dsw-alias-bg-layer-1, #fff));\r
}\r
\r
.liang-effort-control__range:focus-visible {\r
  outline: none;\r
}\r
\r
.liang-effort-control[data-state="error"] {\r
  --liang-control-accent: var(--dsw-alias-state-error-primary, #e43c3c);\r
}\r
\r
.liang-appearance-choice {\r
  box-sizing: border-box;\r
  border: 1px solid var(--dsw-alias-border-l2);\r
  flex: 180px;\r
  flex-direction: column;\r
  justify-content: center;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 20px 32px;\r
  border-radius: 16px;\r
  font: inherit;\r
  color: var(--dsw-alias-label-primary);\r
  cursor: pointer;\r
  background: transparent;\r
  font-size: 14px;\r
  line-height: 22px;\r
  display: flex;\r
}\r
\r
[class*="_8HJdBW_cubeRow"]:has(.liang-appearance-choice) {\r
  display: grid;\r
  grid-template-columns: repeat(4, minmax(0, 1fr));\r
}\r
\r
.liang-appearance-choice:hover:not([aria-pressed="true"]) {\r
  background: var(--dsw-alias-interactive-bg-hover);\r
}\r
\r
.liang-appearance-choice[aria-pressed="true"] {\r
  border-color: var(--dsw-static-neutral-bluish-400);\r
  background: var(--dsw-alias-bg-module-platform);\r
}\r
\r
.liang-appearance-choice__icon {\r
  display: block;\r
  flex: 0 0 16px;\r
  width: 16px;\r
  height: 16px;\r
  color: currentColor;\r
  font-size: 16px;\r
  line-height: 16px;\r
}\r
\r
.liang-appearance-choice__label {\r
  display: block;\r
}\r
\r
/* Keep the host's three theme cubes untouched. These rules only style the\r
   fourth button that is appended to the host cube row. */\r
.liang-appearance-choice:disabled {\r
  cursor: progress;\r
  opacity: 0.7;\r
}\r
\r
.liang-appearance-binding {\r
  box-sizing: border-box;\r
  display: flex;\r
  width: 100%;\r
  min-height: 28px;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 16px;\r
  padding: 4px 0 0;\r
  color: var(--dsw-alias-label-primary);\r
  font: inherit;\r
  font-size: 14px;\r
  line-height: 22px;\r
  cursor: pointer;\r
}\r
\r
.liang-appearance-binding__label {\r
  display: block;\r
  min-width: 0;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.liang-appearance-binding__copy {\r
  display: flex;\r
  min-width: 0;\r
  flex-direction: column;\r
  gap: 1px;\r
}\r
\r
.liang-appearance-binding__description {\r
  display: block;\r
  overflow: hidden;\r
  color: var(--dsw-alias-label-secondary);\r
  font-size: 12px;\r
  line-height: 18px;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.liang-appearance-binding__input {\r
  position: relative;\r
  flex: 0 0 36px;\r
  width: 36px;\r
  height: 20px;\r
  margin: 0;\r
  border: 1px solid var(--dsw-alias-border-l2);\r
  border-radius: 999px;\r
  outline: none;\r
  cursor: pointer;\r
  appearance: none;\r
  background: var(--dsw-alias-interactive-bg-hover, var(--dsw-alias-bg-module-platform));\r
}\r
\r
.liang-appearance-binding__input::before {\r
  position: absolute;\r
  top: 2px;\r
  left: 2px;\r
  width: 14px;\r
  height: 14px;\r
  border-radius: 50%;\r
  content: "";\r
  background: var(--dsw-alias-label-primary);\r
  box-shadow: 0 1px 3px rgb(0 0 0 / 18%);\r
  transition: transform 160ms ease, background-color 160ms ease;\r
}\r
\r
.liang-appearance-binding__input:checked {\r
  border-color: var(--dsw-static-neutral-bluish-400);\r
  background: var(--dsw-static-neutral-bluish-400);\r
}\r
\r
.liang-appearance-binding__input:checked::before {\r
  background: var(--dsw-alias-bg-layer-1, #fff);\r
  transform: translateX(16px);\r
}\r
\r
.liang-appearance-binding__input:focus-visible {\r
  box-shadow: 0 0 0 2px var(--dsw-alias-interactive-bg-hover);\r
}\r
\r
.liang-appearance-binding__input:disabled {\r
  cursor: progress;\r
  opacity: 0.7;\r
}\r
\r
@media (max-width: 760px) {\r
  .liang-effort-control {\r
    flex-basis: 92px;\r
    width: 92px;\r
    min-width: 92px;\r
    max-width: 92px;\r
  }\r
\r
  .liang-skin-backdrop video,\r
  .liang-skin-backdrop img {\r
    right: -18vw;\r
    width: 92vw;\r
    opacity: calc(var(--liang-portrait-opacity, 0.45) * 0.72);\r
  }\r
\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .liang-skin-backdrop,\r
  .liang-skin-backdrop video,\r
  .liang-skin-backdrop img,\r
  .liang-skin-backdrop .liang-skin-sequence-frame,\r
  body[data-liang-skin="on"] button,\r
  body[data-liang-skin="on"] input,\r
  body[data-liang-skin="on"] textarea {\r
    transition: none;\r
  }\r
}\r
`;

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
var BIND_EFFORT_KEY = "dsh-liang-intensity-skin.bind-effort";
var PORTRAIT_ANCHORS = [
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
  { level: 30, file: "stage-30.png" }
];
var ANCHOR_LEVELS = PORTRAIT_ANCHORS.map((anchor) => anchor.level);
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
  theme;
  root;
  video;
  poster;
  frames;
  preloads;
  enabled = true;
  // Default to the max frame so the first paint after load is the dark shell;
  // starting at 0 flashed the light palette before the directory resolved.
  frame = PREVIEW_MAX_FRAME;
  pendingFrame = PREVIEW_MAX_FRAME;
  pendingMode = "settle";
  activeFrame = 0;
  pendingSource = null;
  raf = 0;
  disposed = false;
  unsubscribe;
  constructor(scope, theme) {
    this.scope = scope;
    this.theme = theme;
    this.root = document.createElement("div");
    this.root.className = "liang-skin-backdrop";
    this.root.dataset.plugin = PACKAGE_ID;
    this.root.dataset.media = "sequence";
    this.root.dataset.crossfade = "slow";
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
    this.frames = [];
    for (let index = 0; index < 2; index += 1) {
      const image = document.createElement("img");
      image.className = "liang-skin-sequence-frame";
      image.alt = "";
      image.draggable = false;
      image.decoding = "async";
      image.addEventListener("error", this.handleSequenceError);
      image.addEventListener("load", () => this.handleFrameLoaded(image));
      this.frames.push(image);
    }
    this.preloads = PORTRAIT_ANCHORS.map(({ file }) => {
      const image = new Image();
      image.decoding = "async";
      image.src = `${ASSET_PREFIX}/portrait-source-v2/${file}`;
      return image;
    });
    this.root.append(this.video, this.frames[0], this.frames[1], this.poster);
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
  getFrame() {
    return this.frame;
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
  setFrame(frame, mode = "drag") {
    this.pendingFrame = Math.min(PREVIEW_MAX_FRAME, Math.max(0, Math.round(frame)));
    this.frame = this.pendingFrame;
    this.pendingMode = mode;
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
    this.root.dataset.crossfade = this.pendingMode === "settle" ? "slow" : "fast";
    this.updatePortrait(palette.level);
    if (this.root.dataset.media === "video") this.seek(this.frame);
  }
  syncNativeTheme(theme = paletteForFrame(this.frame).stage === 5 ? "dark" : "light") {
    if (!this.enabled || this.theme.getTheme().preference === theme) return;
    this.theme.setTheme(theme);
  }
  updatePortrait(level) {
    if (this.root.dataset.media !== "sequence") return;
    const { lowerIndex, upperIndex, mix: mix2 } = portraitBlendForLevel(
      level,
      ANCHOR_LEVELS
    );
    const lower = PORTRAIT_ANCHORS[lowerIndex];
    const upper = PORTRAIT_ANCHORS[upperIndex];
    const selected = mix2 >= 0.5 ? upper : lower;
    const source = `${ASSET_PREFIX}/portrait-source-v2/${selected.file}`;
    const active = this.frames[this.activeFrame];
    if (active.getAttribute("src") === source) {
      this.pendingSource = null;
      return;
    }
    if (this.pendingSource === source) return;
    const standbyIndex = 1 - this.activeFrame;
    const standby = this.frames[standbyIndex];
    this.pendingSource = source;
    if (standby.getAttribute("src") !== source) standby.src = source;
    if (standby.complete && standby.naturalWidth > 0) {
      this.activate(standbyIndex);
    }
  }
  handleFrameLoaded = (image) => {
    if (this.pendingSource === null || image.getAttribute("src") !== this.pendingSource) return;
    this.activate(this.frames.indexOf(image));
  };
  activate(index) {
    if (index < 0 || index === this.activeFrame) return;
    this.frames[this.activeFrame].classList.remove("is-active");
    this.activeFrame = index;
    this.frames[index].classList.add("is-active");
    this.pendingSource = null;
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
    for (const image of this.frames) {
      image.removeEventListener("error", this.handleSequenceError);
      image.src = "";
    }
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
  const committedFrame = committedIndex < 0 ? PREVIEW_MAX_FRAME : frameForEffort(committedIndex, efforts.length);
  const bindEffort = skin.bindEffort;
  const [frame, setFrame] = (0, import_react.useState)(() => bindEffort ? committedFrame : presenter.getFrame());
  const [pending, setPending] = (0, import_react.useState)(false);
  const [failed, setFailed] = (0, import_react.useState)(false);
  const [interacting, setInteracting] = (0, import_react.useState)(false);
  const dragging = (0, import_react.useRef)(false);
  const dragStartFrame = (0, import_react.useRef)(frame);
  const rootRef = (0, import_react.useRef)(null);
  const interactionArmed = (0, import_react.useRef)(false);
  const dragStartCommittedId = (0, import_react.useRef)(void 0);
  const dragStartCurrent = (0, import_react.useRef)(null);
  const previewSyncedId = (0, import_react.useRef)(void 0);
  const lockRaf = (0, import_react.useRef)(0);
  const lockBaseLeft = (0, import_react.useRef)(null);
  const enabled = skin.enabled;
  (0, import_react.useEffect)(() => {
    if (enabled) load();
  }, [enabled, load]);
  (0, import_react.useEffect)(() => {
    if (!bindEffort || dragging.current || pending) return;
    setFrame(committedFrame);
    presenter.setFrame(committedFrame, "settle");
  }, [bindEffort, committedFrame, pending, presenter]);
  const locked = interacting || pending;
  (0, import_react.useEffect)(() => {
    if (!locked) return;
    const root = rootRef.current;
    if (root === null) return;
    root.style.transition = "";
    root.style.willChange = "transform";
    lockBaseLeft.current = root.getBoundingClientRect().left;
    const step = () => {
      lockRaf.current = requestAnimationFrame(step);
      const base = lockBaseLeft.current;
      if (base === null) return;
      const drift = base - root.getBoundingClientRect().left;
      if (Math.abs(drift) > 0.5) {
        root.style.transform = `translateX(${drift.toFixed(2)}px)`;
      }
    };
    lockRaf.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(lockRaf.current);
      lockRaf.current = 0;
      root.style.transition = "transform 200ms ease-out";
      root.style.transform = "";
      window.setTimeout(() => {
        root.style.transition = "";
        root.style.willChange = "";
      }, 220);
      lockBaseLeft.current = null;
    };
  }, [locked]);
  if (!enabled) return null;
  if (bindEffort && (reasoning === null || efforts.length < 2)) return null;
  const previewIndex = nearestEffortIndex(frame, efforts);
  const previewEffort = efforts[previewIndex];
  const progressRatio = frame / PREVIEW_MAX_FRAME;
  const tooltipLabel = indicatorLabel(frame, bindEffort ? efforts : []);
  const beginInteraction = () => {
    if (interactionArmed.current) return;
    interactionArmed.current = true;
    dragging.current = true;
    dragStartFrame.current = frame;
    const snapshot = directory.getSnapshot();
    dragStartCurrent.current = snapshot.current;
    const snapshotReasoning = modelReasoning(snapshot);
    dragStartCommittedId.current = snapshotReasoning?.selection.reasoningEffort ?? snapshotReasoning?.defaultEffort;
    previewSyncedId.current = void 0;
  };
  const restorePreviewSync = () => {
    const original = dragStartCurrent.current;
    if (original === null || previewSyncedId.current === void 0) return;
    directory.store.update((draft) => {
      draft.current = original;
    });
    previewSyncedId.current = void 0;
  };
  const cancelInteraction = () => {
    setInteracting(false);
    interactionArmed.current = false;
    dragging.current = false;
    setFrame(dragStartFrame.current);
    presenter.setFrame(dragStartFrame.current, "settle");
    restorePreviewSync();
  };
  const commit = async (rawFrame) => {
    interactionArmed.current = false;
    dragging.current = false;
    if (!bindEffort) {
      setFrame(rawFrame);
      presenter.setFrame(rawFrame, "settle");
      return;
    }
    const targetIndex = nearestEffortIndex(rawFrame, efforts);
    const target = efforts[targetIndex];
    if (target === void 0) {
      restorePreviewSync();
      return;
    }
    const targetFrame = frameForEffort(targetIndex, efforts.length);
    setFrame(targetFrame);
    presenter.setFrame(targetFrame, "settle");
    if (target.id === dragStartCommittedId.current) {
      restorePreviewSync();
      return;
    }
    if (pending) return;
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
      restorePreviewSync();
      const rollbackIndex = selectedEffortIndex(
        efforts,
        dragStartCommittedId.current,
        void 0
      );
      const rollbackFrame = rollbackIndex < 0 ? PREVIEW_MAX_FRAME : frameForEffort(rollbackIndex, efforts.length);
      setFrame(rollbackFrame);
      presenter.setFrame(rollbackFrame, "settle");
    } else {
      previewSyncedId.current = void 0;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref: rootRef,
      className: "liang-effort-control",
      "data-plugin": PACKAGE_ID,
      "data-state": failed ? "error" : pending ? "pending" : "ready",
      title: bindEffort ? previewEffort?.name : void 0,
      children: [
        interacting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "output",
          {
            className: "liang-effort-control__tooltip",
            style: { "--liang-slider-ratio": progressRatio },
            children: tooltipLabel
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
            "aria-label": bindEffort ? "\u601D\u8003\u7B49\u7EA7" : "\u76AE\u80A4\u8FDB\u5EA6",
            "aria-valuetext": bindEffort ? previewEffort?.name ?? "" : tooltipLabel,
            onPointerDown: () => {
              beginInteraction();
              setInteracting(true);
            },
            onInput: (event) => {
              dragging.current = true;
              const next = Number(event.currentTarget.value);
              setFrame(next);
              presenter.setFrame(next, "drag");
              if (!bindEffort || reasoning === null) return;
              const index = nearestEffortIndex(next, efforts);
              const effort = efforts[index];
              if (effort === void 0 || effort.id === previewSyncedId.current) return;
              previewSyncedId.current = effort.id;
              directory.store.update((draft) => {
                const current = draft.current;
                if (current === null || current.provider !== reasoning.selection.provider || current.model !== reasoning.selection.model) return;
                current.reasoningEffort = effort.id;
              });
            },
            onPointerUp: (event) => {
              setInteracting(false);
              void commit(Number(event.currentTarget.value));
            },
            onPointerCancel: () => {
              cancelInteraction();
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
              beginInteraction();
              if (event.key === "Escape" && !pending) {
                cancelInteraction();
              }
            }
          }
        )
      ]
    }
  );
}
var NATIVE_APPEARANCE_GROUP = '[class*="_8HJdBW_group"]';
var NATIVE_APPEARANCE_ROW = '[class*="_8HJdBW_cubeRow"]';
var LIANG_APPEARANCE_BUTTON = "liang-appearance-choice";
var LIANG_BINDING_CONTROL = "liang-appearance-binding";
var LIANG_BINDING_INPUT = "liang-appearance-binding__input";
function installLiangAppearanceButton(scope, presenter) {
  let pending = false;
  const hookedNativeButtons = /* @__PURE__ */ new Set();
  const nativeClickHandlers = /* @__PURE__ */ new Map();
  const sync = () => {
    const group = [...document.querySelectorAll(NATIVE_APPEARANCE_GROUP)].find((node) => node.querySelector('[class*="_8HJdBW_themeCube"]'));
    const row = group?.querySelector(NATIVE_APPEARANCE_ROW);
    if (row === void 0 || row === null) return;
    let customButton = row.querySelector(`.${LIANG_APPEARANCE_BUTTON}`);
    if (customButton === null) {
      customButton = document.createElement("button");
      customButton.className = LIANG_APPEARANCE_BUTTON;
      customButton.type = "button";
      customButton.dataset.plugin = PACKAGE_ID;
      customButton.setAttribute("aria-label", "\u6ED1\u52A8\u53D8\u7956");
      const icon = document.createElement("span");
      icon.className = "liang-appearance-choice__icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "\u25C8";
      const label = document.createElement("span");
      label.className = "liang-appearance-choice__label";
      label.textContent = document.documentElement.lang.toLowerCase().startsWith("en") ? "Slider" : "\u6ED1\u52A8\u53D8\u7956";
      customButton.append(icon, label);
      customButton.addEventListener("click", () => {
        if (pending || scope.getSnapshot().enabled) return;
        pending = true;
        sync();
        void presenter.choose(true).finally(() => {
          pending = false;
          sync();
        });
      });
    }
    if (customButton.parentElement !== row) row.append(customButton);
    const snapshot = scope.getSnapshot();
    customButton.disabled = pending;
    customButton.setAttribute("aria-pressed", String(snapshot.enabled));
    let bindingControl = group.querySelector(`.${LIANG_BINDING_CONTROL}`);
    if (!snapshot.enabled) {
      bindingControl?.remove();
      bindingControl = null;
    } else if (bindingControl === null) {
      bindingControl = document.createElement("label");
      bindingControl.className = LIANG_BINDING_CONTROL;
      bindingControl.dataset.plugin = PACKAGE_ID;
      const bindingCopy = document.createElement("span");
      bindingCopy.className = "liang-appearance-binding__copy";
      const bindingLabel = document.createElement("span");
      bindingLabel.className = "liang-appearance-binding__label";
      const bindingText = document.documentElement.lang.toLowerCase().startsWith("en") ? "Bind slider to reasoning level" : "\u6ED1\u52A8\u53D8\u7956\u7ED1\u5B9A\u601D\u8003\u7B49\u7EA7";
      bindingLabel.textContent = bindingText;
      const bindingDescription = document.createElement("span");
      bindingDescription.className = "liang-appearance-binding__description";
      bindingDescription.id = "liang-appearance-binding-description";
      bindingDescription.textContent = document.documentElement.lang.toLowerCase().startsWith("en") ? "When off, the slider does not change the reasoning level." : "\u5173\u95ED\u4E4B\u540E\u6ED1\u5757\u4E0D\u8054\u52A8\u601D\u8003\u7B49\u7EA7";
      bindingCopy.append(bindingLabel, bindingDescription);
      const bindingInput = document.createElement("input");
      bindingInput.className = LIANG_BINDING_INPUT;
      bindingInput.type = "checkbox";
      bindingInput.setAttribute("role", "switch");
      bindingInput.setAttribute("aria-label", bindingText);
      bindingInput.setAttribute("aria-describedby", bindingDescription.id);
      bindingInput.addEventListener("change", () => {
        void scope.setBindEffort(bindingInput.checked).catch(() => sync());
      });
      bindingControl.append(bindingCopy, bindingInput);
      group.append(bindingControl);
    }
    if (bindingControl !== null) {
      const bindingInput = bindingControl.querySelector(`.${LIANG_BINDING_INPUT}`);
      if (bindingInput !== null) {
        bindingInput.checked = snapshot.bindEffort;
        bindingInput.setAttribute("aria-checked", String(snapshot.bindEffort));
        bindingInput.disabled = pending;
      }
    }
    for (const nativeButton of row.querySelectorAll('[class*="_8HJdBW_themeCube"]')) {
      if (hookedNativeButtons.has(nativeButton)) continue;
      hookedNativeButtons.add(nativeButton);
      const handleNativeClick = () => {
        if (pending || !scope.getSnapshot().enabled) return;
        pending = true;
        sync();
        void presenter.choose(false).finally(() => {
          pending = false;
          sync();
        });
      };
      nativeClickHandlers.set(nativeButton, handleNativeClick);
      nativeButton.addEventListener("click", handleNativeClick, { capture: true });
    }
  };
  const observer = new MutationObserver(sync);
  observer.observe(document.body, { childList: true, subtree: true });
  const unsubscribe = scope.subscribe(sync);
  sync();
  return () => {
    observer.disconnect();
    unsubscribe();
    for (const [nativeButton, handleNativeClick] of nativeClickHandlers) {
      nativeButton.removeEventListener("click", handleNativeClick, { capture: true });
    }
    document.querySelectorAll(`.${LIANG_APPEARANCE_BUTTON}`).forEach((button) => button.remove());
    document.querySelectorAll(`.${LIANG_BINDING_CONTROL}`).forEach((control) => control.remove());
  };
}
var inject = [
  "slots",
  "sessions",
  "modelDirectories",
  "locale",
  "theme"
];
function createPreferenceStore() {
  try {
    localStorage.removeItem("dsh-liang-intensity-skin.enabled");
  } catch {
  }
  let snapshot = {
    enabled: true,
    bindEffort: localStorage.getItem(BIND_EFFORT_KEY) !== "0"
  };
  const listeners = /* @__PURE__ */ new Set();
  const onStorage = (event) => {
    if (event.key !== BIND_EFFORT_KEY) return;
    const next = {
      enabled: snapshot.enabled,
      bindEffort: event.newValue !== "0"
    };
    if (next.enabled === snapshot.enabled && next.bindEffort === snapshot.bindEffort) return;
    snapshot = next;
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
      snapshot = { ...snapshot, enabled };
      for (const listener of listeners) listener();
    },
    async setBindEffort(bindEffort) {
      if (bindEffort === snapshot.bindEffort) return;
      localStorage.setItem(BIND_EFFORT_KEY, bindEffort ? "1" : "0");
      snapshot = { ...snapshot, bindEffort };
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
  const theme = ctx.get("theme");
  const presenter = new SkinPresenter(scope, theme);
  ctx.effect(() => () => presenter.dispose(), "liang-intensity-skin: backdrop presenter");
  ctx.effect(
    () => installLiangAppearanceButton(scope, presenter),
    "liang-intensity-skin: native appearance extension"
  );
  ctx.effect(
    () => ctx.locale.register(LOCALE_NAMESPACE, {
      zh: {
        "appearance.title": "\u5916\u89C2",
        "appearance.light": "\u6D45\u8272",
        "appearance.dark": "\u6DF1\u8272",
        "appearance.system": "\u8DDF\u968F\u7CFB\u7EDF",
        "appearance.liang": "\u6ED1\u52A8\u53D8\u7956"
      },
      en: {
        "appearance.title": "Appearance",
        "appearance.light": "Light",
        "appearance.dark": "Dark",
        "appearance.system": "System",
        "appearance.liang": "Slider"
      }
    }),
    "liang-intensity-skin: settings locale"
  );
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
