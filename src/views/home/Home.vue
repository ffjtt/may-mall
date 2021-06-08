<template>
  <div id="home">
    <nar-bar class="home-nav">
      <div slot="center">购物街</div>
    </nar-bar>

    <tar-control 
    class="tarcontrol"
        :title="['流行', '新款', '爆款']"
        @tarChange="tarChange"
        v-show="tarControlShow"
        ref="tarcontrol2"
      ></tar-control>

    <scroll
      :pullUpLoad="true"
      @pullingUp="pullingup"
      :probeType="3"
      class="content"
      @scroll="scroll"
      ref="scroll"
    >
      <home-swiper :banners="bannersList" @simgLoad="simgLoad"></home-swiper>
      <Recommend :recommend="recommendsList"></Recommend>
      <feature></feature>
      <tar-control
        :title="['流行', '新款', '爆款']"
        @tarChange="tarChange"
        ref="tarcontrol1"
      ></tar-control>
      <Goods :goodsList="pushData"></Goods>
    </scroll>

    <BackTop class="backtop" @click.native="clicktop" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import NarBar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childcomps/HomeSwiper";
import Recommend from "views/home/childcomps/Recommend";
import Feature from "views/home/childcomps/Feature";
import TarControl from "components/content/tarcontrol/TarControl";
import Goods from "components/content/goods/Goods";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import {debounce} from 'common/utils'
export default {
  name: "Home",
  components: {
    NarBar,
    HomeSwiper,
    Feature,
    Recommend,
    TarControl,
    Goods,
    Scroll,
    BackTop,
  },
  data() {
    return {
      bannersList: [
        {
          acm: "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
          height: 390,
          height923: 390,
          image: "https://www.baidu.com/img/flexible/logo/pc/result.png",
          image923:
            "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
          link: "https://www.baidu.com",
          title: "焕新女装节",
          width: 750,
          width923: 750,
        },
        {
          acm: "3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
          height: 390,
          height923: 390,
          image: "https://www.baidu.com/img/flexible/logo/pc/result.png",
          image923:
            "https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg",
          link: "https://www.baidu.com",
          title: "入秋穿搭指南",
          width: 750,
          width923: 750,
        },
        {
          acm: "3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
          height: 390,
          height923: 390,
          image: "https://www.baidu.com/img/flexible/logo/pc/result.png",
          image923:
            "https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg",
          link: "https://www.baidu.com",
          title: "秋季护肤大作战",
          width: 750,
          width923: 750,
        },
        {
          acm: "3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
          height: 390,
          height923: 390,
          image: "https://www.baidu.com/img/flexible/logo/pc/result.png",
          image923:
            "https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg",
          link: "https://www.baidu.com",
          title: "流行抢先一步",
          width: 750,
          width923: 750,
        },
      ],
      banners: [],
      recommends: [],
      recommendsList: [
        {
          acm: "3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          image:
            "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=306547450,2932158275&fm=58",
          link: "http://www.baidu.com",
          sort: 1,
          title: "十点抢券",
        },
        {
          acm: "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          image:
            "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2681268939,2648248113&fm=58",
          link: "http://www.baidu.com",
          sort: 2,
          title: "好物特卖",
        },
        {
          acm: "3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
          image:
            "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2479555558,3351257281&fm=58",
          link: "http://www.baidu.com",
          sort: 3,
          title: "内购福利",
        },
        {
          acm: "3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
          image:
            "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2681268939,2648248113&fm=58",
          link: "http://www.baidu.com",
          sort: 4,
          title: "初秋上新",
        },
      ],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      current: "pop",
      isShow: false,
      tarControlShow: false,
      offsetTop:0
    };
  },
  methods: {
    tarChange(index) {
      switch (index) {
        case 0: {
          this.current = "pop";
          break;
        }
        case 1: {
          this.current = "new";
          break;
        }
        case 2: {
          this.current = "sell";
          break;
        }
      }
      this.$refs.tarcontrol1.currentIndex = index
      this.$refs.tarcontrol2.currentIndex = index
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {

        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;

      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },

    pullingup() {
      this.getHomeGoods(this.current);
    },
    scroll(position) {
      this.isShow = -position.y > 1000
      this.tarControlShow = -position.y > this.offsetTop

    },
    clicktop() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    simgLoad() {
      this.offsetTop = this.$refs.tarcontrol1.$el.offsetTop
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on("imgLoad",() => {
      refresh()
    })

  },
  computed: {
    pushData() {
      return this.goods[this.current].list;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9; */
}
.tarcontrol {
  position: relative;
  z-index: 9;
}
.content {
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>