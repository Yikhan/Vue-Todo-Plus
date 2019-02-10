import Vue from 'vue'

const app = new Vue({

  template: '<div ref="test">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

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
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

// 事件触发+监听
app.$on('test', (a, b) => {
  console.log(`test emitted: ${a} ${b}`)
})
// 如果只要触发一次
app.$once('test', (a, b) => {
  console.log(`test emitted: ${a} ${b}`)
})

// 触发事件 可以携带任意数量的参数
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// 强制重新渲染
// 如果变量在data里面初始化为空或不存在，如上面的obj.a
// 那么即便更新了这些变量，页面也不会响应，这时需要forceUpdate
// 不建议使用，会降低性能
// 可以使用$set，也可以在初始化时赋予一个默认值来解决
let i = 0
setInterval(() => {
  i++
  // app.text += 1
  // app.obj.a = i
  app.$set(app.obj, 'a', i)
  // 对应$set可以使用$delete
  // 要注意的是如果直接删除变量可能导致内存溢出，因为响应式效果还在
  // 所以建议使用delete

  // app.$forceUpdate()
  // app.$options.data.text += 1 This is not effective.
  // app.$data.text += 10 This is effective
}, 1000)

// Vue的更新是异步的，所以想要即时更新变化可以考虑使用$nextTick
// 比如如果 app.text += 1 重复两次，页面只会直接更新到2
