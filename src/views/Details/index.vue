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
            >{{ houseDetail.oriented && houseDetail.oriented[0] }}
          </div>
          <div>
            <span class="HouseDetail_infoBasicTitle">类型：</span>普通住宅
          </div>
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="HouseDetail_map">
      <div class="HouseDetail_mapTitle">小区：<span>天山星城</span></div>
      <div class="HouseDetail_mapContainer">
        <template>
          <baidu-map class="map" center="北京"> </baidu-map>
        </template>
      </div>
    </div>
    <!-- 房屋配套 -->
    <div class="HouseDetail_about">
      <!-- 标题 -->
      <div class="HouseDetail_houseTitle">房屋配套</div>
      <van-grid :column-num="5">
        <van-grid-item
          v-for="item in houseDetail.supporting"
          :key="item"
          :text="item"
        >
          <template #icon>
            <span
              :class="`iconfont icon-${
                {
                  电视: 'dianshiji',
                  洗衣机: 'xiyiji',
                  宽带: 'kuandai',
                  热水器: 'reshuiqi',
                  沙发: 'shafa',
                  衣柜: 'yigui',
                  冰箱: 'bingxiang',
                  暖气: 'nuanqi-',
                  天然气: 'tianranqi',
                  空调: 'kongtiao'
                }[item]
              }`"
            ></span>
          </template>
        </van-grid-item>
      </van-grid>

      <!-- <ul class="HousePackage_root">
        <li
          class="HousePackage_item"
          v-for="item in houseDetail.supporting"
          :key="item"
        >
          <p><van-icon name="passed" /></p>
          {{ item }}
        </li>
      </ul> -->
    </div>
    <!-- 房屋概况 -->
    <div class="HouseDetail_set">
      <div class="HouseDetail_houseTitle">房屋概况</div>
      <div>
        <div class="HouseDetail_contact">
          <div class="HouseDetail_user">
            <img src="http://liufusong.top:8080/img/avatar.png" />
            <div class="HouseDetail_useInfo">
              <div>王女士</div>
              <div class="HouseDetail_userAuth">
                <i><van-icon name="shield-o" /></i>已认证房主
              </div>
            </div>
          </div>
          <span class="HouseDetail_userMsg">发消息</span>
        </div>
        <div class="HouseDetail_descText">
          1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
          2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
          3.人车分流，环境优美。
          4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="HouseDetail_recommend">
      <div class="HouseDetail_houseTitle">猜你喜欢</div>
      <HouseList
        v-for="(item, index) in houseList"
        :key="index"
        :body="item"
      ></HouseList>
    </div>
    <!-- 底部栏 -->
    <div class="HouseDetail_bottom">
      <!-- 收藏 -->
      <div class="shoucang" @click="isShoucangFn">
        <van-icon v-if="isShoucang" name="star" />
        <van-icon class="staro" v-else name="star-o" />
        收藏
      </div>
      <!-- 在线咨询 -->
      <div class="online">在线咨询</div>
      <!-- 电话预约 -->
      <div class="phone"><a href="tel:400-618-4000">电话预约</a></div>
    </div>
  </div>
</template>

<script>
import { getHouseApi } from '@/api/house'
import { BASE_URL } from '@/utils'
import HouseList from '@/components/HouseList'

export default {
  components: { HouseList },

  data () {
    return {
      houseDetail: {},
      BASE_URL,
      // 猜你喜欢 静态数据
      houseList: [
        {
          desc: '72.32㎡/南 北/低楼层',
          houseCode: 'e4ac804d-a760-7ccf',
          houseImg: '/img/message/1.png',
          price: 4500,
          tags: ['随时看房'],
          title: '安贞西里 3室1厅'
        },
        {
          desc: '83㎡/南/高楼层',
          houseCode: 'e4ac804d-a760-7ccf',
          houseImg: '/img/message/2.png',
          price: 7200,
          tags: ['近地铁'],
          title: '天居园 2室1厅'
        },
        {
          desc: '52㎡/西南/低楼层',
          houseCode: 'e4ac804d-a760-7ccf',
          houseImg: '/img/message/3.png',
          price: 4300,
          tags: ['集中供暖'],
          title: '角门甲4号院 1室1厅'
        }
      ],
      // 收藏状态
      isShoucang: true
    }
  },
  async created () {
    // console.log();
    try {
      const code = JSON.parse(localStorage.getItem('HAOKE_CURRENTHOUSE_CODE'))
      // const res = await getHouseApi(this.$route.params.code)
      const res = await getHouseApi(code)
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
      localStorage.setItem('HAOKE_CURRENTHOUSE_CODE', '')
    },
    isShoucangFn () {
      this.isShoucang = !this.isShoucang
      if (this.isShoucang) {
        this.$toast.success('已添加至收藏')
      } else {
        this.$toast('已取消收藏')
      }
    }
  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #f5f5f9;
  z-index: 1111;
}
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
  background-color: #f5f5f9;

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
  .HouseDetail_map {
    margin-top: 10px;
    background: #fff;

    .HouseDetail_mapTitle {
      margin: 0 3%;
      line-height: 44px;
      font-size: 14px;

      color: #666;
    }
    .HouseDetail_mapContainer {
      // background-color: #39becd;
      height: 145px;
      overflow: hidden;
      position: relative;
      z-index: 0;
      background-color: rgb(243, 241, 236);
      color: rgb(0, 0, 0);
      .map {
        width: 100%;
        height: 100%;
      }
    }
  }
  .HouseDetail_houseTitle {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
    color: #333;
    background-color: #fff;
  }
  // 房屋配套
  .HouseDetail_about {
    margin-bottom: 10px;
    padding: 0 10px;
    background: #fff;
    /deep/.van-grid-item__content::after {
      border-width: 0;
    }
  }
  // 房屋概况
  .HouseDetail_set {
    margin-bottom: 10px;
    padding: 0 10px;
    background: #fff;
    font-size: 14px;

    .HouseDetail_contact {
      margin: 10px 0;
      line-height: 150%;
      position: relative;
      .HouseDetail_user {
        margin-bottom: 10px;
        display: flex;
        img {
          width: 52px;
          height: 52px;
          margin: 10px 10px 0 0;
        }
        .HouseDetail_useInfo {
          padding: 15px 0 0 5px;

          .HouseDetail_userAuth {
            color: #fa5741;
            font-size: 12px;
          }
        }
      }
      .HouseDetail_userMsg {
        // 发信息
        position: absolute;
        right: 15px;
        top: 20px;
        color: #33be85;
        border: 1px solid #33be85;
        border-radius: 3px;
        padding: 3px 15px;
      }
    }
    .HouseDetail_descText {
      line-height: 1.6;
      padding: 10px 0;
      color: #333;
    }
  }

  // 猜你喜欢
  .HouseDetail_recommend {
    margin-bottom: 50px;
    padding: 0 10px;
    background: #fff;
  }
  // 底部栏
  .HouseDetail_bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #cecece;
    text-align: center;
    font-size: 17px;
    color: #999;
    background-color: #fff;
    .shoucang {
      flex: 1;
      border-right: 1px solid #e8e8e9;

      .van-icon-star {
        color: #fa5741;
      }
    }
    .online {
      flex: 1;
      border-right: 1px solid #e8e8e9;
    }
    .phone {
      flex: 1;
      border-right: 1px solid #e8e8e9;
      background-color: #21b97a;
      // color: #fff;
      a {
        color: #fff;
      }
    }
  }
}
</style>
