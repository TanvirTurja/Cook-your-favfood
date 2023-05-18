import { createRouter, createWebHistory } from "vue-router";


import Home from '../views/Home.vue';
import SpecificRecipe from '../views/SpecificRecipe.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/specific-recipe/:id',
    name: 'SpecificRecipe',
    component: SpecificRecipe
 
  },
 
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
});

export default router;
