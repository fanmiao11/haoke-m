<template>
  <div class="my">
    <div class="My_title">
      <img style="width: 100%" :src="`http://liufusong.top:8080${avatar}`" />
      <div class="My_info">
        <div class="My_icon">
          <van-image
            round
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />
        </div>
        <!-- status=0 未登录 -->
        <div class="My_user" v-if="status === 0">
          <div class="My_name">{{ nickname }}</div>
          <div class="My_btn">
            <van-button size="mini" class="user_btn" type="primary" to="/login">
              去登录
              </van-button
            >
          </div>
        </div>
        <div class="My_user" v-else>
          <div class="My_name">{{ nickname }}</div>
          <div class="My_btn">
            <van-button
              size="mini"
              class="user_btn_out"
              type="primary"
              to="/login"
              >退出</van-button
            >
          </div>
          <div class="My_edit">
            <span>编辑个人资料</span><van-icon name="play" />
          </div>
        </div>
      </div>
    </div>

    <div class="am-grid">
      <van-grid clickable :column-num="3">
        <van-grid-item to="/" icon="star-o" text="我的收藏" />
        <van-grid-item to="/" icon="wap-home-o" text="我的出租" />
        <van-grid-item to="/" icon="underway-o" text="看房记录" />
        <van-grid-item to="/" icon="credit-pay" text="成为房主" />
        <van-grid-item to="/" icon="manager-o" text="个人资料" />
        <van-grid-item to="/" icon="service-o" text="联系我们" />
      </van-grid>
    </div>

    <div class="ad">
      <img src="http://liufusong.top:8080/img/profile/join.png" />
    </div>
  </div>
</template>

<script>
import { getUserApi } from '@/api/user'
export default {
  data () {
    return {
      status: 0, // 0未登录 1登录
      avatar: '/img/profile/bg.png', // 背景图
      nickname: '游客' // 用户昵称
    }
  },
  async created () {
    // console.log(JSON.parse(localStorage.getItem('HAOKE_USER')));
    const token = JSON.parse(localStorage.getItem('HAOKE_USER')).token
    const res = await getUserApi(token)
    // console.log(res);
    this.status = 1
    this.avatar = res.data.body.avatar
    this.nickname = res.data.body.nickname
  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.My_title {
  width: 100%;
  min-height: 300px;
  position: relative;
  .My_info {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .My_icon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
    }
    .My_user {
      .My_name {
        margin-bottom: 10px;
      }

      .My_edit {
        margin-top: 20px;
        color: #999;
        font-size: 12px;
      }
      .user_btn {
        border-radius: 5px;
        border: 1px solid #108ee9;
        font-size: 13px;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
      }
      .user_btn_out {
        border-radius: 30px;
        color: #fff;
        padding: 2px 15px;
        background: #21b97a;
        font-size: 12px;
      }
    }
  }
}
.am-grid {
  margin-top: 10px;
  /deep/.van-grid-item__content::after {
    border-width: 0;
  }
  [class*='van-hairline']::after {
    border: 0;
  }
}
.ad {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  img {
    width: 92%;
  }
}
</style>
