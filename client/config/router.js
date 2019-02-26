import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // 设置默认跳转路由的基本路径 代替默认的# 非强制 原来的路径一样可用
    // base: '/base/',

    // 生成跳转的href
    // linkActiveClass: ''
    // linkExactActiveClass: ''

    // 页面跳转滚动 上次页面滚动到某个地方后 下次回到该页面自动转到该位置
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x:0, y:0} // 回到页面最左上
      }
    },

    // 解析链接?后面的参数 vue有默认方法 这里可以自定义
    // parseQuery (query) {

    // },

    // // 把obj转成字符串
    // stringifyQuery () {

    // },

    // 如果浏览器不支持history模式则自动回到基本#哈希模式
    fallback: true
  })
}
