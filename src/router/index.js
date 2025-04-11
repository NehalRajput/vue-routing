import { createRouter , createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
//import Brazil from '../views/Brazil.vue'

/*
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/brazil',
    name: 'Brazil',
    component: Brazil
  },
  {
    path: '/Hawaii',
    name: 'Hawaii',
    component: Hawaii
  },
  {
    path: '/jamaico',
    name: 'Jamaica',
    component: Jamaica
  },
  {
    path: '/panama',
    name: 'Panama',
    component: Panama
  },
]*/

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/destination/:id/:slug', name: 'destination.show', component: ()=>import('@/views/DestinationShow.vue')}


]

const router = createRouter({
  history: createWebHistory(),
  routes,
  //linkActiveClass:'vue-school-active-link',
})

export default router

