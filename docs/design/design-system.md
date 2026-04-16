# 04. 品牌设计规范与前端工程落地 (Design System & Frontend Conventions)

基于 Apple HIG / Vercel / Stripe 等顶级 To-C 官网的设计理念，结合“仙本那美丽度假村（Semporna Meili Resort）”的高端海岛度假定位，打造一套重展示、强渲染、呼吸感十足的 UI 设计系统。

本规范完全拥抱 **Headless UI** 理念，不使用高度封装的重型组件库（如 Ant Design），而是基于 **Tailwind CSS + shadcn/ui + Radix UI** 构建，以确保像素级的品牌定制能力和极致的性能体验。

---

## 1. 核心设计理念 (Core Design Philosophy)

1. **大留白 (Ample Whitespace)：** 借鉴 Apple 官网风格，舍弃传统 B 端紧凑的信息密度。使用大跨度的 margin 和 padding（如 `py-24`, `gap-16`），让用户视觉聚焦于绝美的海景图片和核心文案。
2. **大图片与沉浸式视觉 (Immersive Imagery)：** 充满屏幕的 Hero Section、无边框（Edge-to-Edge）的画廊展示，配合细腻的视差滚动（Parallax）与淡入动效。
3. **细致的字体排布 (Detailed Typography)：** 强调文字的对比度。极高的大标题（Display / H1）搭配纤细、易读的正文（Body），形成强烈的戏剧性对比。
4. **克制的色彩 (Restrained Palette)：** 舍弃高饱和度的花哨颜色。以低饱和度的高级灰、纯黑纯白为主调，海洋蓝或香槟金作为点缀色（Accent Color）。
5. **微交互 (Micro-interactions)：** 参考 Stripe/Vercel，按钮悬浮时的细腻光泽、卡片 Hover 时的微妙阴影变化和极度平滑的过渡（Framer Motion）。

---

## 2. 颜色标定 (Colors)

在 `tailwind.config.ts` 中定义的品牌色阶。采用黑白灰作为骨架，海岛主题色作为灵魂。

```css
/* src: globals.css (shadcn/ui 设定格式) */
@layer base {
  :root {
    /* 基础背景与文本 (纯净亮色主题，如 Apple 风格) */
    --background: 0 0% 100%;       /* #FFFFFF */
    --foreground: 240 10% 3.9%;    /* #09090B - 极深灰，比纯黑更护眼 */

    /* 品牌主色调：仙本那深海蓝 (Semporna Deep Sea) */
    --primary: 210 100% 20%;       /* #003865 */
    --primary-foreground: 0 0% 100%;

    /* 强调/辅助色：沙滩香槟金 (Sand Gold - 用于高级感按钮、重要 Icon) */
    --accent: 32 40% 63%;          /* #c5a47e */
    --accent-foreground: 0 0% 100%;

    /* 次级/柔和背景：冰川蓝/浅灰 (用于区块分割、卡片底色) */
    --muted: 210 20% 96%;          /* #f1f5f9 */
    --muted-foreground: 215 16% 47%; /* #64748b */

    /* 边框与分割线 - 极度柔和，避免割裂感 */
    --border: 214.3 31.8% 91.4%;
    --ring: 210 100% 20%;
    
    /* 圆角定调 (Sharp or Soft) */
    --radius: 0.5rem; /* 适中的圆角，不过于圆润，保留高端酒店的克制感 */
  }
}
```

---

## 3. 字体与排版规范 (Typography)

豪华度假村设计高度依赖**衬线体（Serif）**来传递历史感、奢华感与温度，搭配**无衬线体（Sans-Serif）**来实现现代科技感的高效阅读。

*   **大标题 (Display & Headings):** 英文字体采用 `Playfair Display`（或 `Cinzel`），中文字体预加载 `Noto Serif SC`（思源宋体）。表现出经典、优雅的特质。
*   **正文 & UI 标签 (Body & UI text):** 英文字体采用 `Inter` 或是 Apple 系统自带的 `San Francisco`，中文采用 `Noto Sans SC`（思源黑体）。
*   **字体层级 (Tailwind 映射):**
    *   `text-7xl` / `text-8xl`：用于 Hero 区域震撼的大标。
    *   `text-muted-foreground`：大面积用于副标题，降低视觉噪音。
    *   `tracking-widest`（大字间距）：用于小号的预告文本（如 "WELCOME TO MEILI RESTORT"），增加高级感。

```typescript
// next/font 预加载配置示例
import { Playfair_Display, Inter, Noto_Serif_SC } from 'next/font/google';

export const fontPlayfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
export const fontInter = Inter({ subsets: ['latin'], variable: '--font-sans' });
```

---

## 4. 前端工程落地：shadcn/ui + Tailwind 实践

### 4.1 组件选用策略 (Headless UI)
*   **基础积木：** 运行 `npx shadcn@latest add button sheet dialog input select` 获取核心组件。
*   **样式剔除：** 默认的 shadcn 样式偏向 SaaS 风格 (border 过多，shadow 偏硬)。我们需要对 `components/ui/` 下的组件进行二次定制。
*   **定制案例 (Button)：**
    去除厚重的 border，增加 padding。
    ```tsx
    // button.tsx 内部的 cva 配置修改
    const buttonVariants = cva(
      "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      {
        variants: {
          variant: {
            // 定制主按钮：深海蓝底色，悬浮状态极其顺滑
            default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 duration-300 rounded-full px-8 py-6 text-base",
            // 定制幽灵按钮：仅文字，如 Apple 官网的 "Learn more >"
            ghost: "hover:bg-accent/10 hover:text-accent-foreground text-primary duration-300",
            // 定制高定感按钮 (香槟金)
            gold: "bg-accent text-white hover:bg-accent/80 shadow-md duration-300 rounded-none", // 偶尔尝试直角增加锋利感
          },
        },
      }
    )
    ```

### 4.2 动效与交互 (Framer Motion)
*   **拒绝生硬：** 页面不应有“闪现”的元素。
*   **滚动揭示 (Scroll Reveal)：** 搭配 `framer-motion` 和 `react-intersection-observer`，实现 Apple 级别的“文字/图片随滚动缓慢上滑进入 (Fade Up)”效果。
    ```tsx
    // 典型入场动画设定：
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // 自定义缓动曲线 (Apple-like spring/ease)
    viewport={{ once: true, margin: "-100px" }}
    ```

### 4.3 留白与网格系统 (Layout & Grid)
*   **Container 容器：** 不使用被严格限制宽度的版心（除非阅读大段长文）。多用 `w-full max-w-screen-2xl mx-auto md:px-12 px-6`，留出两翼宽广的空间。
*   **Section 间距：** 两个模块之间标准间距强制使用 `py-24` (96px) 到 `py-32` (128px)。
*   **大图呈现：** 使用 `h-[80vh]` 甚至 `h-screen` 作为首屏或特定景色的模块高度，结合 `object-cover` 充满视野。

---

## 5. 典型页面模板解析指引

以首页 (Homepage) 为例：
1. **Nav (导航栏):** 透明底色，纯白/纯黑文字，随着向下滚动，玻璃拟态（Glassmorphism，毛玻璃 `backdrop-blur-md`）背景淡入。
2. **Hero Section:** 全屏海洋背景视频或极高像素静帧。中央为极少量的标题（Serif字体，极简），底部是一个低调但呼吸感极强的 “向下滚动” 指示器。
3. **房型展示区 (Accommodations):** 采用不对称网格 (Asymmetric Grid) 或横向无级滚动（Horizontal Scroll）。图片边缘圆角克制 (`rounded-lg`)。
4. **预订条 (Booking Bar):** 参考 Stripe 卡片的细腻阴影设计 (`shadow-[0_8px_30px_rgb(0,0,0,0.12)]`)，悬浮在首屏底部或页面最下方，表单元素仅具细横线（下划线），无边框输入框。

综上所述，我们在开发过程中应时刻遵守 **“少即是多（Less is more）”** 与 **“高级感来源于克制的克空间布局与极致的细节把控”**。
