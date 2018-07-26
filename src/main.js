import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import InViewportDirective from 'vue-in-viewport-directive';
import store from './store';
import App from './App.vue';

Vue.use(VueScrollTo);

Vue.directive('in-viewport', InViewportDirective);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
