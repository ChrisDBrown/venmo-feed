import Vue from 'vue';
import VueMoment from 'vue-moment';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.use(VueMoment);
