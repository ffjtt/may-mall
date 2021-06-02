<template>
  <div id="home">
    <nar-bar class="home-nav">
      <div slot="center">购物街</div>
    </nar-bar>

    <home-swiper :banners="bannersList"></home-swiper>
  </div>
</template>

<script>
import NarBar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childcomps/HomeSwiper";

import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NarBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: {
        context: {
          currentTime: 1538014774,
        },
        isEnd: true,
        list: [
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
        nextPage: 1,
      },
      bannersList: [],
      recommends: [],
    };
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.bannersList = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.bannersList);
      });
    },
  },
  created() {
    this.getHomeMultidata();
  },
};
</script>

<style scoped>
#home {
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
</style>