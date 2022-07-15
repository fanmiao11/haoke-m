<template>
  <div class="favorate-container">
    <van-nav-bar title="收藏列表" left-arrow @click-left="backPrePage" />
    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <HouseList v-for="(item,index) in houseList" :key="index" :body="item" @click="toDetailsFn(item.houseCode)"></HouseList>
      <!-- <van-cell class="HouseItem_house" v-for="(item,index) in houseList" :key="index">
        <div class="HouseItem_imgWrap">
          <img :src="`${BASE_URL}${item.houseImg}`" />
        </div>
        <div class="HouseItem_content">
          <h3 class="HouseItem_title">{{item.title}}</h3>
          <div class="HouseItem_desc">{{item.desc}}</div>
          <div>
            <span class="HouseItem_tag" v-for="(ele,index) in item.tags" :key="index">{{ele}}</span>
          </div>
          <div class="HouseItem_price">
            <span class="HouseItem_priceNum">{{item.price}}</span>元/月
          </div>
        </div>
      </van-cell> -->
    </van-list>
  </div>
</template>

<script>
import { getFavoritesApi } from '@/api/user'
import HouseList from '@/components/HouseList'

export default {
  data () {
    return {
      houseList: [],
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
      const res = await getFavoritesApi(token)
      console.log(res)
      this.houseList = res.data.body
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    backPrePage () {
      this.$router.back()
    },
    onLoad () {},
    toDetailsFn (code) {
      this.$router.push({

      })
    }
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

</style>
