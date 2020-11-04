import { createRouter, createWebHashHistory } from 'vue-router'

const CesiumContainer=()=>import('@/components/CesiumBox/CesiumContainer')
const routes = [
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
