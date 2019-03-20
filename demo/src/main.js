// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from './axios'
Vue.prototype.$axios=Axios;
Vue.config.productionTip = false
import '../common/style/reset.css'
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  preLoad:1.3,
  error:require('@/assets/logo.png'),//错误时显示的图片
  loading:reqire('@/assets/logo.png'),
  attemp:1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
