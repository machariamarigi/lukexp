import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import ShowThreadPage from '@/pages/ShowThreadPage';
import ForumPage from '@/pages/ForumPage';
import ProfilePage from '@/pages/ProfilePage';
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
      path: '/category/:id',
      name: 'Category',
      component: CategoryPage,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: ForumPage,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ShowThread',
      component: ShowThreadPage,
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      component: ProfilePage,
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
