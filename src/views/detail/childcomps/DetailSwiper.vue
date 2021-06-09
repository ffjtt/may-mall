<template>
  <div>
    <Swiper class="swiper">
      <swiper-item v-for="(item, index) in images" :key="index" >       
          <img :src="item" @load="simgLoad" />
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isrefresh: false
    }
  },
  methods: {
    simgLoad() {
      if(!this.isrefresh) {
        this.$emit('refresh')
        this.isrefresh = true
      }
    }
  }
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
</style>