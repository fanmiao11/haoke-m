<template>
  <van-cell class="HouseItem_house" @click="toDetailsFn(body.houseCode)">
    <div class="HouseItem_imgWrap">
      <img :src="`${BASE_URL}${body.houseImg}`" />
    </div>
    <div class="HouseItem_content">
      <h3 class="HouseItem_title">{{ body.title }}</h3>
      <div class="HouseItem_desc">{{ body.desc }}</div>
      <div>
        <span
          class="HouseItem_tag"
          v-for="(item, index) in body.tags"
          :key="index"
          >{{ item }}</span
        >
      </div>
      <div class="HouseItem_price">
        <span class="HouseItem_priceNum">{{ body.price }}</span
        >元/月
      </div>
    </div>
  </van-cell>
</template>

<script>
import { BASE_URL } from '@/utils'
export default {
  props: {
    body: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      BASE_URL
    }
  },
  methods: {
    toDetailsFn (code) {
      localStorage.setItem('HAOKE_CURRENTHOUSE_CODE', JSON.stringify(code))
      this.$router.push({
        name: 'detail'
        // params: { code }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.HouseItem_house {
  height: 120px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 18px;
  border-bottom: 1px solid #e5e5e5;
  .HouseItem_imgWrap {
    float: left;
    width: 106px;
    height: 80px;
    img {
      width: 106px;
      height: 80px;
    }
  }
  .HouseItem_content {
    overflow: hidden;
    line-height: 22px;
    padding-left: 12px;
    .HouseItem_title {
      margin: 0;
      font-size: 15px;
      color: #394043;
    }
    .HouseItem_desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      font-size: 12px;
      color: #afb2b3;
    }
    .HouseItem_tag {
      color: #39becd;
      background: #e1f5f8;
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      padding: 4px 5px;
      margin-right: 5px;
      line-height: 12px;
    }
    .HouseItem_price {
      font-size: 12px;
      color: #fa5741;
      .HouseItem_priceNum {
        font-size: 16px;
        font-weight: bolder;
      }
    }
  }
}
</style>
