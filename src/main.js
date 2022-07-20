import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入字体图标
import '@/assets/fonts/font/iconfont.css'

import 'amfe-flexible'

import Vant from 'vant'
import 'vant/lib/index.css'

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '2uyN3SVDXW3U7BZ3gMv4T5gBtvYBm0B5'
})

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
