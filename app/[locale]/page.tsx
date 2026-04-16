import { Hero } from '@/components/home/Hero';
import { IntroSection } from '@/components/home/IntroSection';
import { AccommodationSection } from '@/components/home/AccommodationSection';
import { GallerySection } from '@/components/home/GallerySection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { DiningSection } from '@/components/home/DiningSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="w-full flex-grow relative">
      {/* 首屏英雄区域 */}
      <Hero />

      {/* 简介版块 */}
      <IntroSection />

      {/* 住宿版块 */}
      <AccommodationSection />

      {/* 图库版块 */}
      <GallerySection />

      {/* 体验版块 */}
      <ExperienceSection />

      {/* 餐饮版块 */}
      <DiningSection />

      {/* 页脚 */}
      <Footer />
    </main>
  );
}
