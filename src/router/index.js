import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import ShowThreadPage from '@/pages/ShowThreadPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/thread/:id',
      name: 'ShowThread',
      component: ShowThreadPage,
      props: true
    }
  ],
  mode: 'history'
});
