<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
    display: flex;
     width: 100%;
     margin-top: 5px;
}
.recommend div {
    text-align: center;
    flex: 1;
    font-size: 12px;
}
.recommend img {
    width: 65px;
    height: 65px;

}
</style>