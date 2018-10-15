import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EventList from '@/components/EventList'
import EventPage from '@/components/EventPage'
import EventInfo from '@/components/EventInfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/EventList',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/EventPage',
      name: 'EventPage',
      component: EventPage
    },
    {
      path: '/EventInfo',
      name: 'EventInfo',
      component: EventInfo
    }
  ]
})
