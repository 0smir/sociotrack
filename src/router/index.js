import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  },{
    path:'/friends',
    name: 'AddFriends',
    component: () => import(/* webpackChunkName: "friends" */ '../views/AddFriends.vue')
  },{
    path:'/feed',
    name: 'SocialFeed',
    component: () => import(/* webpackChunkName: "feed" */ '../views/SocialFeed.vue')
  },{
    path:'/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
  },{
    path:'/terms',
    name: 'Terms',
    component: () => import(/* webpackChunkName: "terms" */ '../views/Terms.vue')
  },{
    path:'/report',
    name: 'Report',
    component: () => import(/* webpackChunkName: "report" */ '../views/Report.vue')
  },{
    path:'/privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
