import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

/**
 * Mega Footer - 参考四季酒店风格的超级页脚
 * 
 * 文档要求：
 * - 使用极深邃的海洋蓝（#001A33 或 bg-slate-950）而非纯黑
 * - 顶部居中 Logo
 * - 中部四列导航链接
 * - 底部法律声明和语言切换器
 */
export async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className="bg-slate-950 text-white">
      {/* 顶部 Logo 区域 */}
      <div className="py-16 md:py-20 flex flex-col items-center border-b border-white/10">
        {/* 四季树形 Logo */}
        <div className="w-10 h-14 mb-4">
          <svg viewBox="0 0 32 48" fill="none" className="w-full h-full">
            <line x1="16" y1="48" x2="16" y2="14" stroke="white" strokeWidth="0.8"/>
            <path d="M16 2 L9 13 L16 9 L23 13 Z" fill="white"/>
            <path d="M16 12 L5 27 L16 20 L27 27 Z" fill="white"/>
            <path d="M16 24 L1 44 L16 34 L31 44 Z" fill="white"/>
          </svg>
        </div>
        <span className="text-lg tracking-widest" style={{ fontFamily: 'var(--font-serif)' }}>
          MEILI RESORT
        </span>
      </div>

      {/* 中部导航链接 - 四列 */}
      <div className="py-12 md:py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* 简介 */}
          <div>
            <h4 className="text-white text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              {t('about')}
            </h4>
            <ul className="space-y-3">
              {['aboutHotel', 'careers'].map((key) => (
                <li key={key}>
                  <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 预订 */}
          <div>
            <h4 className="text-white text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              {t('reservations')}
            </h4>
            <ul className="space-y-3">
              {['findReservation', 'requestInvoice', 'contactUs', 'meetings'].map((key) => (
                <li key={key}>
                  <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 新闻 */}
          <div>
            <h4 className="text-white text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              {t('press')}
            </h4>
            <ul className="space-y-3">
              {['news', 'blog'].map((key) => (
                <li key={key}>
                  <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 更多体验 */}
          <div>
            <h4 className="text-white text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              {t('discover')}
            </h4>
            <ul className="space-y-3">
              {['yacht', 'helicopter', 'experiences', 'giftCard'].map((key) => (
                <li key={key}>
                  <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 底部法律声明 */}
      <div className="border-t border-white/10 py-6 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* 左侧：法律链接 */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 text-[10px] text-white/40">
            <Link href="#" className="hover:text-white/70 transition-colors">{t('legal')}</Link>
            <span>·</span>
            <Link href="#" className="hover:text-white/70 transition-colors">{t('privacy')}</Link>
            <span>·</span>
            <Link href="#" className="hover:text-white/70 transition-colors">{t('cookies')}</Link>
            <span>·</span>
            <span>{t('icp')}</span>
          </div>

          {/* 右侧：语言切换器 */}
          <div className="flex items-center gap-2 text-[11px] text-white/50">
            <span>简体中文</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
