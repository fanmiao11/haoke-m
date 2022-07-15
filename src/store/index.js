import Vue from 'vue'
import Vuex from 'vuex'
// import storage from '@/utils/storage'
import { getToken, setToken, removeToken } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user: storage.get('HAOKE_TOKEN') ||{}
    user: getToken() || {}
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
      // storage.set('HAOKE_TOKEN',payload)
      setToken(payload)
    },
    removeUser () {
      removeToken()
    }
  }

})
