import { getTranslations } from 'next-intl/server';

/**
 * IntroSection - 酒店简介版块
 * 
 * 根据文档要求：
 * - 大面积留白，极简文字排版
 * - 视差遮盖效果：向下滚动时此区块缓慢向上滑动，覆盖首屏底部
 */
export async function IntroSection() {
  const t = await getTranslations('Intro');

  return (
    <section className="relative bg-white z-10">
      {/* 主内容区域 - 大量留白 */}
      <div className="py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          {/* 小标签 */}
          <p className="text-black/40 text-[11px] tracking-[0.3em] uppercase mb-6 font-light">
            {t('tagline')}
          </p>
          
          {/* 主描述文字 - 优雅的衬线体 */}
          <p 
            className="text-black/80 text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('description')}
          </p>

          {/* 装饰分隔线 */}
          <div className="mt-12 flex justify-center">
            <div className="w-12 h-[1px] bg-black/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
