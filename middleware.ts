import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 只在匹配这两类路由时激活 i18n
  // 跳开所有内部系统路由(_next) 及 静态文件 (.jpg, .mp4)
  matcher: [
    '/',
    '/(zh|en)/:path*'
  ]
};
