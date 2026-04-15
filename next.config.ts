import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// 将 i18n 注入路由配置核心
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
