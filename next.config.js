module.exports = {
  env: {
    TEST: process.env.TEST,
    API_KEY: process.env.API_KEY,
    API_LOCAL_URL: process.env.API_LOCAL_URL,
    API_DEV_URL: process.env.API_DEV_URL,
    API_SIT_URL: process.env.API_SIT_URL,
    API_UAT_URL: process.env.API_UAT_URL,
    COOKIE: process.env.COOKIE,
    ENV_KEY: process.env.ENV_KEY,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}
