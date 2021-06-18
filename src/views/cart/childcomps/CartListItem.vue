<template>
  <div class="info">
    <click-buttom class="click_buttom" :value=product.check @click.native="checkButtom"></click-buttom>
    <div class="img_div">
      <img :src="product.imgURL" alt="">
    </div>
    <div class="text_div">
      <p>{{product.title}}</p>
      <p>{{product.desc}}</p>
      <div>
        <span class="price">￥{{product.newPrice}}</span>
        <span class="count">×{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ClickButtom from 'components/content/clickbuttom/ClickButtom'

import {mapGetters} from 'vuex'
export default {
  name: "CartListItem",
  components:{
    ClickButtom
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods:{
    checkButtom() {
      this.product.check = !this.product.check
      // this.$emit('isAllSelect',this.cartList.find((item)=>{
      //   item.check == false
      // }))
      // console.log(this.cartList);
      // console.log(this.cartList.find((item)=>{
      //   item.check === false
      // }));
    }
  }
};
</script>

<style scoped>
.info {
  display: flex;
  width: 100vw;
  padding: 10px 5px;
}

.info img {
  width: 100%;
  border-radius: 5px;
}
.img_div {
  margin-right: 10px;
  width: 25%;
}
.text_div {
  width: 60%;
}

.text_div p {
  padding: 5px 0;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text_div div {
  position: relative;
  margin-top: 25px;
}

.price {
  color: var(--color-tint);
}
.count {
  position: absolute;
  right: 5px;
}
.click_buttom {
  margin-right: 10px;
  position: relative;
  top: 50px;
  right: -3px;
}
</style>