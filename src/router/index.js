import Vue from 'vue'
import Router from 'vue-router'
import signup from '@/components/User/signup'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Signup',
      name: 'Sign Up',
      component: signup
    }
  ],
  mode: 'history'
})
