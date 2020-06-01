module.exports = {
  env: {
    TEST: process.env.TEST,
    API_KEY: process.env.API_KEY,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}
