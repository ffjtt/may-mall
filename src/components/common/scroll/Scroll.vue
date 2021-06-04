<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    // probeType : {
    //   type: Number,
    //   default: 1
    // },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // probeType: this.probeType,
      click:true,
      pullUpLoad: this.pullUpLoad,
    });

    // this.scroll.on('scroll',position => {
    //   this.$emit('scroll',position)
    // })

    if(this.pullUpLoad) {
      this.scroll.on('pullingUp',() => {
        console.log('pullingUp');
        this.$emit('pullingUp')
      })
    }
  },
  

};
</script>

<style>
</style>