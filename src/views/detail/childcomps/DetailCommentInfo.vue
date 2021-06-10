<template>
  <!-- <div v-if="Object.keys(commentInfo).lenght !==0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt />
      </div>
    </div>
  </div> -->
  <div v-if="Object.keys(commentInfo).lenght !== 0" class="commentInfo">
    <div class="header">
      <div class="left">用户评价</div>
      <div class="right">更多</div>
    </div>
    <div class="user">
      <img class="userimg" v-if="commentInfo.user" :src="commentInfo.user.avatar" >
      <span class="username" v-if="commentInfo.user">{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate: function (value) {
      // 1.将时间戳转换成Date对象
      let date = new Date(value * 1000);
      // 2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    },
  }
};
</script>

<style scoped>
.commentInfo {
  padding: 10px 5px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.header {
  display: flex;
}
.header div {
  flex: 1;
  padding: 0 10px;
}
.left {
  text-align-last: left;
}
.right {
  text-align: right;
}

.user {
 height: 40px;
 padding: 5px 0;
}

.userimg {
  width: 40px;
  height: 40px;
  border-radius: 25px;
}
.username {
  position: relative;
  top: -13px;
}

.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-right: 8px;
}

.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}

</style>