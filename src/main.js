import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Survey from './components/Survey'
import {BootstrapVue} from 'bootstrap-vue'
import Navbar from './components/Navbar'
import People from './components/People'
import Answer from './components/Answer'


Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('survey-component', Survey);
Vue.component('navbar-component', Navbar);
Vue.component('people-component', People);
Vue.component('answer-component', Answer);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
