<template>
  <nav-bar>
    <span slot="left">
      <img src="~assets/images/common/back.svg" alt="" class="back" @click="clickBack">
    </span>
    <div slot="center" class="center" >
      <div  v-for="(item,index) in titles" :key="index" @click="titleClick(index)" :class="{active:index == currentIndex}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    clickBack() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.center {
  display: flex;
}
.center div {
  flex:1
}
.active {
  color: var(--color-high-text);;
}
.back {
  margin-top: 12px;
}
</style>