module.exports = {
  lintOnSave: false,
  // 基本路径
  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  publicPath: './',
  // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: false,
  // 输出文件目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。    资源放的目录
  assetsDir: './mobile_static',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径    index的路径和名字
  indexPath: './mobile_index.html',
  // webpack-dev-server 相关配置
  // 跨域配置代理
  devServer: {
    // proxy: 'http://localhost:8000',
    // proxy: {
    //   '/api': {
    //     target: '接口地址域名',
    //     // 是否跨域
    //     changeOrigin: true,
    //     ws: true,
    //     // 路径重写~
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    open: true
  }
}
