import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'find',
        component: () => import('@/views/Find')
      },
      {
        path: 'news',
        component: () => import('@/views/News')
      },
      {
        path: 'my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/favorite',
    component: () => import('@/views/Favorite')
  },
  {
    path: '/favorite/detail',
    name: 'detail',
    component: () => import('@/views/Details')
  },
  {
    path: '/rented',
    component: () => import('@/views/Rented')
  },
  {
    path: '/rented/detail',
    name: 'detail',
    component: () => import('@/views/Details')
  }

]

const router = new VueRouter({
  routes
})

export default router
