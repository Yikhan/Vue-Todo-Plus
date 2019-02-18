import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <table>
        <tr>Name: {{ name }}</tr>
        <tr>Name: {{ getName() }}</tr>
        <tr>FullName: {{ fullName }}</tr>
        <tr>Name: {{ number }}</tr>
        <tr>Obj: {{ obj.a }}</tr>
        <tr><input type="text" v-model="obj.a"></tr>
        <tr><input type="text" v-model="number"></tr>
        <tr>FirstName: <input type="text" v-model="firstName"></tr>
        <tr>LastName: <input type="text" v-model="lastName"></tr>
        </table>
    </div>
    `,
  data: {
    firstName: 'Jack',
    lastName: 'Morgon',
    fullName: '',
    number: 0,
    obj: {
      a: '123'
    }
  },
  // 切记不要在computed和watch中再次改变本来的变量 否则导致无限循环触发
  computed: {
    name () { // 使用时只引用函数名 和methods不一样
      // computed只会对依赖的变量变化做出反应
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    // 只要data有变化就会刷新调用methods 比computed消耗资源
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    // 如果要使用更多的属性按如下的写法展开
    firsName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true// 马上更新
    },
    // 修改对象内部的属性不会触发对象本身的watch
    // 想要触发的话要设置deep属性为true
    // 否则只有给对象整体赋值的时候才会触发
    // obj: {
    //   handler () {
    //     console.log('obj.a changed')
    //   },
    //   immediate: true,
    //   deep: true
    // }

    // deep的开销很大 因为要遍历对象的所有属性
    // 一种解决办法如下 用字符串的形式直接watch某一个属性
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
    }
  }
})
