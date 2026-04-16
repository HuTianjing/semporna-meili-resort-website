'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Hero 组件 - 完全复刻四季酒店波拉波拉风格
 * 
 * 核心交互：
 * 1. 右下角三个卡片随滚动向右平移并淡出
 * 2. 延迟2-3秒后，底部滚动提示区域淡入
 * 3. 垂直指示线循环动画
 */
export function Hero() {
  const t = useTranslations('Index');
  const [showScrollHint, setShowScrollHint] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // 滚动进度监听
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // 右下角卡片随滚动向右平移并淡出
  const cardsX = useTransform(scrollYProgress, [0, 0.25], [0, 300]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // 延迟显示滚动提示（2.5秒后）
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section ref={heroRef} className="relative w-full">
      {/* 主视觉区域 - 需要减去 Header + BookingBar 的高度后全屏 */}
      <div className="relative h-screen">
        {/* 全屏背景图 */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2938&auto=format&fit=crop" 
            alt="Semporna Resort View" 
            fill 
            priority
            sizes="100vw"
            className="object-cover" 
          />
          {/* 轻微暗色叠加层 - 确保文字可读 */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* 内容容器 - 需要 padding-top 来避开 Header */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 lg:px-12 pb-8 md:pb-12 lg:pb-16 pt-[140px]">
          
          {/* 左下角文案区域 */}
          <div className="text-white max-w-lg">
            {/* 次级标题 */}
            <p className="text-sm md:text-base font-sans tracking-widest text-white/90 uppercase mb-2">
              {t('resortName')}
            </p>
            
            {/* 主标题 - 巨大冲击力 */}
            <h1 
              className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-wide leading-[0.9] mb-6"
              style={{ fontFamily: 'var(--font-serif)', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
            >
              {t('title')}
            </h1>
            
            {/* 地址 */}
            <p className="text-[11px] md:text-xs font-sans tracking-[0.2em] text-white/80 uppercase mb-4" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
              MOTU TEHOTU - BP 547, 98730, BORA BORA, FRENCH POLYNESIA
            </p>
            
            {/* 联系方式链接 */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
              <a href="tel:+68940603170" className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
                +689 40 603 170
              </a>
              <a href="#location" className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
                {t('location')}
              </a>
              <a href="#contact" className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
                {t('contactUs')}
              </a>
            </div>
          </div>

          {/* 右下角三个卡片 - 滚动时向右平移并淡出 */}
          <motion.div 
            className="absolute bottom-8 md:bottom-12 lg:bottom-16 right-6 md:right-10 lg:right-12 z-10 hidden lg:flex gap-2"
            style={{ x: cardsX, opacity: cardsOpacity }}
          >
            {[
              { 
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: t('location')
              },
              { 
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                label: '别墅与套房'
              },
              { 
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                label: '图片视频'
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="w-[110px] h-[72px] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/50 transition-all duration-300 border border-white/10"
              >
                <div className="text-white/70">
                  {item.icon}
                </div>
                <span className="text-[9px] text-white/70 tracking-[0.15em] uppercase font-light">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* 播放/暂停按钮 - 右下角（仅移动端显示）或居中底部（桌面端隐藏，因为有卡片） */}
          <button 
            className="absolute bottom-8 right-6 md:bottom-12 md:right-10 lg:hidden z-10 w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Pause video"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          </button>
        </div>
      </div>

      {/* 底部滚动提示区域 - 延迟淡入 */}
      <motion.div 
        className="relative bg-[#f8f7f4] flex flex-col items-center justify-center overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: showScrollHint ? 90 : 0, 
          opacity: showScrollHint ? 1 : 0 
        }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* 提示文字 */}
        <span className="text-[10px] text-black/40 tracking-[0.25em] uppercase mb-4 font-light">
          {t('scrollDown')}
        </span>
        
        {/* 垂直指示线 + 循环下滑动画 */}
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
