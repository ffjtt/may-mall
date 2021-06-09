<template>
  <div v-if="Object.keys(goods).length !==0"  class="info">
    <div class="title">
      <div >{{ goods.title }}</div>
    </div>
    <div class="price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="count">
      <span class="salecoumt">{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="other">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.info {
    padding: 10px;
    width: 100%;
    border-bottom: 5px solid #f2f5f8;
}
.info .title {
    font-size: 15px;
    line-height: 20px;
}
.price {
    margin:10px 0;
}
.n-price {
    color: var(--color-high-text);
}
.o-price {
    padding-left: 20px;
    text-decoration: line-through;
}
.price .discount {
    position: relative;
    bottom: 8px;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    margin-left: 10px;
    padding: 0 5px;
    background-color: var(--color-high-text);
    border-radius: 8px;
    color: #fff;
}
.count {
    display: flex;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.5);
}
.count span {
    flex: 1;
    text-align: center;
}
.other {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.other .info-service-item {
    flex:1;
    height: 18px;
    line-height: 18px;
    
}
.other img {
    height: 18px;
    width: 18px;
    position: relative;
    top: 2.5px;
}
</style>