<template>
  <div id="OrderInfo">
    <!-- 头部 -->
    <div class="title_wrap">
      <van-nav-bar
        title="订单详情"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <!-- 详情 -->
    <div class="info_wrap">
      <div class="info_main_box"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  // 存放数据
  data () {
    return {

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
    onClickLeft () {
      // Toast('返回')
      this.$router.push('/orderlist')
    },
    onClickRight () {
      // Toast('按钮')
    }
  }
}
</script>

<style scoped>
#nav{
  display: none;
}
#OrderInfo{
  width: 100%;
  height: auto;
}
/* 头部 */
#OrderInfo .title_wrap{
  width: 100%;
  height: 1rem;
}
/* 详情 */
#OrderInfo .info_wrap{
  width: 100%;
  height: auto;
}
</style>
