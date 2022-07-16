<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipe" :key="item.id">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" />
      </van-swipe-item>
    </van-swipe>

    <!--  -->
    <van-grid class="grid">
      <van-grid-item icon="wap-home-o" text="整租" />
      <van-grid-item icon="friends-o" text="合租" />
      <van-grid-item icon="guide-o" text="地图找房" />
      <van-grid-item icon="wap-home" text="去出租" />
    </van-grid>

    <!-- 租房小组 -->
    <div class="group">
      <van-cell title="租房小组" value="更多" />
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item v-for="item in groups" :key="item.id">
          <div class="groups_left">
            <img :src="`${BASE_URL}${item.imgSrc}`" />
          </div>
          <div class="groups_right">
            <p class="title">{{ item.title }}</p>
            <p class="desc">{{ item.desc }}</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getSwiperApi, getGroupsApi } from '@/api/home'
import { BASE_URL } from '@/utils'

export default {
  data () {
    return {
      swipe: [],
      groups: [],
      BASE_URL
    }
  },
  async created () {
    const res = await getSwiperApi()
    // console.log(res.data.body)
    this.swipe = res.data.body

    const {
      data: { body }
    } = await getGroupsApi()
    // console.log(body);
    this.groups = body
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #f5f5f9;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 212px;
  img {
    width: 100%;
  }
}

.grid {
  color: #333;
  padding: 10px 0px;
  :deep(.van-icon) {
    width: 60px;
    height: 60px;
    text-align: center;
    background-color: #f2fbf7;
    border-radius: 50%;
    line-height: 60px;
    color: #01ae67;
  }
  /deep/[class*='van-hairline']::after {
    border: unset;
  }
  /deep/.van-grid-item__text {
    font-size: 14px;
    font-weight: 400;
  }
}

.group {
  .van-cell {
    background-color: #f5f5f9;
    .van-cell__title{
      font-size: 15px;
      font-weight: bold;
    }
  }
  font-size: 14px;
  img {
    width: 50px;
    height: 50px;
  }
 /deep/.van-grid-item__content {
    background-color: #fff;
    border-radius: 5px;
    justify-content:space-around;
    width: 100%;
    display: flex;
    flex-direction: row;

    .group_left {
      flex: 1;
      width: 50px;
    }
    .group_right {
      flex: 1;
    }
  }
}
</style>
