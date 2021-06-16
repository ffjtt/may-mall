<template>
    <div>
      <div class="icon-selector" :class="{'selector-active':isCheck}">
        <img src="~assets/images/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: "Buttom",
  props:{
    value: {
		    type: Boolean,
        default: false
      }
  },
  data() {
    return {
      isCheck:this.value
    }
  },
  watch:{
    value(newValue) {
      this.isCheck = newValue
    }
  }
};
</script>

<style scoped>
.icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }

</style>