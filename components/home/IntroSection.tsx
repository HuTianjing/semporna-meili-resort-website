import { getTranslations } from 'next-intl/server';

export async function IntroSection() {
  const t = await getTranslations('Intro');

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 标题 */}
        <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase mb-4">
          {t('tagline')}
        </p>
        
        {/* 主描述 */}
        <p className="text-neutral-800 text-lg md:text-xl leading-relaxed font-light">
          {t('description')}
        </p>
      </div>
    </section>
  );
}
