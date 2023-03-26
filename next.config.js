const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'srijan' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}
