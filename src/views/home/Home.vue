<template>
  <div id="home">
    <nar-bar class="home-nav">
      <div slot="center">购物街</div>
    </nar-bar>

    <scroll :pullUpLoad="true"
    @pullingUp="pullingup">
      <home-swiper :banners="bannersList"></home-swiper>
      <Recommend :recommend="recommendsList"></Recommend>
      <feature></feature>
      <tar-control
        class="tarcontrol"
        :title="['流行', '新款', '爆款']"
        @tarChange="tarChange"
      ></tar-control>
      <Goods :goodsList="pushData"></Goods>
    </scroll>
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

import { getHomeMultidata, getHomeGoods } from "network/home";
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
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        //console.log(this.bannersList);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        console.log(this.goods);
      });
    },

    pullingup() {
      console.log('pullingup');
      this.getHomeGoods(this.current)
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
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
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
}
.tarcontrol {
  position: sticky;
  top: 44px;
}
</style>