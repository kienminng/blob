import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Authentication/Login.vue";
import RegisterForm from "./components/Authentication/RegisterForm.vue";
// import HomePage from "./components/layout/HomePage.vue"
import HomePage from "./components/layout/HomePage.vue";


const routes =  [
    {
        path : '/login',
        component : Login
    },
    {
        path : '/register',
        component: RegisterForm
    },
    {
        path:'/',
        component : HomePage
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;