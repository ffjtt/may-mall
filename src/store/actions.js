import {ADD_COUNTER,ADD_TO_CART} from './mutation_type'

const actions = {
  addCart(context,obj) {
    return new Promise((resolve, reject) => {
      let index = null
    const exist = context.state.cartList.some(function(item,i) {
        if(item.iid === obj.iid) {index = i}
        return item.iid === obj.iid
    })

    if (exist) {
      context.commit(ADD_COUNTER, index)
      resolve('当前商品数量+1')
    } else {
      context.commit(ADD_TO_CART, obj)
      resolve('已添加到购物车')
    }
    console.log(context.state.cartList);
    }) 
}
}

export default actions