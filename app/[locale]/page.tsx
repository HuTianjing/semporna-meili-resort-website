import { useTranslations } from 'next-intl';
import { Hero } from '@/components/home/Hero';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="w-full flex-grow relative bg-black">
      {/* 首屏英雄区域 (使用负 margin 被 Header 覆盖) */}
      <Hero />

      {/* 测试 Lenis 平滑滚动的虚拟内容区域 (过渡区) */}
      <section className="min-h-[50vh] bg-background flex flex-col items-center justify-center border-t border-border gap-4 p-8 relative z-20">
        <h2 className="text-3xl font-serif text-muted-foreground tracking-widest text-center">{t('scrollDown')}</h2>
        <div className="w-px h-24 bg-gradient-to-b from-muted-foreground/0 via-muted-foreground to-muted-foreground/0 animate-pulse" />
      </section>
      
      {/* 预留高度，验证滚动阻尼效果 */}
      <section className="h-[120vh] bg-[#0c0c0c] flex flex-col items-start justify-start p-[max(2rem,6vw)] text-primary font-text relative z-20">
         <h2 className="text-4xl text-white">后续版块预留位...</h2>
      </section>
    </main>
  );
}
