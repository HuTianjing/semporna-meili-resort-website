'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Hero 组件 - 美丽度假酒店
 * 完全复刻截图样式
 */
export function Hero() {
  const t = useTranslations('Index');
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const cardsX = useTransform(scrollYProgress, [0, 0.25], [0, 300]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section ref={heroRef} className="relative w-full">
      {/* 主视觉区域 - 全屏 */}
      <div className="relative h-screen">
        {/* 全屏背景图 */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2938&auto=format&fit=crop" 
            alt="美丽度假酒店海景" 
            fill 
            priority
            sizes="100vw"
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* 内容容器 */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-20 pt-[160px]">
          
          {/* 左下角文案区域 */}
          <div className="text-white max-w-lg">
            {/* 副标题 - 斜体 */}
            <p 
              className="text-base md:text-lg font-light tracking-wide text-white/90 mb-2 italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t('resortName')}
            </p>
            
            {/* 主标题 - 巨大衬线字体 */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl tracking-wide leading-[0.95] mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t('title')}
            </h1>
            
            {/* 地址 */}
            <p className="text-[11px] md:text-xs font-sans tracking-[0.15em] text-white/80 uppercase mb-5">
              SEMPORNA, SABAH 91308, MALAYSIA
            </p>
            
            {/* 联系方式链接 - 下划线样式 */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a 
                href="tel:+60123456789" 
                className="text-white border-b border-white/60 pb-0.5 hover:border-white transition-colors"
              >
                +60 12 345 6789
              </a>
              <a 
                href="#location" 
                className="text-white border-b border-white/60 pb-0.5 hover:border-white transition-colors"
              >
                {t('location')}
              </a>
              <a 
                href="#contact" 
                className="text-white border-b border-white/60 pb-0.5 hover:border-white transition-colors"
              >
                {t('contactUs')}
              </a>
            </div>
          </div>

          {/* 右下角白色半透明卡片 - 滚动时向右淡出 */}
          <motion.div 
            className="absolute bottom-12 md:bottom-16 lg:bottom-20 right-6 md:right-10 lg:right-12 z-10 hidden lg:block"
            style={{ x: cardsX, opacity: cardsOpacity }}
          >
            <div className="w-[340px] bg-white/95 backdrop-blur-sm p-8">
              {/* 欢迎文案 */}
              <p 
                className="text-xl text-black/80 mb-6 leading-relaxed"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                欢迎，下一趟旅程等待您开启。
              </p>
              
              {/* 查看房价按钮 */}
              <button className="w-full bg-black text-white text-sm tracking-wider py-4 mb-5 hover:bg-black/90 transition-colors">
                查看房价
              </button>
              
              {/* 我已经有预订 链接 */}
              <a 
                href="#booking" 
                className="text-sm text-black/70 border-b border-black/40 pb-0.5 hover:text-black hover:border-black transition-colors"
              >
                我已经有预订
              </a>
            </div>
          </motion.div>

          {/* 右下角播放/暂停按钮 */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-12 md:bottom-16 right-6 md:right-10 lg:hidden z-10 w-11 h-11 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* 桌面端暂停按钮 - 卡片下方 */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-12 md:bottom-16 lg:bottom-20 right-6 md:right-10 lg:right-[380px] z-10 hidden lg:flex w-11 h-11 rounded-full border border-white/50 items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 底部滚动提示区域 */}
      <motion.div 
        className="relative bg-[#f8f7f4] flex flex-col items-center justify-center overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: showScrollHint ? 90 : 0, 
          opacity: showScrollHint ? 1 : 0 
        }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-[10px] text-black/40 tracking-[0.25em] uppercase mb-4 font-light">
          {t('scrollDown')}
        </span>
        
        <div className="relative h-8 w-[1px] bg-black/10 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-2 bg-black/50"
            animate={{ y: ['-100%', '500%'] }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: 'easeInOut',
              repeatDelay: 0.8
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
