<template>
  <div class="bottom_div">
    <div class="is_all">
      <click-buttom
        :value="isAll"
        class="click_buttom"
        @click.native="isAllSelect"
      ></click-buttom>
      <span>全选</span>
    </div>
    <div class="count">
      <span>总计：￥{{ amount }}</span>
    </div>
    <div class="go">
      <span>去结算({{ count }})</span>
    </div>
  </div>
</template>

<script>
import ClickButtom from "components/content/clickbuttom/ClickButtom";
import { mapGetters } from "vuex";

export default {
  name: "CartBottom",
  props: {
    amount: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ClickButtom,
  },
  data() {
    return {};
  },
  methods: {
    isAllSelect() {
      let isSelectAll = this.cartList.filter((item) => !item.check).length;

      // 2.有未选中的内容, 则全部选中
      if (isSelectAll) {
        this.cartList.forEach((item) => {
          item.check = true;
        });
      } else {
        this.cartList.forEach((item) => {
          item.check = false;
        });
      }
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
    isAll() {
      return !this.cartList.find((item) => !item.check);
    },
  },
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
.is_all {
  width: 80px;
  position: relative;
}
.is_all span {
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