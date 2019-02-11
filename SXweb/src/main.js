import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import iView from 'iview'
import sx from './components/SX'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {path: '/', component: sx}
  ]
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
