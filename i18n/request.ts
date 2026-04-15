import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // 验证当前被请求的 locale 是否合法
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // 通过动态导入对应语言的字典
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
