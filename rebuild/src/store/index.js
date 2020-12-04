import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    staticModule:false
  },
  mutations: {
    changeStaticShow(state,payload){
      console.log(payload)
      state.staticModule=payload
    }
  },
  getters:{},
  actions: {
  },
  modules: {
  }
})
