import { createRouter, createWebHashHistory } from 'vue-router'

const CesiumContainer=()=>import('@/components/CesiumBox/CesiumContainer')
const Home=()=>import('@/views/Home/Home')
const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
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
