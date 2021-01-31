import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/horaris',
        name: 'Horaris',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "AddPersonas" */ '../views/horaris.vue')
    }, {
        path: '/nosaltres',
        name: 'Nosaltres',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Tabla" */ '../views/nosaltres.vue')
    }, {
        path: '/afiliacio',
        name: 'Afiliació',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacto" */ '../views/afiliacio.vue')
    }, {
        path: '/localitzacio',
        name: 'Localització',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/localitzacio.vue')
    } //, {
    //  path: '/listaproyectos',
    //  name: 'ListaProyectos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //    import ( /* webpackChunkName: "ListaProyectos" */ '../views/ListaProyectos.vue')
    // }
]

const router = new VueRouter({
    mode: "history",
    base: '/vue_web/',
    routes
})

export default router