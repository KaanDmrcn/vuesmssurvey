import Vue from 'vue'
import VueRouter from 'vue-router'
import Survey from '../components/Survey.vue'
import People from '../components/People.vue'
import Answer from '../components/Answer.vue'
import Smssurvey from '../components/Smssurvey.vue'
import Details from '../components/Details.vue'
import Peopledetail from '../components/Details/Peopledetail.vue'
import Answerdetail from '../components/Details/Answerdetail.vue'
import Surveydetail from '../components/Details/Surveydetail.vue'
import SurveyScreen from '../components/SurveyScreen/SurveyScreen.vue'
import SsSurvey from '../components/SurveyScreen/SsSurvey.vue'
import SsAnswer from '../components/SurveyScreen/SsAnswer.vue'

Vue.use(VueRouter)

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
    path: '/Details',
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
    path: '/SurveyScreen/SurveyScreen',
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
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
