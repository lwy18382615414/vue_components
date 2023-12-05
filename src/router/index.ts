import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Button',
        component: () => import("../views/Button.vue"),
    },
    {
        path: '/input',
        name: 'Input',
        component: () => import("../views/Input.vue"),
    },
    {
        path: '/form',
        name: 'Form',
        component: () => import("../views/Form.vue"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default  router;
