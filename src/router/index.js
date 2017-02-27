import Vue from 'vue';
import Router from 'vue-router';
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
      path: '*',
      name: 'PageNotFound',
      component: page404,
    },
  ],
});
