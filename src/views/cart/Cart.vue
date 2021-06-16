<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物车({{ getLenght }})</div>
    </nav-bar>

    <cart-list :cartList='cartList'></cart-list>

    <cart-bottom class="cart_bottom" :count="count" :amount="amount"></cart-bottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childcomps/CartList.vue";
import CartBottom from './childcomps/Cartbottom.vue'

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottom
  },
  data() {
    return{
      cartList:[]
    }
  },
  created() {
    this.cartList = this.getCartList
    console.log(this.cartList);
  },
  computed: {
    ...mapGetters({
      getLenght: "cartListLenght",
      getCartList:'cartList'
    }),
    count() {
      return this.cartList.length
    },
    amount() {
      return this.cartList.reduce((pre,i)=>{
        pre += i.newPrice*i.count       
        return pre
      },0)
    }
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.cart_bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px
}
</style>