import Vue from 'vue';
import App from './App.vue';
import VueMoment from 'vue-moment';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.use(VueMoment);
