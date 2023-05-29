import {createRouter, createWebHistory} from "vue-router";

const  router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes:[
    // dashboard
    {
        path: "/",
        name: "Dashboard",
        component: import("../view/Dashboard.vue")
    },
    // users
    {
        path: "/users",
        name: "users",
        component: import("../view/users/Users.vue")
    },

]
})

export default router;