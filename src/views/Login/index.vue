<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="backPrePage" />
    <van-form @submit="loginFn">
      <van-field v-model="username" name="账号" placeholder="请输入账号" />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="text"><a>还没有账号，去注册~</a></div>
  </div>
</template>

<script>
import { loginApi } from '@/api/login'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    backPrePage () {
      this.$router.back()
    },
    async loginFn () {
      const usernameRegExp = /^[a-zA-Z0-9]{5,8}$/
      const passwordRegExp = /^[a-zA-Z0-9]{5,12}$/
      //   console.log('submit', values)
      if (this.username.trim() === '' || this.password.trim() === '') {
        this.$toast('用户名和密码不能为空')
      } else if (!usernameRegExp.test(this.username)) {
        this.toast('用户名格式5-8位的字母和数字')
      } else if (!passwordRegExp.test(this.password)) {
        this.toast('密码格式5-12位的字母和数字')
      } else if (usernameRegExp.test(this.username) && passwordRegExp.test(this.password)) {
        this.$toast.loading({ message: '加载中...', forbidClick: true })
        const res = await loginApi(this.username, this.password)
        // console.log(res)
        if (res.status === 200) {
          // 存入token
          localStorage.setItem('HAOKE_USER', JSON.stringify(res.data.body))
          this.$toast.success({
            onClose: () => {
              this.$router.push({
                path: '/layout/my'
              })
              // console.log(111);
            },
            message: '登录成功'
          })
          // this.$router.push({
          //   path: '/my'
          // })
        } else {
          this.$toast.fail('登录失败')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #21b97a;
  margin-bottom: 21px;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}
.van-button--info {
  background-color: #21b97a;
  border: 1px solid #21b97a;
}
.text {
  text-align: center;
  color: #666;
  font-size: 14px;
}
</style>
