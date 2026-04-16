import { Hero } from '@/components/home/Hero';
import { IntroSection } from '@/components/home/IntroSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="w-full flex-grow relative">
      {/* 首屏英雄区域 */}
      <Hero />

      {/* 简介版块 - 视差遮盖效果 */}
      <IntroSection />

      {/* 页脚 */}
      <Footer />
    </main>
  );
}
