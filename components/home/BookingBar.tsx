import { useTranslations } from 'next-intl';

export function BookingBar() {
  const t = useTranslations('BookingBar');

  return (
    <div className="w-full bg-white/70 dark:bg-black/30 backdrop-blur-xl shadow-lg border-y border-white/20 transition-all duration-300">
      {/* max-w 控制了预订栏不要太过宽广 */}
      <div className="max-w-[1400px] mx-auto px-4 py-4 md:py-5 flex flex-col lg:flex-row gap-4 items-end lg:items-center">
        
        {/* Date Picker Mock */}
        <div className="flex-1 w-full flex flex-col gap-1">
          <label className="text-[11px] uppercase font-bold tracking-[0.1em] text-black/80 dark:text-white/80">
            {t('dates')}
          </label>
          <div className="w-full h-12 bg-white/40 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/10 px-4 flex items-center justify-between cursor-pointer hover:border-black/30 transition-colors">
            <span className="text-sm font-sans text-black dark:text-white font-medium tracking-wider">
              26-04-15 – 26-04-16
            </span>
            <span className="text-black/50 dark:text-white/50 text-xs">✕</span>
          </div>
        </div>

        {/* Guests Mock */}
        <div className="flex-[0.8] w-full flex flex-col gap-1">
          <label className="text-[11px] uppercase font-bold tracking-[0.1em] text-black/80 dark:text-white/80">
            {t('guests')}
          </label>
          <div className="w-full h-12 bg-white/40 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/10 px-4 flex items-center justify-between cursor-pointer hover:border-black/30 transition-colors">
            <span className="text-sm font-sans text-black dark:text-white font-medium tracking-wider">
              1 房间 - 2 成人
            </span>
            <span className="text-black/50 dark:text-white/50 text-xs">⌄</span>
          </div>
        </div>

        {/* Promo Mock */}
        <div className="flex-[0.8] w-full flex flex-col gap-1">
          <label className="text-[11px] uppercase font-bold tracking-[0.1em] text-black/80 dark:text-white/80">
            {t('promo')}
          </label>
          <div className="w-full h-12 bg-white/40 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/10 px-4 flex items-center cursor-text hover:border-black/30 transition-colors">
            <span className="text-sm font-sans text-black/40 dark:text-white/40 italic">
              {t('promoCode')}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex-none lg:w-48 w-full mt-2 lg:mt-0 h-12 flex flex-col justify-end">
          <button className="w-full h-12 bg-black hover:bg-neutral-800 text-white text-xs font-bold tracking-widest uppercase transition-colors">
            {t('submit')}
          </button>
        </div>

      </div>
    </div>
  );
}