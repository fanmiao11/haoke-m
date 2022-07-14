import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/my',
    component: () => import('@/views/My')
  }

]

const router = new VueRouter({
  routes
})

export default router
