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
            redirect: '/HomePage',
            component: () => import('../views/Home.vue'),
            children: [
                {
                    path: '/HomePage',
                    name: 'HomePage',
                    component: () => import('../views/HomePage.vue')
                },
                {
                    path: '/Articulos',
                    name: 'Articulos',
                    component: () => import('../views/Articulos.vue')
                },
                {
                    path: '/Contacto',
                    name: 'Contacto',
                    component: () => import('../views/Contacto.vue')
                },
                {
                    path: '/Perfil',
                    name: 'Perfil',
                    component: () => import('../views/Perfil.vue')
                }
            ]
        }
    ]
})

export default router
