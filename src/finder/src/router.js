import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue'),
    },
    {
        path: '/tree/:id',
        name: 'Tree',
        props: true,
        component: () => import(/* webpackChunkName: "Tree" */ './views/Tree.vue'),
    },
    {
        path: '/result',
        name: 'Result',
        component: () => import(/* webpackChunkName: "Result" */ './views/Result.vue'),
    },
    {
        path: '*',
        redirect: { name: 'Home' },
    },
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes,
});

router.beforeEach((to, from, next) => {
    if (window.innerWidth > 1024) {
        next()
    }
    const scroll = document.getElementById('scroll');
    if (scroll === null) {
        next();
    }
    const vertical_position = scroll.getBoundingClientRect().top + window.scrollY - 60;
    window.scroll({
        top: vertical_position,
        behavior: 'smooth',
    });
    next();
});

export default router;
