
module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDev,
  
    //默认情况下会根据环境自动设置hotReload
    //hotReload: false 
  }
}