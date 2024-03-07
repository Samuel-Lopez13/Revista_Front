import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/Registro',
            name: 'Registro',
            component: () => import('../views/Registro.vue')
        },
        {
            path: '/Home',
            name: 'Home',
            component: () => import('../views/Home.vue')
        }
    ]
})

export default router
