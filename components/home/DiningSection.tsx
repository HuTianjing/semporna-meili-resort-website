import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export async function DiningSection() {
  const t = await getTranslations('Dining');

  return (
    <section className="relative min-h-screen flex items-center">
      {/* 背景图 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop"
          alt="Ocean View"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* 左侧文字 */}
          <div className="text-white space-y-6">
            <p className="text-sm tracking-[0.3em] uppercase text-white/80">
              {t('tagline')}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              {t('title')}
            </h2>
            <p className="text-white/80 leading-relaxed max-w-md">
              {t('description')}
            </p>
          </div>

          {/* 右侧卡片 */}
          <div className="bg-white p-8 md:p-12">
            <p className="text-neutral-500 text-sm tracking-[0.2em] uppercase mb-6">
              {t('destination')}
            </p>
            <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
              ATSOHADORA
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-8">
              {t('atsohadora')}
            </p>
            
            {/* 餐厅卡片网格 */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 border border-neutral-300 rounded-full flex items-center justify-center">
                  <span className="text-xs text-neutral-600">1</span>
                </div>
                <p className="text-xs text-neutral-600">{t('restaurant1')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 border border-neutral-300 rounded-full flex items-center justify-center">
                  <span className="text-xs text-neutral-600">2</span>
                </div>
                <p className="text-xs text-neutral-600">{t('restaurant2')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 border border-neutral-300 rounded-full flex items-center justify-center">
                  <span className="text-xs text-neutral-600">3</span>
                </div>
                <p className="text-xs text-neutral-600">{t('restaurant3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
