import Vue from 'vue'
import VueRouter from 'vue-router'
import Survey from '../components/Survey.vue'
import People from '../components/People.vue'
import Answer from '../components/Answer.vue'
import Smssurvey from '../components/Smssurvey.vue'
import Details from '../components//Details/Details.vue'
import Peopledetail from '../components/Details/Peopledetail.vue'
import Answerdetail from '../components/Details/Answerdetail.vue'
import Surveydetail from '../components/Details/Surveydetail.vue'
import Statistic from '../components/Details/Statistic.vue'
import SurveyScreen from '../components/SurveyScreen/SurveyScreen.vue'
import SsSurvey from '../components/SurveyScreen/SsSurvey.vue'
import SsAnswer from '../components/SurveyScreen/SsAnswer.vue'
import SsPeople from '../components/SurveyScreen/SsPeople.vue'
import FinalScreen from '../components/SurveyScreen/FinalScreen.vue'
import Deneme from '../components/Details/Deneme.vue'
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
Vue.use(VueRouter)
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)
const routes = [
  {
    path: '/Survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/People',
    name: 'People',
    component: People
  },
  {
    path: '/Answer',
    name: 'Answer',
    component: Answer
  },
  {
    path: '/Smssurvey',
    name: 'Smssurvey',
    component: Smssurvey
  },
  {
    path: '/Details//Details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/Details/Peopledetail',
    name: 'Peopledetail',
    component: Peopledetail
  },
  {
    path: '/Details/Answerdetail',
    name: 'Answerdetail',
    component: Answerdetail
  },
  {
    path: '/Details/Surveydetail',
    name: 'Surveydetail',
    component: Surveydetail
  },
  {
    path: '/Details/Statistic',
    name: 'Statistic',
    component: Statistic
  },
  {
    path: '/Details/Deneme',
    name: 'Deneme',
    component: Deneme
  },
  {
    path: '/SurveyScreen/SurveyScreen/:id',
    name: 'SurveyScreen',
    component: SurveyScreen
  },
  {
    path: '/SurveyScreen/SsSurvey',
    name: 'SsSurvey',
    component: SsSurvey
  },
  {
    path: '/SurveyScreen/SsAnswer',
    name: 'SsAnswer',
    component: SsAnswer
  },
  {
    path: '/SurveyScreen/SsPeople',
    name: 'SsPeople',
    component: SsPeople
  },
  {
    path: '/SurveyScreen/FinalScreen/:smsSurveyId',
    name: 'FinalScreen',
    component: FinalScreen
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
