import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    user: null,
    username: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    SignUserup ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          let nuser = {
            id: user.uid
          }
          commit('setUser', nuser)
        }

      )
    }

  },
  getters: {

  }

})
