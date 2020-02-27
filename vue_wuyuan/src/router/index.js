import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import userIndex from '@/views/user/index'
import register from '@/views/register'
import wuyuan from '@/views/user/wuyuan'
import adminIndex from '@/views/admin/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/index',
      name: 'userIndex',
      component: userIndex
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/user/index/wuyuan',
      name: 'wuyuan',
      component: wuyuan
    },
    {
      path: '/admin/index',
      name: 'adminIndex',
      component: adminIndex
    }
  ]
})
