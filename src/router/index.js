import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
