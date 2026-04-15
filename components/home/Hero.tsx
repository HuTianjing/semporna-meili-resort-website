import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Index');
  
  return (
    // 使用负 margin-top (-160px = 40+80+BookingBar) 把英雄图拉到顶部被玻璃态 Header 覆盖
    <section className="relative h-[100svh] w-full -mt-[210px] flex items-end pb-32 px-4 md:px-16 overflow-hidden">
      
      {/* 占据全屏的背景占位图 (代替视频，符合响应式要求) */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2938&auto=format&fit=crop" 
           alt="Semporna Blue Bay" 
           fill 
           priority
           sizes="100vw"
           className="object-cover object-[center_70%]" 
         />
         {/* 底部暗色渐变托底字迹，顶部渐变托底黑白Header */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/30" />
      </div>

      <div className="relative z-10 text-white max-w-2xl flex flex-col gap-2 drop-shadow-2xl">
        <h2 className="text-xl md:text-[1.8rem] font-serif italic font-light tracking-wide text-white/90">
          {t('subtitle')}
        </h2>
        <h1 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-serif tracking-[0.1em] leading-none mt-2">
          {t('title')}
        </h1>
        
        <div className="mt-8 text-[11px] md:text-sm font-sans tracking-[0.15em] text-white/90 leading-[2.5]">
          MOTU TEHOTU - BP 547, 98730, SEMPORNA, MALAYSIA<br/>
          <span className="text-white border-b border-white pb-1 mt-4 inline-block font-semibold">
            +60 12 345 6789
          </span>
          <span className="mx-6 hidden sm:inline">位置</span>
          <span className="hidden sm:inline">联系我们</span>
        </div>
      </div>
    </section>
  );
}