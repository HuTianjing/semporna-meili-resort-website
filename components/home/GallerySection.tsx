import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=600&auto=format&fit=crop',
    alt: 'Traditional boat',
  },
  {
    src: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=600&auto=format&fit=crop',
    alt: 'Resort aerial view',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop',
    alt: 'Pool view',
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop',
    alt: 'Beach view',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop',
    alt: 'Luxury room',
  },
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
    alt: 'Resort evening',
  },
];

export async function GallerySection() {
  const t = await getTranslations('Gallery');

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题区 */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">
            {t('title')}
          </h2>
          <a href="#gallery" className="text-sm tracking-wider text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors">
            {t('viewAll')}
          </a>
        </div>

        {/* 图片网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden cursor-pointer group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
