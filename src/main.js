import Vue from 'vue';
import InViewportDirective from 'vue-in-viewport-directive';
import App from './App.vue';
import store from './store/index';
import router from './router';

Vue.component('project-overview', require('./components/ProjectOverview.vue').default);

Vue.directive('in-viewport', InViewportDirective);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
