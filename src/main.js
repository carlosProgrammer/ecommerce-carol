import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import './font/typography';


Vue.use(BootstrapVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
