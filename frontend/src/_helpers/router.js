import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import RegisterProject from "../views/RegisterProject.vue";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/login', name: 'Login', component: Login},
    {path: '/registerProject', name: 'Register Project', component: RegisterProject},
    {path: '*', redirect: '/'}
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  console.log(`to.path: ${to.path},authRequired: ${authRequired}, !loggedIn: ${!loggedIn}`);

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});
