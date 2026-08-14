# 滑动变祖 · DeepSeek Harness 皮肤

复制给你的 DSH，一键安装：

```text
帮我安装这个仓库的皮肤到我的 DSH，地址：https://github.com/kingOfSoySauce/dsh-liang-skin
```

## 效果展示

<table>
  <tr>
    <td width="50%" align="center">
      <img src="docs/preview.png" alt="滑动变祖皮肤效果截图" width="100%">
      <br>
      <sub>完整皮肤效果</sub>
    </td>
    <td width="50%" align="center">
      <img src="docs/demo.gif" alt="滑动变祖交互演示" width="100%">
      <br>
      <sub>推理等级滑块演示</sub>
    </td>
  </tr>
</table>

把 Harness 的推理等级改为紧凑滑块，并用滑动变祖原项目的 0–30 强度映射同步人物、背景与界面配色。

## 交互规则

- 档位直接读取当前模型的 `reasoning.efforts`，不写死数量或名称。
- 任意 N 个档位均匀落在 0–30：两档为 `0 / 30`，三档为 `0 / 15 / 30`，五档为 `0 / 7.5 / 15 / 22.5 / 30`。
- 拖动期间只做连续视觉预览；指针松开、键盘操作完成或控件失焦时，才吸附到最近档位并通过官方 ModelDirectory 提交该档位原始 ID。
- 不支持推理或只有一个可选档位的模型不显示滑块。
- addressed subagent 不显示也不提交滑块。

## 外观开关

入口位于 `设置 → 通用设置 → 外观皮肤`：

- `滑动变祖`：显示滑块并启用人物、背景和自适应配色。
- `原生`：移除背景层、皮肤变量和滑块，恢复 Harness 原生界面。

选择保存在当前浏览器本地，不会改动模型配置。

## 安装

需要先安装 DeepSeek Harness CLI；当前版本已在 `0.1.0-rc.6` 上验证。可以直接从 Git 安装：

```sh
dsh plugin --profile web add 'github:kingOfSoySauce/dsh-liang-skin#v0.1.1'
dsh --profile web --dump-config
dsh --profile web
```

如果正式 DSH 已经在运行，安装后需要先停止旧进程，再重新启动。

版本号固定为已验证的 release tag，之后推送到 `main` 的改动不会静默改变已安装代码。

也可以克隆后从本地路径安装：

```sh
git clone https://github.com/kingOfSoySauce/dsh-liang-skin.git
cd dsh-liang-skin
dsh plugin --profile web add .
```

`--dump-config` 的输出中应出现 `dsh-client-liang-intensity-skin` 配置层。要卸载插件：

```sh
dsh plugin --profile web remove dsh-client-liang-intensity-skin
```

### 从 GitHub Release tarball 安装

发布者可在仓库根目录生成可分发包：

```sh
npm pack
```

将生成的 `.tgz` 上传为 GitHub Release 附件后，用户下载并安装：

```sh
dsh plugin --profile web add ./dsh-client-liang-intensity-skin-0.1.1.tgz
```

包内已包含构建好的 `lib/client.js`，安装时不需要执行第三方 `prepare` 脚本。

## 本地开发

```sh
npm install
npm test
npm run build
```

修改 client 源码后需要运行 `npm run build`，并一起提交更新后的 `lib/client.js` 和 source map。

## 素材

插件包含运行时所需的图片和视频素材，安装后不需要额外下载。0–30 强度轴当前接入 24 张经过审核的人像锚点，滑动时直接切换最近锚点，不做图片交叉渐变。
