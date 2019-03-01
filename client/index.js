import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'
import createRouter from './config/router'

// 挂载Router插件
Vue.use(VueRouter)

const router = createRouter()

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('before each route invoked')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolved')
  next()
})

router.afterEach((to, from) => {
  console.log('after resoloved')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
