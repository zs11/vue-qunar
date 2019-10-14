import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill';
import store from './store/index';
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
