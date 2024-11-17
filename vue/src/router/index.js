import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HOME.vue'
import HelloWorld from '../components/HelloWorld.vue'
import NotFound from '../error/404.vue';
import SpringConnect from '@/components/SpringConnect.vue';
import Dashboard from '@/components/Dashboard/Dashboard.vue';

const routes = [
  { path: '/', redirect: '/home'}, 
  { 
    path: '/home', 
    name: 'Home', 
    component: Home },
  { 
    path: '/HelloWorld', 
    name: 'HelloWorld', 
    component: HelloWorld },
  { 
    path: '/helloSpring', 
    name: 'helloSpring', 
    component: SpringConnect },
  { 
    path: '/Dashboard', 
    name: 'Dashboard', 
    component: Dashboard },


  
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
