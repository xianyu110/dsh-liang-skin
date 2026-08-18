# 滑动变祖 · 社区优化版 0.2.0

基于上游 [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) v0.1.5 优化，
已针对 DeepSeek Harness `0.1.0-rc.6` 验证。本包为**本地优化构建**，未推送上游仓库。

## 优化清单

1. **图像过渡更自然（交叉淡化）**
   - 原版：切换推理等级时直接硬换人像 `src`，跳变生硬。
   - 现版：双图层交叉淡化（备用层先加载、加载完成才淡入，不出现白闪），并叠加轻微
     缩放（1.018→1）缓动。拖动中快速过渡（120ms，跟手），松手落定时慢速过渡
     （340ms ease-out）；`prefers-reduced-motion` 用户自动降级为直切。

2. **滑块位置固定，切换等级不再移位**
   - 根源：原生「模型 · 等级」座位宽度随等级文本变化，在右锚定 flex 行里把滑块挤动。
   - 修复：① 原生座位按钮固定 180px 足迹（模型名省略号吸收变化）；② 滑块自身
     `flex: 0 0 124px` 固定尺寸；③ 交互/提交期间 rAF 逐帧检测漂移并用 `translateX`
     补偿，把滑块钉在屏幕上，结束后 200ms 平滑回位。
   - 注意：固定宽度的选择器必须限定为 `button[class*="_7KE1Ra_trigger"]`——宿主的
     `_7KE1Ra_triggerLabel`/`_7KE1Ra_triggerEffort` 子元素类名包含同样子串，宽选择器
     会误伤并把等级文本挤出按钮。

3. **原生推理等级与滑块实时同步（新增）**
   - 拖动预览期间把最近档位乐观回写共享 directory store（`SnapshotStore.update`），
     原生座位实时跟随滑块档位变化；松手才经官方 `ModelDirectory.select` 提交，
     失败 / Esc / 取消时自动回滚到交互前快照。

4. **滑动更丝滑**
   - 移除图片序列模式下每帧对隐藏 `<video>` 的无谓 seek（原版最大卡顿源），
     仅视频回退模式保留 seek；24 张人像锚点全量预加载 + `decoding="async"`；
     交叉淡化走 opacity/transform 合成器动画（`will-change`），不触发重排。

5. **滑块自定义光标**
   - 使用 `.cur` 标准光标（type=cursor、热点 16,16 居中），挂载于滑块交互区，
     加载失败自动回退 `ew-resize`。源素材为 32×32 的 `.ico`，已在打包时一并附带。

6. **修复：模型名与推理等级拆开显示（回归修复）**
   - 问题：固定原生座位宽度时子串选择器误伤子元素，等级文本被挤出按钮、孤立显示。
   - 修复：选择器限定按钮本身，「DeepSeek-V4-Pro · 高」恢复一体显示。

## 与上游 v0.1.5 的差异

| 文件 | 说明 |
| --- | --- |
| `src/client/index.tsx` | 双图层 crossfade 呈现器、seek 条件化、预览乐观同步 + 回滚、位置锁定 |
| `src/client/skin.css` | crossfade 过渡、滑块固定尺寸、按钮级固定宽度、自定义光标 |
| `src/index.js` | 静态路由新增 `liang-cursor.cur` / `liang-cursor.ico` |
| `assets/liang-cursor.cur` / `.ico` | 新增光标资产 |
| `lib/client.js` / `.map` | 重新构建的客户端产物 |

## 安装（tarball）

```sh
dsh plugin --profile web add ./dsh-client-liang-intensity-skin-0.2.0.tgz
```

安装后重启 DSH Web 生效；入口仍为「设置 → 通用设置 → 外观皮肤 → 滑动变祖」，
「滑动变祖绑定思考等级」开关控制滑块是否联动推理等级。

## 卸载 / 回退

```sh
dsh plugin --profile web remove dsh-client-liang-intensity-skin
```

## 构建与测试

```sh
npm install
npm test        # 8/8 通过（vitest，沙箱环境需 --pool=threads）
npm run build   # esbuild 产出 lib/client.js
```
