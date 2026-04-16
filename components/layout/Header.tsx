'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BookingBar } from '../home/BookingBar';

/**
 * Header 组件 - 完全复刻四季酒店截图样式
 */
export function Header() {
  const t = useTranslations('Header');
  const [showBookingBar, setShowBookingBar] = useState(true);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* 顶部工具栏 - 纯黑背景，内容靠右 */}
      <div className="h-9 bg-black text-white/80 text-[11px] flex justify-end items-center px-6 lg:px-10 gap-6 tracking-wide">
        <span className="cursor-pointer hover:text-white transition-colors hidden md:block">
          所有酒店及度假酒店
        </span>
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
          {/* 用户图标 */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          </svg>
          <span>登入</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>简体中文</span>
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>VND</span>
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 主导航栏 - 深色透明渐变 */}
      <nav className="bg-gradient-to-b from-black/90 via-black/70 to-transparent">
        <div className="h-20 w-full flex items-center px-6 lg:px-10">
          {/* Left: Logo */}
          <div className="w-12 h-16 flex items-center justify-center flex-shrink-0 mr-5">
            <svg viewBox="0 0 40 56" fill="none" className="w-full h-full">
              <line x1="20" y1="56" x2="20" y2="16" stroke="white" strokeWidth="0.8"/>
              <path d="M20 4 L12 16 L20 11 L28 16 Z" fill="white"/>
              <path d="M20 14 L8 30 L20 23 L32 30 Z" fill="white"/>
              <path d="M20 26 L4 46 L20 36 L36 46 Z" fill="white"/>
            </svg>
          </div>
          
          {/* Brand + Nav - 垂直排列 */}
          <div className="flex flex-col gap-2">
            {/* 品牌名 - 第一行 */}
            <div className="text-white text-lg tracking-wide leading-none" style={{ fontFamily: 'var(--font-serif)' }}>
              <span className="font-normal">美丽度假酒店</span>
              <span className="ml-2 text-white/90">仙本那美丽度假酒店</span>
            </div>
            
            {/* 导航链接 - 第二行 */}
            <div className="hidden lg:flex items-center gap-6 text-[13px] text-white/80 font-light tracking-wide">
              <Link href="#overview" className="hover:text-white transition-colors">
                {t('nav1')}
              </Link>
              <Link href="#villas" className="hover:text-white transition-colors">
                {t('nav2')}
              </Link>
              <Link href="#gallery" className="hover:text-white transition-colors">
                {t('nav3')}
              </Link>
              <Link href="#location" className="hover:text-white transition-colors">
                {t('nav4')}
              </Link>
              <Link href="#offers" className="hover:text-white transition-colors">
                {t('nav5')}
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors">
                {t('nav6')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2 ml-auto" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Booking Bar - 白色毛玻璃效果 */}
      {showBookingBar && (
        <BookingBar onHide={() => setShowBookingBar(false)} />
      )}
      
      {/* 已隐藏时显示展开按钮 */}
      {!showBookingBar && (
        <button 
          onClick={() => setShowBookingBar(true)}
          className="absolute right-6 top-28 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-wider text-black/60 hover:text-black transition-colors"
        >
          显示
        </button>
      )}
    </header>
  );
}
