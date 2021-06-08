<template>
  <div class="goodsitem">
    <img :src="itemImgShow" alt="" @load="imgLoad" />

    <div class="iteminfo">
      <p>{{ item.title }}</p>
      <span class="price">￥{{ item.price }}</span>
      <span class="cfav">{{ item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
      itemImgShow() {
          return  this.item.image || this.item.show.img;
      }
  },
  methods:{
    imgLoad() {
      this.$bus.$emit('imgLoad')
    }
  }
};
</script>

<style>
.goodsitem {
    width: 48%;
    margin-bottom: 8px;
    font-size: 12px;
}
.goodsitem img {
width: 100%;
border-radius: 3px;
}
.iteminfo {
    text-align: center;
}
.iteminfo p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 5px;
    margin-bottom: 5px;
}
.iteminfo .price {
color: var(--color-high-text);
margin-right: 10px;
margin-top: 5px;
}
.iteminfo .cfav {
    position: relative;
    padding-left: 10px;
}
.iteminfo .cfav::before {
position: absolute;
content: "";
left: -5px;
top: -1px;
width: 14px;
height: 14px;
padding-top: 5px;
background: url("~assets/images/common/collect.svg") 0 0/14px 14px;

}
</style>