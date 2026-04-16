'use client';

import { useTranslations } from 'next-intl';

interface BookingBarProps {
  onHide?: () => void;
}

/**
 * Booking Bar - 白色毛玻璃效果预订栏
 * 完全复刻截图样式：
 * - 白色半透明背景 + 毛玻璃效果
 * - 右上角折叠三角 + 隐藏按钮
 * - 日期 | 宾客 | 促销码 | 查看房价
 */
export function BookingBar({ onHide }: BookingBarProps) {
  const t = useTranslations('BookingBar');

  return (
    <div 
      className="relative w-full"
      style={{
        backdropFilter: 'blur(13px)',
        WebkitBackdropFilter: 'blur(13px)',
        background: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.65), hsla(0, 0%, 100%, 0.85) 30%)',
      }}
    >
      {/* 右上角隐藏按钮 */}
      <button 
        onClick={onHide}
        className="absolute right-0 top-0 flex items-center gap-2 px-4 py-2 text-black/40 hover:text-black/60 transition-colors z-10"
      >
        {/* 折叠三角 */}
        <div className="w-4 h-4 border-r border-t border-black/20 transform rotate-[-45deg]" />
        <span className="text-[11px] tracking-wider">{t('hide')}</span>
      </button>

      <div className="w-full px-6 lg:px-10 py-4 flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch lg:items-end">
        
        {/* 日期选择 */}
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-[10px] font-normal tracking-wide text-black/50">
            {t('dates')}
          </label>
          <div className="h-10 border-b border-black/15 flex items-center justify-between cursor-pointer hover:border-black/30 transition-colors group">
            <span className="text-[15px] font-light text-black/80 tracking-wide">
              26-04-15 – 26-04-16
            </span>
            <svg className="w-4 h-4 text-black/30 group-hover:text-black/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        {/* 宾客选择 */}
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-[10px] font-normal tracking-wide text-black/50">
            {t('guests')}
          </label>
          <div className="h-10 border-b border-black/15 flex items-center justify-between cursor-pointer hover:border-black/30 transition-colors group">
            <span className="text-[15px] font-light text-black/80 tracking-wide">
              1 {t('room')} - 2 {t('adults')}
            </span>
            <svg className="w-4 h-4 text-black/30 group-hover:text-black/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* 促销码 */}
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-[10px] font-normal tracking-wide text-black/50">
            {t('promo')}
          </label>
          <div className="h-10 border-b border-black/15 flex items-center hover:border-black/30 transition-colors">
            <input 
              type="text" 
              placeholder={t('promoCode')}
              className="w-full bg-transparent text-[15px] font-light text-black/80 placeholder:text-black/40 outline-none tracking-wide"
            />
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="flex-none lg:w-32">
          <button className="w-full h-10 bg-slate-950 hover:bg-black text-white text-[11px] font-medium tracking-[0.2em] transition-colors duration-300">
            {t('submit')}
          </button>
        </div>

      </div>
    </div>
  );
}
