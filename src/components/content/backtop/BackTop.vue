<template>
  <div class="backtop">
    <img src="~assets/images/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style>
.backtop {
  position: fixed;
  bottom: 50px;
  right: 8px;
}
.backtop img {
  width: 45px;
  height: 45px;
  z-index: 9;
}
</style>