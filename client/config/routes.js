// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

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

    // 异步加载模块 节省开支
    component: () => import('../views/todo/todo.vue'),
    // 其他的变量放在meta里面
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
    component: () => import('../views/login/login.vue'),
    name: 'login'
  }
]
