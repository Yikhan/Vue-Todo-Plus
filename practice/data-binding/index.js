import Vue from 'vue'

// 在template中无法调用这个变量
// var globalVar = 'global'

new Vue({
  el: '#root',
  template: `
  <div>
    <div>
      {{isActive ? 'active' : 'not active'}}
      {{arr.join(' ')}}
      {{Date.now()}}
    </div>
    <div v-bind:id='mycls' v-on:click='handleClick'>
      <p v-html='html'></p>
    </div>
    <div :class='{ active: !isActive }'>
      <p v-html='html'></p>
    </div>
    <div
      :class="[{active:isActive}]"
      :style="[styles, styles2]"
    >
      <p>{{getJoinedArr(arr)}}</p>
    </div>
  </div>
  `,
  data: {
    // template 不支持if或者var申明等语句
    // 也调用不了外面申明的全局变量 但是处于白名单之内的系统变量可以访问
    // 比如上面的Date.now()
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    mycls: 'main',
    styles: {
      color: 'red'
    },
    styles2: {
      fontWeight: 'bold',
      appearance: 'none'
    }
  },
  methods: {
    handleClick () {
      window.alert('clicked')
    },
    getJoinedArr () {
      return this.arr.join(' ')
    }
  },
  computed: {
    classNames () {

    }
  }
})
