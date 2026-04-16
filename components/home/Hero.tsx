'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Hero 组件 - 完全复刻四季酒店波拉波拉风格
 * 全屏背景 + 左下角文案 + 右下角三卡片 + 底部滚动指示器
 */
export function Hero() {
  const t = useTranslations('Index');
  const [isPlaying, setIsPlaying] = useState(true);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // 滚动进度监听
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // 右下角卡片随滚动向右平移并淡出
  const cardsX = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // 延迟显示滚动提示
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex flex-col">
      {/* 主视觉区域 */}
      <div className="relative flex-1 min-h-[calc(100vh-80px)] flex items-end pb-8 md:pb-16 overflow-hidden">
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
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* 左下角文案 - Header高度补偿 */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-[180px]">
          <div className="text-white max-w-xl flex flex-col gap-2">
            <p className="text-sm md:text-base font-sans tracking-wide text-white/90">
              {t('resortName')}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide leading-[0.95]">
              {t('title')}
            </h1>
            
            <div className="mt-4 md:mt-6 text-[11px] md:text-xs font-sans tracking-[0.15em] text-white/80 uppercase">
              MOTU TEHOTU - BP 547, 98730, BORA BORA, FRENCH POLYNESIA
            </div>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2 text-sm">
              <span className="text-white underline underline-offset-4 decoration-white/60 cursor-pointer hover:decoration-white transition-colors">
                +689 40 603 170
              </span>
              <span className="text-white underline underline-offset-4 decoration-white/60 cursor-pointer hover:decoration-white transition-colors">
                {t('location')}
              </span>
              <span className="text-white underline underline-offset-4 decoration-white/60 cursor-pointer hover:decoration-white transition-colors">
                {t('contactUs')}
              </span>
            </div>
          </div>
        </div>

        {/* 右下角三个卡片 - 滚动时向右平移并淡出 */}
        <motion.div 
          className="absolute bottom-8 md:bottom-16 right-6 md:right-12 z-10 hidden lg:flex gap-3"
          style={{ x: cardsX, opacity: cardsOpacity }}
        >
          {[
            { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', subIcon: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: t('location') },
            { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: '别墅与套房' },
            { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', label: '图片视频' },
          ].map((item, index) => (
            <div 
              key={index}
              className="w-28 h-20 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/60 transition-colors border border-white/10"
            >
              <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.icon} />
                {item.subIcon && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.subIcon} />}
              </svg>
              <span className="text-[10px] text-white/80 tracking-wider uppercase">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* 右下角播放/暂停按钮 */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-8 right-6 md:bottom-16 md:right-12 lg:hidden z-10 w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* 大屏幕播放按钮 - 居中底部 */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex w-11 h-11 rounded-full border border-white/40 items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* 底部滚动提示区域 - 延迟显示 */}
      <motion.div 
        className="relative bg-[#f5f5f0] flex flex-col items-center justify-center overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: showScrollHint ? 100 : 0, 
          opacity: showScrollHint ? 1 : 0 
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="text-[11px] text-black/50 tracking-[0.2em] uppercase mb-4">
          {t('scrollDown')}
        </span>
        
        {/* 垂直指示线动画 */}
        <div className="relative h-10 w-px bg-black/10 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-3 bg-black/40"
            animate={{ y: ['-100%', '400%'] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: 'easeInOut',
              repeatDelay: 0.5
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
