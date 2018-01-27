import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Banner from '@/components/Banner'
import QueryDetail from '@/pages/QueryDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      children: [
        {
          path: 'Banner',
          name: 'Banner',
          component: Banner
        }
      ]
    },
    {
      path: '/QueryDetail',
      name: 'QueryDetail',
      component: QueryDetail
    }
  ]
})
