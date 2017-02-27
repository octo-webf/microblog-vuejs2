import Vue from 'vue';
import Router from 'vue-router';
import About from 'components/About';
import Messages from 'components/Messages';
import page404 from 'components/page404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Messages',
      component: Messages,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: page404,
    },
  ],
});
