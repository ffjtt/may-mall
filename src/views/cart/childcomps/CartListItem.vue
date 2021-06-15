<template>
  <div>
    <div>{{ product.iid }}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>