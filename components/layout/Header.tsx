'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BookingBar } from '../home/BookingBar';

/**
 * Header 组件 - 美丽度假酒店
 * 完全复刻截图样式：
 * 1. 顶部工具栏（纯黑）
 * 2. 主导航（深色透明）
 * 3. 预订栏（白色毛玻璃 + 隐藏按钮）
 */
export function Header() {
  const t = useTranslations('Header');
  const [showBookingBar, setShowBookingBar] = useState(true);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* 顶部工具栏 - 纯黑背景 */}
      <div className="h-8 bg-black text-white/70 text-[11px] flex justify-end items-center px-6 lg:px-10 gap-8 tracking-wide">
        <span className="cursor-pointer hover:text-white transition-colors hidden md:block">
          {t('allHotels')}
        </span>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>{t('language')}</span>
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>CNY</span>
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 主导航栏 - 深色半透明 */}
      <nav className="bg-slate-950/80 backdrop-blur-sm">
        <div className="h-16 w-full flex items-center justify-between px-6 lg:px-10">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-4">
            {/* 美丽酒店 Logo */}
            <div className="w-8 h-12 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 32 48" fill="none" className="w-full h-full">
                <line x1="16" y1="48" x2="16" y2="14" stroke="white" strokeWidth="0.8"/>
                <path d="M16 2 L9 13 L16 9 L23 13 Z" fill="white"/>
                <path d="M16 12 L5 27 L16 20 L27 27 Z" fill="white"/>
                <path d="M16 24 L1 44 L16 34 L31 44 Z" fill="white"/>
              </svg>
            </div>
            
            <div className="flex flex-col leading-tight">
              <span className="text-white text-lg tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
                {t('brand')} <span className="text-white/80 font-normal">{t('resort')}</span>
              </span>
            </div>
          </div>
          
          {/* Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] text-white/80 font-light tracking-wide">
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

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Booking Bar - 白色毛玻璃效果 + 隐藏按钮 */}
      {showBookingBar && (
        <BookingBar onHide={() => setShowBookingBar(false)} />
      )}
      
      {/* 已隐藏时显示展开按钮 */}
      {!showBookingBar && (
        <button 
          onClick={() => setShowBookingBar(true)}
          className="absolute right-6 top-24 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-wider text-black/60 hover:text-black transition-colors"
        >
          {t('show')}
        </button>
      )}
    </header>
  );
}
