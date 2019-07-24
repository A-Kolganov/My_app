import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import About from '@/view/About'
import Skills from '@/view/Skills'
import Gallery from '@/view/Gallery'
import Contacts from '@/view/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    }

  ],
  mode: 'history'
})
