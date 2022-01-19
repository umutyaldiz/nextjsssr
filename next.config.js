const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://umutyaldiz.com/cdn' : '',  //CDN example,
  env: {
    DefaultSeo: {
      title: 'Sitename',
      description: 'Site default seo'
    },
  }
}
