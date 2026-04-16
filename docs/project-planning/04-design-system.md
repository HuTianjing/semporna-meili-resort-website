# 04. 设计系统与前端规范 (Design System & Frontend Conventions)

通过全局级配置及规范约束，快速传导“美丽度假酒店 MEILI RESORT HOTEL”深信的高奢设计概念至所有代码产物中。

## 1. 颜色标定 (Colors)
基于用户和业务提出的核心视觉要素构建在 Tailwind CSS 内，供组件复用：

```css
:root {
  /* 品牌核心主调 */
  --brand-primary: #003865;        /* 酒店主题色，用于强调或深色底蕴面板 */

  /* 黑白互补体系 */
  --site-bg-light: #ffffff;
  --site-bg-dark: #121212;
  --text-main: #2d2d2d;
  --text-muted: #6b6b6b;

  /* 辅助/强调色彩 */
  --accent-gold: #c5a47e;          /* 指向高定感的流光金，适度施加在按钮或是边界线上 */
  --accent-ice-blue: #e8ecef;      /* 高调灰阶蓝色，适合于卡片悬浮背景或分割区块 */
}
```

*在前端实施中，需在 `tailwind.config.ts` 的 `theme.extend.colors` 属性进行变量映射注册。*

## 2. 字体定义 (Typography)
与传统 SaaS 平台有所区别，豪华酒店的设计高度依赖衬线字体的表现张力以体现历史和品味：

1. **英文字体**：以 `Playfair Display` (Serif) 执行标题，以 `Inter` (Sans-Serif) 执行正文。
2. **中文字体**：以 `Noto Serif SC` (思源宋体) 作为主标题的汉化支持面，大号文字（Heading 1-3），以保持中英统一质感。

这两种混合需在 `next/font` API 下完成预加载。

## 3. UI 交互组件规范 (UI Sandbox Requirements)
- **宽容的留白与边距**：组件之间间距采用大呼吸感 (Large Padding & Margin)，遵循 `py-16` / `py-24` 视距层级。
- **动效约束**：全站需有柔滑过渡，不允许出现任何弹跳或粗暴的高对比形变。应借助 `Framer Motion` 编排入场与滚动过渡 (Fade In & Slide Up)。
- **深浅模式响应**: 原生的浅色模式已承载主题主色调 `#003865`；如果未来允许深色模式，主题色可不变更，仅切换画布底色。
- **Booking Bar 呈现形态**：以悬浮形态停靠浏览器的非中心区域（桌面端横跨底部或折叠吸附顶部下沿），强调高可见性。

## 4. 架构规范对齐
- **SEO元数据** (Metadata)：`layout.tsx` 每个功能模块需有基于 next-intl 生成的精准 Title 与 Description。
- **图像管线**：调用 Next.js 提供的 `<Image />` 组件配合高质量占位 (blur placeholder)，所有本地全尺寸照片置入 `public/` 进行构建期压缩处理。
- **状态流**：一切涉及酒店房态展示或多房间报价的逻辑不直接向数据库请求，必须挂接 HMS 获取。
