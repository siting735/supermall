import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const User = () => import('../views/user/User')

Vue.use(VueRouter)

 const routes = [
  {
  	path:'',
  	redirect:'/home'
  },
  {
  	path:'/home',
  	component:Home
  },
  {
  	path:'/category',
  	component:Category
  },
  {
  	path:'/cart',
  	component:Cart
  },
  {
  	path:'/profile',
  	component:Profile
  },
  {
  	path:'/user',
  	component:User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
