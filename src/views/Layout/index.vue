<template>
  <div>
    <router-view class="body"></router-view>
    <van-tabbar active-color="#21b97a" inactive-color="#000" route>
      <van-tabbar-item to="/layout/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/find" icon="search">找房</van-tabbar-item>
      <van-tabbar-item to="/layout/news" icon="newspaper-o">资讯</van-tabbar-item>
      <van-tabbar-item to="/layout/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.body{
  margin-bottom: 50px;
}

</style>
