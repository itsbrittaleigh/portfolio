import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import store from './store';

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
