import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history'
    // 设置默认跳转路由的基本路径 代替默认的# 非强制 原来的路径一样可用
    // base: '/base/',

    // 生成跳转的href
    // linkActiveClass: ''
    // linkExactActiveClass: ''
  })
}
