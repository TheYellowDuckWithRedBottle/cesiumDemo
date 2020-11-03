import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const CesiumContainer=()=>import('@/components/CesiumBox/CesiumContainer')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/cesium',
    component:CesiumContainer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
