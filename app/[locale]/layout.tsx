import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond, Noto_Serif_SC } from 'next/font/google';

import '../globals.css';

/* ==================
   字体资源加载 (Google Fonts)
   ================== */

// 1. 现代无衬线 (作为主界面默认骨架字体)
const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// 2. 奢华首要标题 (替代 Saol Display)
const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'], // 支持多字重，供高端排版
});

// 3. 优雅衬线正文 (替代 Garamond)
const fontCormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// 4. 中文高定衬线 (思源宋体，匹配四季神秘东方气质)
const fontNotoSerif = Noto_Serif_SC({
  subsets: ['latin'], // 注意：中文子集往往较大，Next.js 会按需下载
  variable: '--font-noto-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
});

import { Header } from '@/components/layout/Header';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;
  
  return {
    title: messages.LocaleLayout.title,
    description: messages.LocaleLayout.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  return (
    <html lang={locale} className="dark">
      {/* 
        将所有 CSS Variable 预注入 html root 身上 
        dark class 强行锁定酒店的黑色主题
      */}
      <body
        className={`
          ${fontInter.variable} 
          ${fontPlayfair.variable} 
          ${fontCormorant.variable} 
          ${fontNotoSerif.variable}
          antialiased min-h-screen bg-white text-foreground flex flex-col
        `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
