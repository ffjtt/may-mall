<template>
  <div id="detail">
    <DetailNavBar
      class="d_navbar"
      @titleClick="titleClick"
      ref="navbar"
    ></DetailNavBar>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="scrollPosition"
    >
      <DetailSwiper :images="topImages" @refresh="Torefresh"></DetailSwiper>
      <DetailInfo :goods="goods"></DetailInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @GimgLoad="Grefresh"
      ></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo" ref="paramInfo"></DetailParamInfo>
      <DetailCommentInfo
        :commentInfo="commentInfo"
        ref="commentInfo"
      ></DetailCommentInfo>
      <GoodsList :goodsList="recommends" ref="goodsList"></GoodsList>
    </scroll>

    <BackTop class="backtop" @click.native="clicktop" v-show="isShow"></BackTop>
    <DetailBottomBar @click.native="addToCart"></DetailBottomBar>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childcomps/DetailNavBar";
import DetailSwiper from "views/detail/childcomps/DetailSwiper";
import DetailInfo from "views/detail/childcomps/DetailInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
import DetailParamInfo from "./childcomps/DetailParamInfo";
import DetailCommentInfo from "./childcomps/DetailCommentInfo";
import DetailBottomBar from "./childcomps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";
import GoodsList from "components/content/goods/Goods";
import { mixin } from "common/mixin";

import {
  getDetail,
  Goods,
  GoodsParam,
  Shop,
  getRecommend,
} from "network/detail";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailBottomBar,
  },
  mixins: [mixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      //newRefresh: null,
      refresh: null,
      offsetTopList: [],
      nowCurrentIndex: null,
      isShow: false,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);

      const data = res.result;
      //1.获取顶部轮播图数据
      this.topImages = data.itemInfo.topImages;

      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      //5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6.获取评论信息
      this.commentInfo = data.rate.list[0];
      //7.请求推荐数据
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    });
  },
  mounted() {
    //混入
    // const refresh = debounce(this.$refs.scroll.refresh, 50);
    // this.newRefresh = () => {
    //   console.log("detail调用refresh");
    //   refresh();
    // };
    // this.$bus.$on("imgLoad", this.newRefresh);
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
  },
  destroyed() {
    this.$bus.$off("imgLoad", this.newRefresh);
  },
  methods: {
    Torefresh() {
      this.$refs.scroll.refresh();
    },
    Grefresh() {
      this.refresh();
    },
    titleClick(index) {
      console.log(this.offsetTopList[index]);
      this.$refs.scroll.scrollTo(0, -this.offsetTopList[index], 0);
    },
    scrollPosition(position) {
      this.isShow = -position.y > 1000;
      for (let i = 0; i < this.offsetTopList.length - 1; i++) {
        if (
          -position.y > this.offsetTopList[i] &&
          -position.y < this.offsetTopList[i + 1]
        ) {
          this.$refs.navbar.currentIndex = i;
        }
      }
    },
    clicktop() {
      this.$refs.scroll.scrollTo(0, 0, 0);
    },
    addToCart() {
      // 1.创建对象
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.nowPrice;
      // 3.添加到Store中
      this.$store.dispatch("addCart", obj);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.d_bavbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 58px);
  overflow: hidden;
}
</style>