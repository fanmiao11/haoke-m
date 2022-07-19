<template>
  <div class="city">
    <van-nav-bar title="城市列表" left-arrow @click-left="backPrePage" />
    <div>
      <van-index-bar sticky :sticky-offset-top="45" :index-list="indexList">
        <van-index-anchor index="#">当前城市</van-index-anchor>
        <van-cell :title="$store.state.currentCity" />

        <van-index-anchor index="热">热门城市</van-index-anchor>
        <van-cell
          v-for="item in hotList"
          :key="item.label"
          :title="item.label"
          @click="cityClick($event, item.value)"
        />

        <div v-for="(item, index) in allAreaList" :key="index">
          <van-index-anchor :index="index"> {{ index }} </van-index-anchor>
          <van-cell
            v-for="ele in item"
            :key="ele.label"
            :title="ele.label"
            @click="cityClick($event, ele.value)"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { getAreaApi, getHotAreaApi } from '@/api/area'
export default {
  data () {
    return {
      indexList: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      areaList: [],
      hotList: []
    }
  },
  methods: {
    backPrePage () {
      this.$router.back()
    },
    cityClick (e, value) {
      // console.log(e.target.innerText);
      if (value) {
        this.$store.commit('setCurrentCity', e.target.innerText)
        this.$store.commit('setCurrentCityValue', value)

        // console.log('curr',this.$store.state.currentCityValue);
        this.$router.back()
      } else {
        this.$toast('暂无城市')
      }
    }
  },
  async created () {
    try {
      // 获取城市列表数据
      const areaRes = await getAreaApi()
      console.log(areaRes)
      this.areaList = areaRes.data.body

      // 获取热门城市数据
      const {
        data: { body }
      } = await getHotAreaApi()
      // console.log(body)
      this.hotList = body
    } catch (e) {
      console.log(e.message)
    }
    // console.log(this.allAreaList)
  },
  computed: {
    allAreaList () {
      // console.log(this.areaList);
      // 先生成一个从A到Z的对象 result
      const result = {}
      for (let i = 65; i < 91; i++) {
        result[String.fromCharCode(i)] = []
      }
      // 遍历城市数据，把首字母相同的数据存在同一个数组中
      this.areaList.forEach((item) => {
        const letter = item.short[0].toUpperCase()
        result[letter].push(item)
      })
      // console.log(result)
      // 遍历对象 对每一项数组进行从a到z的排序
      for (const key in result) {
        if (result[key].length === 0) {
          result[key].push({ label: '暂无城市' })
        } else {
          result[key].sort((a, b) => {
            const A = a.pinyin.toUpperCase()
            const B = b.pinyin.toUpperCase()
            if (A < B) {
              return -1
            }
            if (A > B) {
              return 1
            }
            return 0
          })
        }
      }
      console.log(result)
      return result
    }
  }
}
</script>

<style lang="less" scoped>
.city {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 45px;
}
/deep/.van-nav-bar {
  position: fixed;
  height: 45px;
  width: 100%;
  z-index: 111;
  margin-top: -45px;
  background-color: #21b97a;
  .van-icon,
  .van-nav-bar__title {
    color: #fff;
  }
}
/deep/.van-index-bar {
  // padding-top: 45px;
  overflow: hidden;
  .van-index-anchor {
    font-size: 14px;
    padding: 10px 15px;
    color: #999;
  }

  // 侧边索引栏样式
  .van-index-bar__sidebar {
    top: 50px;
    transform: none;

    .van-index-bar__index {
      margin: 7px 6px 0px 0px;
      padding: 0;
    }
    // 侧边栏索引激活状态
    .van-index-bar__index--active {
      color: #fff;
      background-color: #21b97a;
      border-radius: 100%;
      display: inline-block;
      font-size: 12px;
      width: 15px;
      height: 15px;
      line-height: 15px;
    }
  }
}
</style>
