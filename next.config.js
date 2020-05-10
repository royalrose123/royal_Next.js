const path = require('path')

module.exports = {
  webpack: (config, { buildId, dev }) => {
    const newConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../src'),
        },
      },
    }

    return newConfig
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}
