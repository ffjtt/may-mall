<template>
  <div class="bottom_div">
    <div class="is_all">
      <click-buttom :value=isAll class="click_buttom"  @click.native="isAllSelect" ></click-buttom>
      <span>全选</span>
    </div>
    <div class="count">
      <span>总计：￥{{amount}}</span>
    </div>
    <div class="go">
      <span >去结算({{count}})</span>
    </div>
  </div>
</template>

<script>
import ClickButtom from "components/content/clickbuttom/ClickButtom";

export default {
  name: "CartBottom",
  props: {
    amount:{
      type:Number,
      default:0
    },
    count:{
      type:Number,
      default:0
    },
    cartList:{
      type:Array,
      default:[]
    }
    
  },
  components: {
    ClickButtom,
  },
  data() {
    return {
      
    }
  },
  methods: {
    isAllSelect() {
      let isSelectAll = this.$store.getters.cartList.filter(item => !item.checked).length;
      console.log(isSelectAll);
        // 2.有未选中的内容, 则全部选中
        if (isSelectAll) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
          console.log(1);
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
          console.log(0);
        }
     
    }
  },
  computed: {
    isAll() {
      console.log(this.$store.getters.cartList.find(item => item.checked === false) === undefined);
      return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
    }
  }
};
</script>

<style >
.bottom_div {
  display: flex;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  background-color: rgba(245, 236, 217, 0.781);
}
.is_all{
  width: 80px;
  position: relative;
  
}
.is_all span{
  position: absolute;
  top: 1px;
  left: 30px;
}
.count {
  flex: 1;
}
.go {
  width: 100px;
  text-align: center;
  padding-right: 10px;
  background-color: rgb(255, 94, 0);
  color: #fff;
}
.click_buttom {
  position: absolute;
  top: 10px;
  left: 5px;
}
.click_buttom img {
  position: relative;
  top: -8px;
}
</style>