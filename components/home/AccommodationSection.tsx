import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const accommodations = [
  {
    key: 'beachfront',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'overwater',
    image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
  },
];

export async function AccommodationSection() {
  const t = await getTranslations('Accommodation');

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题区 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
            {t('title')}
          </h2>
        </div>

        {/* 住宿卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((item) => (
            <div key={item.key} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={t(`${item.key}.title`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-serif text-neutral-900 mb-2">
                {t(`${item.key}.title`)}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${item.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* 查看全部链接 */}
        <div className="text-center mt-12">
          <a href="#villas" className="text-sm tracking-wider text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors">
            {t('viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}
