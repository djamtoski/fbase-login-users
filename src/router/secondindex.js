import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Home from '../components/home';
import Users from '../components/users';

Vue.use(Router);

const router = new Router({
    routes : [
        {
            path : '/login',
            name : 'Login',
            component : Login,
        },
        {
            path : '/users',
            name : 'Users',
            component : Users,
        },

        {
            path : '/',
            name : 'Home',
            component : Home,
            }
    ],
    mode : 'history'
});

    router.beforeEach((to , from , next) => {
      if (false) {
          next();
      }
      else {
          next('/login');
      }
  })
export default router;