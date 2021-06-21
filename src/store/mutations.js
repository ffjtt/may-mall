import {ADD_COUNTER,ADD_TO_CART} from './mutation_type'

const mutations = {
    [ADD_COUNTER](state,index) {
        state.cartList[index].count+=1
    },
    [ADD_TO_CART](state,obj) {
        
        state.cartList.push(obj)
        
    }
}

export default mutations