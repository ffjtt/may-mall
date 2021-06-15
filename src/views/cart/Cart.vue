<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物车({{ getLenght }})</div>
    </nav-bar>

    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childcomps/CartList.vue";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
  },
  computed: {
    ...mapGetters({
      getLenght: "cartListLenght",
    }),
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>