import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import TaskTimer from '../views/TaskTimer.vue'
import TaskTimerInfo from '../views/TaskTimerInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/timer',
    name: 'Timer',
    component: TaskTimer
  },
  {
    path: '/timer/:id',
    component: TaskTimerInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
