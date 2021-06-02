module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'ocmmon': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',

      }
    }
  }
}