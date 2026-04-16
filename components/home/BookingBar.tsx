'use client';

import { useTranslations } from 'next-intl';

/**
 * Booking Bar - 白色毛玻璃效果预订栏
 * 完全复刻四季酒店波拉波拉风格
 */
export function BookingBar() {
  const t = useTranslations('BookingBar');

  return (
    <div 
      className="w-full"
      style={{
        backdropFilter: 'blur(13px)',
        background: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.55), hsla(0, 0%, 100%, 0.75) 30%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-3 flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch lg:items-end">
        
        {/* Date Picker */}
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-[10px] uppercase font-medium tracking-[0.15em] text-black/60">
            {t('dates')}
          </label>
          <div className="h-11 border-b border-black/20 flex items-center justify-between cursor-pointer hover:border-black/40 transition-colors bg-transparent">
            <span className="text-sm font-sans text-black/80 tracking-wide">
              26-04-15 – 26-04-16
            </span>
            <svg className="w-4 h-4 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        {/* Guests */}
        <div className="flex-[0.7] flex flex-col gap-1">
          <label className="text-[10px] uppercase font-medium tracking-[0.15em] text-black/60">
            {t('guests')}
          </label>
          <div className="h-11 border-b border-black/20 flex items-center justify-between cursor-pointer hover:border-black/40 transition-colors bg-transparent">
            <span className="text-sm font-sans text-black/80 tracking-wide">
              1 房间 - 2 成人
            </span>
            <svg className="w-4 h-4 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Promo Code */}
        <div className="flex-[0.7] flex flex-col gap-1">
          <label className="text-[10px] uppercase font-medium tracking-[0.15em] text-black/60">
            {t('promo')}
          </label>
          <div className="h-11 border-b border-black/20 flex items-center cursor-text hover:border-black/40 transition-colors bg-transparent">
            <input 
              type="text" 
              placeholder={t('promoCode')}
              className="w-full bg-transparent text-sm font-sans text-black/80 placeholder:text-black/40 placeholder:italic outline-none tracking-wide"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex-none lg:w-40">
          <button className="w-full h-11 bg-[#1a1a1a] hover:bg-black text-white text-[11px] font-medium tracking-[0.2em] uppercase transition-colors">
            {t('submit')}
          </button>
        </div>

      </div>
    </div>
  );
}
