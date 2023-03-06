import { createRouter, createWebHistory } from "vue-router"

import HomeItem from './components/HomeItem.vue'




const routes = [
    { path: '/', component: HomeItem },
    { path: '/profile/edit', component: HomeItem },
    
  
  ]


  const router = createRouter({
   
    history: createWebHistory(),
    routes,
  })


  export default router