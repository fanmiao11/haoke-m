import Vue from 'vue'
import Vuex from 'vuex'
// import storage from '@/utils/storage'
import { getToken, setToken, removeToken } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user: storage.get('HAOKE_TOKEN') ||{}
    user: getToken() || {},
    currentCity: '北京',
    currentCityValue: 'AREA|88cff55c-aaa4-e2e0'
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
      // storage.set('HAOKE_TOKEN',payload)
      setToken(payload)
    },
    removeUser () {
      removeToken()
    },
    setCurrentCity (state, payload) {
      state.currentCity = payload
    },
    setCurrentCityValue (state, payload) {
      state.currentCityValue = payload
    }
  }

})
