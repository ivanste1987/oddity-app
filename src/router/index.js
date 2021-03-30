import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLandingPage from '../views/TheLandingPage.vue'
import SingleFact from '../components/SingleFact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TheLandingPage',
    component: TheLandingPage
  },
  {
    path: '/SingleFact/:id',
    name: 'SingleFact',
    component: SingleFact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
