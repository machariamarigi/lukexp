import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ShowThread from '@/components/ShowThread';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/thread/:id',
      name: 'ShowThread',
      component: ShowThread,
      props: true
    }
  ],
  mode: 'history'
});
