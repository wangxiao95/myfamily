import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state'
import getters from './modules/getters'
import mutations from './modules/mutations'
import actions from './modules/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
      state,
      getters,
      mutations,
      actions
})

export default store
