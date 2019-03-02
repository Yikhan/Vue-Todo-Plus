import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

// 挂载Router插件
Vue.use(VueRouter)
// vuex需要在实例化之前就注册插件
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

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

// Vue是树形结构 比如如果把store放在todo里面 则只有todo的子组件才能获得store
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
