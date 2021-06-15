import {ADD_COUNTER,ADD_TO_CART} from './mutation_type'

const actions = {
  addCart(context,obj) {
    let index = null
    const exist = context.state.cartList.some(function(item,i) {
        if(item.iid === obj.iid) {index = i}
        return item.iid === obj.iid
    })

    if (exist) {
        context.commit(ADD_COUNTER,index)
    } else {
        context.commit(ADD_TO_CART,obj)
    }
    console.log(context.state.cartList);
}
}

export default actions