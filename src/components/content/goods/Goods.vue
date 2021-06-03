<template>
  <div class="goods">
      <GoodsItem v-for="(item,index) in goodsList" :key="index" :item="item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem'

export default {
name:'goods',
props:{
    goodsList:{
        type:Array,
        default() {
            return []
        }
    }
},
components:{
    GoodsItem
}
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 5px;
}
</style>