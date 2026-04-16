'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BookingBar } from '../home/BookingBar';

/**
 * Header 组件 - 美丽度假酒店
 * 
 * 根据文档要求：
 * - 背景：深海蓝玻璃拟态 bg-[#003865]/60 backdrop-blur-md
 * - 滚动时：添加阴影 shadow-lg
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
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      {/* Main Nav - 深海蓝玻璃拟态背景 */}
      <nav className="bg-[#003865]/60 backdrop-blur-md">
        <div className="h-[72px] w-full flex items-center justify-between px-6 lg:px-10">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-3">
            {/* 美丽酒店 Logo - 简约树形 */}
            <div className="w-8 h-12 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 32 48" fill="none" className="w-full h-full">
                <line x1="16" y1="48" x2="16" y2="14" stroke="white" strokeWidth="0.8"/>
                <path d="M16 2 L9 13 L16 9 L23 13 Z" fill="white"/>
                <path d="M16 12 L5 27 L16 20 L27 27 Z" fill="white"/>
                <path d="M16 24 L1 44 L16 34 L31 44 Z" fill="white"/>
              </svg>
            </div>
            
            <div className="flex flex-col leading-tight">
              <span className="text-white text-base lg:text-lg tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
                {t('brand')}
              </span>
              <span className="text-white/70 text-[10px] lg:text-[11px] font-sans tracking-wider">
                {t('resort')}
              </span>
            </div>
          </div>
          
          {/* Center: Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-8 text-[13px] text-white/90 font-light tracking-wide">
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
          <button className="hidden lg:block px-6 py-2.5 border border-white/80 text-white text-[12px] tracking-widest hover:bg-white hover:text-[#003865] transition-all duration-300">
            {t('checkRates')}
          </button>

          {/* Mobile Menu Button */}
          <button className="xl:hidden text-white p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Booking Bar - 白色毛玻璃效果 */}
      <BookingBar />
    </header>
  );
}
