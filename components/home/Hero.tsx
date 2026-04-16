import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { HeroPlayButton } from './HeroPlayButton';

export async function Hero() {
  const t = await getTranslations('Index');
  
  return (
    <section className="relative h-screen w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden">
      
      {/* 全屏背景图 */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2938&auto=format&fit=crop" 
           alt="Bora Bora Resort View" 
           fill 
           priority
           sizes="100vw"
           className="object-cover" 
         />
         {/* 轻微暗色叠加层 */}
         <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 左下角文字内容 */}
      <div className="relative z-10 text-white max-w-xl flex flex-col gap-3">
        <p className="text-base md:text-lg font-sans tracking-wide text-white/90">
          {t('resortName')}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide leading-none">
          {t('title')}
        </h1>
        
        <div className="mt-6 text-xs md:text-sm font-sans tracking-[0.2em] text-white/90 uppercase">
          MOTU TEHOTU - BP 547, 98730, BORA BORA, FRENCH POLYNESIA
        </div>
        
        <div className="flex items-center gap-6 mt-2 text-sm">
          <span className="text-white underline underline-offset-4 cursor-pointer hover:text-white/80 transition-colors">
            +689 40 603 170
          </span>
          <span className="text-white underline underline-offset-4 cursor-pointer hover:text-white/80 transition-colors">
            {t('location')}
          </span>
          <span className="text-white underline underline-offset-4 cursor-pointer hover:text-white/80 transition-colors">
            {t('contactUs')}
          </span>
        </div>
      </div>

      {/* 右下角播放/暂停按钮 */}
      <HeroPlayButton />
    </section>
  );
}
