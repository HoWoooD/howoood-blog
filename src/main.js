import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./Pages/Home')
    },
    {
      path: '/post/:id',
      component: () => import('./Pages/Post'),
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
