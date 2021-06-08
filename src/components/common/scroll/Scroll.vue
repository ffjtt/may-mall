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
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });

    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, t = 500) {
      this.scroll.scrollTo(x, y, t);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      console.log('jjjjjjjj');
      this.scroll.refresh()
    }
  },
};
</script>

<style>
</style>