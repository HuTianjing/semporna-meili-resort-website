import { useTranslations } from 'next-intl';
import { BookingBar } from '../home/BookingBar';

/**
 * 满足：
 * 1. 禁止使用 fixed，而是使用 sticky 和负 top 控制滚动时略微向上隐藏 Utility Bar
 * 2. 主导航带黑色渐变至透明，Booking Bar 带毛玻璃。
 */
export function Header() {
  const t = useTranslations('Header');
  
  return (
    // 使用 sticky top-[-2.5rem]：当页面向下滚动 40px(2.5rem) 后，顶部 Utility 栏隐藏，
    // 而主导航与预订栏永久置顶，完美实现了要求中"页面上拉时，顶部会稍微向上隐藏"的效果。
    <header className="sticky top-[-2.5rem] z-50 w-full flex flex-col pointer-events-auto">
      
      {/* Utility Bar (h-10 = 2.5rem = 40px) */}
      <div className="h-10 bg-black/95 text-white/70 text-[11px] flex justify-between md:justify-end items-center px-4 md:px-12 gap-8 uppercase tracking-widest border-b border-white/5">
        <span className="cursor-pointer hover:text-white transition-colors hidden sm:block">{t('allHotels')}</span>
        <span className="cursor-pointer hover:text-white transition-colors">{t('login')}</span>
        <span className="cursor-pointer hover:text-white transition-colors flex items-center gap-1">
          {t('language')} <span className="text-[10px]">▼</span>
        </span>
      </div>

      {/* Main Nav (h-20 = 80px) 带有渐变黑底 */}
      <div className="h-24 bg-gradient-to-b from-black/90 via-black/60 to-black/20 backdrop-blur-[2px] w-full flex items-center justify-between px-4 md:px-12">
        <div className="flex items-center gap-6">
          {/* Logo Mock */}
          <div className="w-8 h-12 border border-white/40 flex items-center justify-center">
            <span className="text-white text-xs">LOGO</span>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-white font-serif text-lg tracking-[0.15em]">{t('brand')}</span>
            <span className="text-white/80 text-[11px] font-sans tracking-widest uppercase">{t('resort')}</span>
          </div>
        </div>
        
        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-10 text-[13px] text-white font-medium tracking-[0.1em]">
          <span className="cursor-pointer relative hover:text-white/80 transition-all font-bold 
                           after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-white">
            {t('nav1')}
          </span>
          <span className="cursor-pointer text-white/90 hover:text-white transition-all">{t('nav2')}</span>
          <span className="cursor-pointer text-white/90 hover:text-white transition-all">{t('nav3')}</span>
          <span className="cursor-pointer text-white/90 hover:text-white transition-all">{t('nav4')}</span>
          <span className="cursor-pointer text-white/90 hover:text-white transition-all">{t('nav5')}</span>
          <span className="cursor-pointer text-white/90 hover:text-white transition-all">{t('nav6')}</span>
        </nav>
      </div>

      {/* Booking Bar (毛玻璃态) */}
      <BookingBar />
    </header>
  );
}