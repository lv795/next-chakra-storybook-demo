/** @type {import('next').NextConfig} */
const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

const nextConfig = {
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  reactStrictMode: true,
  webpack(config) {
    // 配置路径别名
    config.resolve.alias["@"] = toPath("src");
    return config;
  },
}

module.exports = nextConfig
