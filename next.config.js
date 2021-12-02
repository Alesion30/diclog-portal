const path = require('path')

module.exports = {
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}
