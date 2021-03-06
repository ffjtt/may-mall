import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
    cartList:[]
}

const Store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default Store