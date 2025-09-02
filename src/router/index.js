import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import WorkView from '../views/WorkView.vue'
import LineLiffView from '../views/LineLiffView.vue'
import CharingStationView from '@/views/ChargingStationView.vue'
import CommandCenterDashboardView from '@/views/CommandCenterDashboardView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/work/lineLiff',
      name: 'work-lineLiff',
      component: LineLiffView,
    },
    {
      path: '/work/chargingStation',
      name: 'work-chargingStation',
      component: CharingStationView,
    },
    {
      path: '/work/CommandCenterDashboard',
      name: 'work-CommandCenterDashboard',
      component: CommandCenterDashboardView,
    },
  ],
})

export default router
