import Vue from 'vue'
import VueRouter from 'vue-router'
import Topics from '../views/Topics.vue'
import Favourites from '../views/Favourites.vue'
import Reminders from '../views/Reminders.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Topics',
    component: Topics
  },

  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites
  },

  {
    path: '/reminders',
    name: 'Reminders',
    component: Reminders
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
