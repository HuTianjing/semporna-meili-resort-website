'use client';

import { useTranslations } from 'next-intl';

/**
 * Booking Bar - 白色毛玻璃效果预订栏
 * 完全复刻四季酒店波拉波拉风格
 * 
 * 样式要求：
 * backdrop-filter: blur(13px)
 * background: linear-gradient(180deg, hsla(0, 0%, 100%, 0.55), hsla(0, 0%, 100%, 0.75) 30%)
 */
export function BookingBar() {
  const t = useTranslations('BookingBar');

  return (
    <div 
      className="w-full border-b border-black/5"
      style={{
        backdropFilter: 'blur(13px)',
        WebkitBackdropFilter: 'blur(13px)',
        background: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.55), hsla(0, 0%, 100%, 0.75) 30%)',
      }}
    >
      <div className="w-full px-6 lg:px-10 py-3 flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch lg:items-end">
        
        {/* 日期选择 */}
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-[9px] uppercase font-medium tracking-[0.2em] text-black/50">
            {t('dates')}
          </label>
          <div className="h-10 border-b border-black/15 flex items-center justify-between cursor-pointer hover:border-black/30 transition-colors">
            <span className="text-[13px] font-sans text-black/70 tracking-wide">
              26-04-15 – 26-04-16
            </span>
            <svg className="w-3.5 h-3.5 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* 宾客选择 */}
        <div className="flex-[0.8] flex flex-col gap-1.5">
          <label className="text-[9px] uppercase font-medium tracking-[0.2em] text-black/50">
            {t('guests')}
          </label>
          <div className="h-10 border-b border-black/15 flex items-center justify-between cursor-pointer hover:border-black/30 transition-colors">
            <span className="text-[13px] font-sans text-black/70 tracking-wide">
              1 房间 · 2 成人
            </span>
            <svg className="w-3.5 h-3.5 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* 促销码 */}
        <div className="flex-[0.8] flex flex-col gap-1.5">
          <label className="text-[9px] uppercase font-medium tracking-[0.2em] text-black/50">
            {t('promo')}
          </label>
          <div className="h-10 border-b border-black/15 flex items-center hover:border-black/30 transition-colors">
            <input 
              type="text" 
              placeholder={t('promoCode')}
              className="w-full bg-transparent text-[13px] font-sans text-black/70 placeholder:text-black/30 placeholder:italic outline-none tracking-wide"
            />
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="flex-none lg:w-36">
          <button className="w-full h-10 bg-[#1a1a1a] hover:bg-black text-white text-[10px] font-medium tracking-[0.25em] uppercase transition-colors duration-300">
            {t('submit')}
          </button>
        </div>

      </div>
    </div>
  );
}
