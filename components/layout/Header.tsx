'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BookingBar } from '../home/BookingBar';

/**
 * Header 组件 - 完全复刻四季酒店波拉波拉风格
 * 深海蓝玻璃拟态背景，滚动时增加阴影
 */
export function Header() {
  const t = useTranslations('Header');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      {/* Main Nav - 深海蓝玻璃拟态背景 */}
      <div className="bg-[#1a1a1a] backdrop-blur-md">
        <div className="h-[72px] w-full flex items-center justify-between px-6 lg:px-12">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-4">
            {/* Four Seasons Tree Logo - 精确复刻 */}
            <div className="w-9 h-12 flex items-center justify-center">
              <svg viewBox="0 0 36 48" fill="none" className="w-full h-full">
                {/* 树干 */}
                <line x1="18" y1="48" x2="18" y2="12" stroke="white" strokeWidth="1"/>
                {/* 顶部三角 */}
                <path d="M18 0 L10 12 L18 8 L26 12 Z" fill="white"/>
                {/* 中间三角 */}
                <path d="M18 10 L6 26 L18 18 L30 26 Z" fill="white"/>
                {/* 底部三角 */}
                <path d="M18 22 L2 42 L18 30 L34 42 Z" fill="white"/>
              </svg>
            </div>
            
            <div className="flex flex-col leading-tight">
              <span className="text-white font-serif text-base lg:text-lg tracking-wide">
                {t('brand')}
              </span>
              <span className="text-white/70 text-[11px] lg:text-xs font-sans tracking-wide">
                {t('resort')}
              </span>
            </div>
          </div>
          
          {/* Center: Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] text-white/90 font-normal tracking-wide">
            <Link href="#overview" className="hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/50">
              {t('nav1')}
            </Link>
            <Link href="#villas" className="hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/50">
              {t('nav2')}
            </Link>
            <Link href="#gallery" className="hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/50">
              {t('nav3')}
            </Link>
            <Link href="#location" className="hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/50">
              {t('nav4')}
            </Link>
            <Link href="#offers" className="hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/50">
              {t('nav5')}
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors py-2 border-b-2 border-transparent hover:border-white/50">
              {t('nav6')}
            </Link>
          </nav>

          {/* Right: CTA Button */}
          <button className="hidden lg:block px-6 py-2.5 border border-white text-white text-[13px] tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            {t('checkRates')}
          </button>

          {/* Mobile Menu Button */}
          <button className="xl:hidden text-white p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Booking Bar - 毛玻璃效果 */}
      <BookingBar />
    </header>
  );
}
