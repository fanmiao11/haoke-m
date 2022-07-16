<template>
  <div class="favorate-container">
    <van-nav-bar title="房屋管理" left-arrow @click-left="backPrePage" />
    <!-- 已发布房源 -->
    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      v-if="!!houseList"
    >
      <div>
        <HouseList
          v-for="(item, index) in houseList"
          :key="index"
          :body="item"
        ></HouseList>
      </div>
    </van-list>
    <!-- 未发布房源 -->
    <div v-else class="unPublished">
      <img src="http://liufusong.top:8080/img/not-found.png" />
      <p>您还未发布房源~</p>
    </div>
  </div>
</template>

<script>
import { getRentedApi } from '@/api/user'
import HouseList from '@/components/HouseList'

export default {
  data () {
    return {
      houseList: null,
      loading: false,
      finished: true
    }
  },
  components: {
    HouseList
  },

  async created () {
    try {
      const token = this.$store.state.user.token
      const res = await getRentedApi(token)
      //   console.log(res)
      this.houseList = res.data.body
    //   console.log(!!this.houseList);
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    backPrePage () {
      this.$router.back()
    },
    onLoad () {}
  }
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar {
  background-color: #21b97a;
  .van-icon,
  .van-nav-bar__title {
    color: #fff;
  }
}
.unPublished{
    text-align: center;
}
</style>
