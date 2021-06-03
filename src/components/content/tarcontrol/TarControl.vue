<template>
  <div class="tarcontrol">
    <ul>
      <li v-for="(item, index) in title" 
      :key="index"
      :class="{isactive:index == currentIndex}"
      @click="isClick(index)">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TarControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
      return {
          currentIndex: 0
      }
  },
  methods:{
      isClick(index) {
          this.currentIndex = index
          this.$emit("tarChange",index)
      }
  }
};
</script>

<style>
.tarcontrol {
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    z-index: 9;
}
.tarcontrol ul {
    display: flex;
    text-align: center;
}
.tarcontrol ul li {
    flex: 1;
    display: inline-block;   
    background-color: #fff;
}
.isactive span {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
    padding: 5px;
}
</style>