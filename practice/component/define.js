import Vue from 'vue'

// 定义组件 组件名定义时使用首字母大写的CamelCase 使用时用小写的dash格式
// Tips: 不使用new Vue形式初始化组件时, data要写成return的函数形式才能生效
// 这样可以保证使用多个一样的组件时彼此的数据是独立的
const component = {
  template:
  `<div>
    <input type="text" v-model.number.lazy="text">
  </div>
  `,
  data () {
    return {
      text: 123
    }
  }
}
// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  template: '<comp-one></comp-one>'
})
