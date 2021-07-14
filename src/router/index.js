import Vue from 'vue'
import VueRouter from 'vue-router'
import Survey from '../components/Survey.vue'
import People from '../components/People.vue'
import Answer from '../components/Answer.vue'
import Smssurvey from '../components/Smssurvey.vue'

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
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
