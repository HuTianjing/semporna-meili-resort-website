import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const experiences = [
  {
    key: 'culture',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    position: 'left',
  },
  {
    key: 'wellness',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    position: 'right',
  },
  {
    key: 'diving',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=1200&auto=format&fit=crop',
    position: 'left',
  },
];

export async function ExperienceSection() {
  const t = await getTranslations('Experience');

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题区 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* 体验项目 */}
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <div 
              key={exp.key} 
              className={`flex flex-col ${exp.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              {/* 图片 */}
              <div className="w-full md:w-3/5 relative aspect-[16/10] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={t(`${exp.key}.title`)}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 文字内容 */}
              <div className="w-full md:w-2/5 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-neutral-900">
                  {t(`${exp.key}.title`)}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t(`${exp.key}.description`)}
                </p>
                <a 
                  href={`#${exp.key}`}
                  className="inline-block text-sm tracking-wider text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
                >
                  {t('learnMore')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
