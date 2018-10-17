import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EventList from '@/components/EventList'
import EventPage from '@/components/EventPage'
import EventInfo from '@/components/EventInfo'
import RocalEvent from '@/components/RocalEvent'



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
    },
    {
      path: '/RocalEvent',
      name: 'RocalEvent',
      component: RocalEvent
    }
  ]
})
