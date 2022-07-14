<template>
  <div>
    home页面
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <!-- <van-swipe-item
      v-for="item in swipe"
      :key="item.id"
       >
       <img :src="`http://liufusong.top:8080${item.imgSrc}`" />
       </van-swipe-item> -->

    </van-swipe>
  </div>
</template>

<script>
import { swiper } from '@/api/home'

export default {

  data () {
    return {
      swipe: []

    }
  },
  async created () {
    const res = await swiper()
    console.log(res.data.body)
    this.swipe = res.data.body
  }

}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  }

</style>
