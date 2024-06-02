import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Authentication/Login.vue";
import RegisterForm from "./components/Authentication/RegisterForm.vue";
import HomePage from "./components/layout/HomePage.vue";
import BlogPage from "./components/layout/BlogPage.vue";
import MyListBlogHome from "./components/layout/MyListBlogHome.vue";


const routes =  [
    {
        path : '/login',
        name : 'login',
        component : Login
    },
    {
        path : '/register',
        name : 'register',
        component: RegisterForm
    },
    {
        path:'/page',
        name : 'page',
        component : BlogPage,
        Children: [
            {
                path : 'myblog',
                name : 'page-my-blog',
                component : MyListBlogHome,
            }
        ]
    },
    {
        path : '/',
        name : 'home',
        component : HomePage
    },
    {
        path : '/myBlog/:id',
        name : 'my-blog',
        component : MyListBlogHome
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;