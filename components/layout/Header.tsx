import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

/**
 * Header 组件 - 四季酒店风格
 * 纯黑背景，简洁的导航布局
 */
export async function Header() {
  const t = await getTranslations('Header');
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#1a1a1a]">
      {/* Main Nav */}
      <div className="h-20 w-full flex items-center justify-between px-6 md:px-12">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-4">
          {/* Four Seasons Tree Logo */}
          <div className="w-10 h-14 flex items-center justify-center">
            <svg viewBox="0 0 40 56" fill="none" className="w-full h-full">
              <path d="M20 0L20 56" stroke="white" strokeWidth="1"/>
              <path d="M20 8L8 20L20 14L32 20L20 8Z" fill="white"/>
              <path d="M20 18L6 32L20 24L34 32L20 18Z" fill="white"/>
              <path d="M20 28L4 44L20 34L36 44L20 28Z" fill="white"/>
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="text-white font-serif text-lg tracking-wide">{t('brand')}</span>
            <span className="text-white/80 text-xs font-sans tracking-wider">{t('resort')}</span>
          </div>
        </div>
        
        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm text-white/90 font-normal tracking-wide">
          <Link href="#overview" className="hover:text-white transition-colors py-2">
            {t('nav1')}
          </Link>
          <Link href="#villas" className="hover:text-white transition-colors py-2">
            {t('nav2')}
          </Link>
          <Link href="#gallery" className="hover:text-white transition-colors py-2">
            {t('nav3')}
          </Link>
          <Link href="#location" className="hover:text-white transition-colors py-2">
            {t('nav4')}
          </Link>
          <Link href="#offers" className="hover:text-white transition-colors py-2">
            {t('nav5')}
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors py-2">
            {t('nav6')}
          </Link>
        </nav>

        {/* Right: CTA Button */}
        <button className="hidden md:block px-6 py-3 border border-white text-white text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
          {t('checkRates')}
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
