<template>
  <div class="HouseDetail">
    <van-nav-bar
      :title="houseDetail.community"
      left-arrow
      @click-left="backPrePage"
    />
    <div class="HouseDetail_slides">
      <img :src="BASE_URL + houseDetail.houseImg" />
    </div>
    <div class="HouseDetail_info">
      <h3 class="HouseDetail_infoTitle">{{ houseDetail.title }}</h3>

      <div class="HouseDetail_tags">
        <span
          class="HouseDetail_tag"
          v-for="item in houseDetail.tags"
          :key="item"
          >{{ item }}</span
        >
      </div>
      <!-- 租金 -->
      <div class="HouseDetail_infoPrice">
        <div class="HouseDetail_infoPriceItem">
          <div>
            {{ houseDetail.price }}
            <span class="HouseDetail_month">/月</span>
          </div>
          <div>租金</div>
        </div>
        <div class="HouseDetail_infoPriceItem">
          <div>{{ houseDetail.roomType }}</div>
          <div>房型</div>
        </div>
        <div class="HouseDetail_infoPriceItem">
          <div>{{ houseDetail.size }}平米</div>
          <div>面积</div>
        </div>
      </div>
      <div class="HouseDetail_infoBasic">
        <div class="HouseDetail_infoBasicItem">
          <div><span class="HouseDetail_infoBasicTitle">装修：</span>精装</div>
          <div>
            <span class="HouseDetail_infoBasicTitle">楼层：</span
            >{{ houseDetail.floor }}
          </div>
        </div>
        <div class="HouseDetail_infoBasicItem">
          <div>
            <span class="HouseDetail_infoBasicTitle">朝向：</span
            >{{ houseDetail.oriented[0] }}
          </div>
          <div>
            <span class="HouseDetail_infoBasicTitle">类型：</span>普通住宅
          </div>
        </div>
      </div>
    </div>
    <div class="HouseDetail_map"></div>
    <!-- <div class="HouseDetail_about"></div>
    <div class="HouseDetail_set"></div>
    <div class="HouseDetail_recommend"></div> -->
  </div>
</template>

<script>
import { getHouseApi } from '@/api/house'
import { BASE_URL } from '@/utils'
export default {
  data () {
    return {
      houseDetail: {},
      BASE_URL
    }
  },
  async created () {
    // console.log();
    try {
      const res = await getHouseApi(this.$route.params.code)
      // console.log(res)
      this.houseDetail = res.data.body
      console.log(this.houseDetail)
    } catch (e) {
      console.log(e.message)
    }
  },
  methods: {
    backPrePage () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
/deep/.van-nav-bar {
  background-color: #21b97a;
  .van-icon,
  .van-nav-bar__title {
    color: #fff;
  }
}

.HouseDetail {
  .HouseDetail_slides {
    img {
      width: 100%;
      vertical-align: top;
    }
  }
  .HouseDetail_info {
    padding: 15px;
    background: #fff;
    .HouseDetail_infoTitle {
      font-weight: 400;
      font-size: 16px;
      color: #333;
    }
    .HouseDetail_tags {
      position: relative;
      margin: 10px 0;
      .HouseDetail_tag {
        color: #39becd;
        background: #e1f5f8;
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
      }
    }
    .HouseDetail_infoPrice {
      border-top: 1px solid #cecece;
      border-bottom: 1px solid #cecece;
      margin: 15px 0;
      padding: 15px 0;
      display: flex;
      justify-content: space-around;
      .HouseDetail_infoPriceItem {
        text-align: center;
        color: #999;
        box-sizing: border-box;
        flex: 1 1;
        margin-left: 0px;
        min-width: 10px;
        line-height: 26px;
        font-size: 14px;
        :first-child {
          color: #fa5741;
          font-size: 18px;
          font-weight: bolder;
        }
      }
    }
  }
  .HouseDetail_infoBasic {
    font-size: 13px;
    overflow: hidden;
    text-align: left;
    display: flex;
    align-items: center;

    .HouseDetail_infoBasicItem {
      box-sizing: border-box;
      flex: 1 1;
      margin-left: 0px;
      min-width: 10px;
      .HouseDetail_infoBasicTitle {
        display: inline-block;
        color: #999;
        padding-right: 5px;
        line-height: 26px;
      }
    }
  }
}
</style>
