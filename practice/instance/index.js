import Vue from 'vue'

const app = new Vue({

  template: '<div ref="test">{{text}}</div>',
  data: {
    text: 0
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
  // app.$options.data.text += 1 This is not effective.
  // app.$data.text += 10 This is effective
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer) // 服务端渲染需要

// 跟踪函数 放在app定义里面也可以
// 最好放在定义里，否则应该设置好销毁方法
// 注销方法 $watchh会返回一个注销函数，利用其即可
const unWatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText} : ${oldText}`)
})
setTimeout(() => {
  unWatch()
}, 2000)
