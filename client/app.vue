<template>
    <div id="app">
        <div id="cover"></div>
        <vHeader></vHeader>
        <!--<vTodo></vTodo>-->
        <p>{{fullName}} {{counter}}</p>
        <router-link to="/app">app</router-link>
        <router-link :to="{name: 'login'}">login</router-link>
        <transition name="fade">
          <router-view/>
        </transition>
        <vFooter></vFooter>
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'

import vHeader from './views/layout/header.vue'
import vFooter from './views/layout/footer.jsx'
// import vTodo from './views/todo/todo.vue'

export default {
  components: {
    vHeader,
    vFooter
    // vTodo
  },
  mounted () {
    console.log(this.$store)
    // 触发mutations
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCounter', i++)
    // }, 1000)

    // 触发actions
    // this.$store.dispatch('updateCounterAsync',
    // { num: 5,
    //   time: 2000
    // })'
    // 使用map之后的简便写法
    this.updateCounterAsync({
      num: 10,
      time: 2000
    })
  },
  computed: {
    // ...mapState(['count']), //可以直接用数组解析
    // 如果要改变state变量名字则用对象
    ...mapState({
      counter: (state) => state.count
    }),

    // count() {
    //   return this.$store.state.count
    // },

    ...mapGetters(['fullName'])
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    ...mapActions(['updateCounterAsync']),
    ...mapMutations(['updateCounter'])
  }
}
</script>

<style lang="stylus" scoped>
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #999
        opacity .5
        z-index -1
</style>
