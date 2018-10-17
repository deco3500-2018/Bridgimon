// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Google Map NPM
Vue.prototype.$googleMapsClient = require('@google/maps').createClient({
  key: "AIzaSyDlnKAUJTtWd4jd2cPdmc_ODaUV5oA2p-k",
  Promise: Promise
});