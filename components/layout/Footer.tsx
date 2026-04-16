import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className="bg-white border-t border-neutral-200">
      {/* 主内容 */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo和品牌 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-12 flex items-center justify-center">
                <svg viewBox="0 0 40 56" fill="none" className="w-full h-full">
                  <path d="M20 0L20 56" stroke="#1a1a1a" strokeWidth="1"/>
                  <path d="M20 8L8 20L20 14L32 20L20 8Z" fill="#1a1a1a"/>
                  <path d="M20 18L6 32L20 24L34 32L20 18Z" fill="#1a1a1a"/>
                  <path d="M20 28L4 44L20 34L36 44L20 28Z" fill="#1a1a1a"/>
                </svg>
              </div>
              <span className="text-lg font-serif text-neutral-900">FOUR SEASONS</span>
            </div>
          </div>

          {/* 导航链接 */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 tracking-wider uppercase">
              {t('explore')}
            </h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link href="#overview" className="hover:text-neutral-900 transition-colors">{t('overview')}</Link></li>
              <li><Link href="#villas" className="hover:text-neutral-900 transition-colors">{t('villas')}</Link></li>
              <li><Link href="#dining" className="hover:text-neutral-900 transition-colors">{t('dining')}</Link></li>
              <li><Link href="#experience" className="hover:text-neutral-900 transition-colors">{t('experience')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 tracking-wider uppercase">
              {t('contact')}
            </h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>{t('phone')}: +689 40 603 170</li>
              <li>{t('email')}: reservations@fourseasons.com</li>
              <li className="leading-relaxed">
                Motu Tehotu - BP 547<br/>
                98730, Bora Bora<br/>
                French Polynesia
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 tracking-wider uppercase">
              {t('followUs')}
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-900 transition-colors">
                <span className="text-xs text-neutral-600">FB</span>
              </a>
              <a href="#" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-900 transition-colors">
                <span className="text-xs text-neutral-600">IG</span>
              </a>
              <a href="#" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-900 transition-colors">
                <span className="text-xs text-neutral-600">TW</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权 */}
      <div className="border-t border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>{t('copyright')}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-neutral-900 transition-colors">{t('privacy')}</Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">{t('terms')}</Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">{t('cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
