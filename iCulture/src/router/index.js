import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EventList from '@/components/EventList'
import EventCover from '@/components/EventCover'
import EventInfo from '@/components/EventInfo'
import EventPage from '@/components/EventPage'
import LocalEvent from '@/components/LocalEvent'
import Promotion from '@/components/Promotion'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/EventList',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/EventCover',
      name: 'EventCover',
      component: EventCover
    },
    {
      path: '/EventInfo',
      name: 'EventInfo',
      props: true,
      component: EventInfo
    },
    {
      path: '/EventPage',
      name: 'EventPage',
      props: true,
      component: EventPage
    },

    {
      path: '/LocalEvent',
      name: 'LocalEvent',
      component: LocalEvent
    },
    {
      path: '/',
      name: 'Promotion',
      component: Promotion
    },
  ]
})
