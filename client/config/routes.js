import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app/start'
  },
  {
    path: '/app',
    redirect: '/app/start',
    name: 'app',
  },
  {
    path: '/app/:id',
    props: true, // 自动解析并传url参数给组件
    component: Todo,
    meta: {
      title: 'this is app',
      description: 'app page'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    },
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
]
