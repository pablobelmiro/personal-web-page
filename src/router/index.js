// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa os componentes
import LoginPage from '@/views/Login.vue'
import HomePage from '@/views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/login', name: 'Login', component: LoginPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }else{
            return { top: 0 }
        }
    }
});


export default router
