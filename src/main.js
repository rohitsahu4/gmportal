// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import * as Vuetify from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import '../node_modules/vuetify/dist/vuetify.min.css'
/* eslint-disable */
import { store }  from './store'
Vue.use(Vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDkyNTGxE25OKiAkEEeMQzy5P-andW7yQk',
      authDomain: 'gmportal-b4054.firebaseapp.com',
      databaseURL: 'https://gmportal-b4054.firebaseio.com',
      projectId: 'gmportal-b4054',
      storageBucket: 'gmportal-b4054.appspot.com',
      messagingSenderId: '238141181023'
    })
  }
})
