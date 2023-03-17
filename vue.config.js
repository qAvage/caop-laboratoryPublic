const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    sourceMap: true
  }
  // chainWebpack: config => {
  //   config.optimization.splitChunks({
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         enforce: true,
  //         chunks: 'all',
  //         maxSize: 5000
  //       }
  //     }
  //   })
  // }
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // изменение конфигурации для production...
  //   } else {
  //     // изменения для разработки...
  //   }
  // }
})
