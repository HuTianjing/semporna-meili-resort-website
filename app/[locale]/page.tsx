import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="w-full flex-grow relative">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 pointer-events-none z-10" />
        <div className="relative z-20 flex flex-col items-center gap-6 mt-16 text-foreground">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif max-w-5xl leading-tight tracking-wide drop-shadow-xl text-white">
            <span className="block mb-2" dangerouslySetInnerHTML={{ __html: t('title') }} />
            <span className="text-primary font-light text-2xl md:text-4xl italic mt-6 block">
              {t('subtitle')}
            </span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base font-text max-w-2xl mx-auto mt-6 leading-relaxed">
            {t('description')}
          </p>
          <button className="mt-12 px-10 py-4 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-[0.4s] tracking-widest text-sm uppercase">
            {t('exploreBtn')}
          </button>
        </div>
      </section>
    </main>
  );
}
