import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import ShowThreadPage from '@/pages/ShowThreadPage';
import NotFoundPage from '@/pages/NotFoundPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/thread/:id',
      name: 'ShowThread',
      component: ShowThreadPage,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundPage
    }
  ],
  mode: 'history'
});
