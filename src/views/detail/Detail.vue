<template>
  <div id="detail">
    <DetailNavBar class="d_navbar"></DetailNavBar>

    <scroll class="content" ref="scroll">
      <DetailSwiper :images="topImages" @refresh="Torefresh"></DetailSwiper>
      <DetailInfo :goods="goods"></DetailInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo='detailInfo' @imgLoad='Torefresh'></DetailGoodsInfo>
      <DetailParamInfo :paramInfo='paramInfo'></DetailParamInfo>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childcomps/DetailNavBar";
import DetailSwiper from "views/detail/childcomps/DetailSwiper";
import DetailInfo from "views/detail/childcomps/DetailInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailParamInfo from  './childcomps/DetailParamInfo'

import Scroll from "components/common/scroll/Scroll";

import {
  getDetail,
  Goods,
  GoodsParam,
  Shop,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo
  },
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
  methods: {
    Torefresh() {
    console.log('111');
    this.$refs.scroll.refresh()
  }
  }
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
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>