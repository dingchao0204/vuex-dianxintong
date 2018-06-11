import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/index.js'
import Home from '../components/Home'
import Account from '../components/AccountList/account'
import Mine from '../components/AccountList/mine'
import ChangeName from '../components/AccountList/changeName'
import Transfer from '../components/AccountList/transfer'
import Preserve from '../components/AccountList/preserve'
import Other from '../components/AccountList/other'
import Tree from '../components/AccountList/tree'
import ChildTree from '../components/AccountList/childTree'

Vue.use(VueRouter)

let router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter(to,from,next){
        next()
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          name:'account',
          path:'account',
          component:Account
        },
        {
          name:'mine',
          path:'mine',
          component:Mine
        },
        {
          name:'changeName',
          path:'changeName',
          component:ChangeName
        },
        {
          name:'transfer',
          path:'transfer',
          component:Transfer
        },
        {
          name:'preserve',
          path:'preserve',
          component:Preserve
        },
        {
          name:'other',
          path:'other',
          component:Other
        },
        {
          name:'tree',
          path:'tree',
          component:Tree,
          children:[
            {
              name:'childTree',
              path:'/tree/:id',
              component:ChildTree
            }
          ]
        }
        
      ]
    } 
      
]
})
//全局路由钩子
router.beforeEach((to,from,next)=>{
  if(to.name === 'Login'){
    next()
  }else{
    let islogin = sessionStorage.getItem('islogin')
    if(islogin){
      next()
    }else{
      next('/')
    }
  }
})

export default router