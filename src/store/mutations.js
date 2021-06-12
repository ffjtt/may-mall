const mutations = {
    addCart(state,obj) {
        let index = null
        const exist = state.cartList.some(function(item,i) {
            if(item.iid === obj.iid) {index = i}
            return item.iid === obj.iid
        })

        if (exist) {
            state.cartList[index].count+=1
        } else {
            state.cartList.push(obj)
            state.cartList[state.cartList.length-1].count = 1
        }
        console.log(state.cartList);
    }
}

export default mutations