import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import LoginPage from '../components/LoginPage.vue'
import HomePage from '../components/HomePage.vue'
import InformationView from '../views/InformationView.vue'
import SingleInfo from '../views/singleInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/information-view',
      name: 'InformationView',
      component: InformationView
    },
    {
      path: '/info/:id',
      name: 'SingleInfo',
      component: SingleInfo
    }
  ]
})

export default router
