/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // 필요없는 공백이나, 주석을 삭제하여 용량을 줄이고, 해당 스크립트를 해석할 수 없도록 암호화 하는 역할
  sassOptions: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      prependData: `@import "styles/global.module.scss"; @import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
    },
  },
};

module.exports = nextConfig;
