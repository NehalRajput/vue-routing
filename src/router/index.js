
import { createRouter , createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/destination/:id/:experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) })
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) })
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes,
  //linkActiveClass:'vue-school-active-link',
})

export default router
