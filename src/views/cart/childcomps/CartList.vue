<template>
  <div class="cart-list">
    <scroll class="content-item" ref="scroll">
      
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";


import CartListItem from "./CartListItem.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  props:{
    cartList:{
      type:Array,
      default() {
        return[]
      }
    }
  },
  computed: {
    // ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px);
}
.content-item {
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>