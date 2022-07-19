<template>
  <div class="home">
    <!-- search -->
    <div class="search_box">
      <div class="search">
        <span class="left" @click="toCityFn">{{$store.state.currentCity}} <van-icon name="arrow-down" /></span>
        <van-search
          class="right"
          v-model="value"
          placeholder="请输入小区或地址"
          @search="onSearch"
        >
        </van-search>
      </div>

      <div class="location" @click="location">
        <van-icon name="location-o" />
      </div>
    </div>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipe" :key="item.id">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" />
      </van-swipe-item>
    </van-swipe>

    <!-- 中间导航 -->
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
      BASE_URL,
      value: ''
    }
  },
  methods: {
    onSearch () {},
    location () {},
    toCityFn () {
      this.$router.push('/city')
    }
  },
  async created () {
    const res = await getSwiperApi()
    // console.log(res.data.body)
    this.swipe = res.data.body

    const { data: { body } } = await getGroupsApi(this.$store.state.currentCityValue)
    console.log(this.$store.state.currentCityValue)
    // const {data: { body }} = await getGroupsApi('AREA|0ee75d32-8a95-3f73')
    // console.log(body);
    this.groups = body
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #f5f5f9;
}
.search_box {
  background: unset;
  position: fixed;
  z-index: 11;
  height: 34px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-evenly;
  top: 25px;
  font-size: 14px;
  text-align: left;
  width: 100%;

  .search {
    border-radius: 3px;
    background-color: #fff;
    flex: auto;
    margin: 0 10px;
    padding: 5px 5px 5px 8px;
    display: flex;
    align-items: center;
    .left {
      // flex: auto;
      height: 20px;
      line-height: 20px;
      border-right: 1px solid #e5e5e5;
      padding-right: 10px;
    }
    .van-search{
      height: 100%;
    }
    .van-search__content {
      // flex: auto;
      padding-left: 0px;
      background-color: #fff;
      // border-left: 1px solid #e5e5e5;
      ::placeholder {
        padding-left: 4px;
        font-size: 13px;
        color: #9c9fa1;
      }
    }
  }
  .location {
    width: 50px;
    line-height: 34px;
    .van-icon {
      font-size: 25px;
      color: #fff;
    }
  }
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
    .van-cell__title {
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
    justify-content: space-around;
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
