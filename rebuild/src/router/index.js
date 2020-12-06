import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home=()=>import('@/views/Home/Home')
const Login=()=>import('@/views/Login/Login')
const routes = [
  {
    path:'/',
    redirect:'/home'
},
{
  path:'/home',
  component:Home
},{
  path:'/login',
  component:Login
}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path==="/login") return next()
//   const token=window.sessionStorage.getItem("token")
//   if(!token){
//     next('/login')
//   }
//   next()
// })

export default router
