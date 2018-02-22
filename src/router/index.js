import Vue from 'vue'
import Router from 'vue-router'
import Finance from '@/components/Finance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Finance',
      component: Finance
    }
  ]
})
