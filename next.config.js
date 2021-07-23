// const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_stork: true,
})
module.exports = withNextra()
