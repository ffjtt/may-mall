import {ADD_COUNTER,ADD_TO_CART} from './mutation_type'

const mutations = {
    [ADD_COUNTER](state,index) {
        state.cartList[index].count+=1
    },
    [ADD_TO_CART](state,obj) {
        obj.check = true
        state.cartList.push(obj)
        state.cartList[state.cartList.length-1].count = 1
    }
}

export default mutations