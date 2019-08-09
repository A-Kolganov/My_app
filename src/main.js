// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import appHello from './view/HelloWorld.vue'
import navigation from '@/components/Navigation'
// import footer from './view/Footer.vue'
import headerApp from './view/header.vue'
import options from './components/Options.vue'
import optionsMenu from './components/Options-menu.vue'
import main from './view/main.vue'


Vue.config.productionTip = false

Vue.component('app-header', headerApp)
Vue.component('app-options', options)
Vue.component('app-options-menu', optionsMenu)
Vue.component('app-main', main)
// Vue.component('app-foot', footer)
// Vue.component('app-hello', appHello)
// // Vue.component('app-home', home)
Vue.component('app-nav', navigation)
// Vue.component('app-about', About)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
