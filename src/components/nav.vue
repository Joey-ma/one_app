<template>
  <div id="nav">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/goodsclass">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { Notify } from 'vant'
export default {
  // 存放数据
  data () {
    return {
      active: 0
    }
  },
  // 模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
  // created: {},
  // 计算属性
  computed: {},
  // 在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
  mounted () {
    // window.addEventListener('scroll', this.watchScrool)
  },
  // 基本事件方法执行
  methods: {
    // onChange (index) {
    //   Notify({ type: 'primary', message: index })
    // }
  }
}
</script>

<style scoped>
#nav {
  width: 100%;
  height: 1rem;
}
</style>
