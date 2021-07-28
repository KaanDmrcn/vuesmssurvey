import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Survey from './components/Survey'
import {BootstrapVue} from 'bootstrap-vue'
import Navbar from './components/Navbar'
import People from './components/People'
import Answer from './components/Answer'
import Smssurvey from './components/Smssurvey'
import Details from './components//Details/Details'
import Peopledetail from './components/Details/Peopledetail'
import Answerdetail from './components/Details/Answerdetail'
import Surveydetail from './components/Details/Surveydetail'
import SurveyScreen from './components/SurveyScreen/SurveyScreen'
import SsSurvey from './components/SurveyScreen/SsSurvey'
import SsAnswer from './components/SurveyScreen/SsAnswer'
import SsPeople from './components/SurveyScreen/SsPeople'
import FinalScreen from './components/SurveyScreen/FinalScreen'


Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('survey-component', Survey);
Vue.component('navbar-component', Navbar);
Vue.component('people-component', People);
Vue.component('answer-component', Answer);
Vue.component('smssurvey-component', Smssurvey);
Vue.component('details-component', Details);
Vue.component('peopledetail-component', Peopledetail);
Vue.component('answerdetail-component', Answerdetail);
Vue.component('surveydetail-component', Surveydetail);
Vue.component('surveyscreen-component', SurveyScreen);
Vue.component('sssurvey-component', SsSurvey);
Vue.component('ssanswer-component', SsAnswer);
Vue.component('sspeople-component', SsPeople);
Vue.component('finalscreen-component', FinalScreen);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
