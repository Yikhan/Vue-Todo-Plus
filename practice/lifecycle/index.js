import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{ text }}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this, 'beforeCreate')
  },
  created () {
    console.log(this, 'created')
  },
  beforeMount () {
    console.log(this, 'beforeMount')
  },
  mounted () {
    console.log(this, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  renderError (h, err) {
    // 只在开发环境使用
  },
  errorCaptured (h, err) {
    // production可使用，错误会向上冒泡，从自组件传递到父组件
  }
})
// Invoke update
setInterval(() => {
  app.text += 1
}, 1000)

// Invoke destroy
// setTimeout(() => {
//   app.$destroy()
// }, 2000)
