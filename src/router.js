import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Authentication/Login.vue";
import RegisterForm from "./components/Authentication/RegisterForm.vue";
import HomePage from "./components/layout/HomePage.vue";
import BlogPage from "./components/layout/page/BlogPage.vue";
import MyListBlogHome from "./components/layout/page/BlogList.vue";
import BlogInfo from './components/layout/page/BlogInfo.vue'



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
        children: [
            {
                path : 'myblog',
                name : 'page-my-blog',
                component : MyListBlogHome,
            },
            {
              path : 'blog-info/:id',
              name :'blog-info',
              component : BlogInfo,
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
        component : BlogInfo
    }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  beforeResolve: (to, from, next) => {
    if (to.matched.length === 0) {
      next('/login');
    } else {
      next("/"); 
    }
  }
});

export default router;