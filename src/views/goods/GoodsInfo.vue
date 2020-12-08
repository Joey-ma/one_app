<template>
  <div id="GoodsInfo">
    <!-- 头部 -->
    <div class="title_wrap">
      <van-nav-bar title="标题" left-text="" right-text="分享" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
      <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options"/>
    </div>
    <!-- 内容 -->
    <div class="info_wrap">
      <div class="info_main_box">
        <!-- 图片 -->
        <div class="info_img_box">
          <van-swipe :autoplay="0">
            <van-swipe-item v-for="(image, index) in infoImg" :key="index">
              <img :src="image" width="100%" height="auto"/>
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 名称 -->
        <div class="info_title_box">
          <div class="info_title_name">
            <h3>标题</h3>
          </div>
          <div class="info_title_price">
            <p>998.00</p>
          </div>
        </div>
        <!-- 颜色分类 -->
        <div class="info_item_box">
          <div class="info_item"></div>
        </div>
        <!-- 详情 -->
        <div class="info_cont_box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  components: {},
  // 存放数据
  data () {
    return {
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' }
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' }
        ]
      ],
      infoImg: [
        require('../../assets/images/banner1.jpg'),
        require('../../assets/images/banner2.jpg'),
        require('../../assets/images/banner3.jpg')
      ]
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
      Toast('返回')
    },
    onClickRight () {
      // Toast('按钮')
      this.showShare = true
    }
  }
}
</script>

<style scoped>
#GoodsInfo{
  width: 100%;
  height: auto;
}
/* title */
#GoodsInfo .title_wrap{
  width: 100%;
  height: auto;
}
/* 内容 */
#GoodsInfo .info_wrap{
  width: 100%;
  height: auto;
}
#GoodsInfo .info_main_box{
  width: 100%;
  height: auto;
}
/* 图片 */
#GoodsInfo .info_img_box{
  width: 100%;
  height: auto;
}
#GoodsInfo .info_img_box img{
  width: 100%;
  height: 100%;
}
/* 名称 */
#GoodsInfo .info_title_box{
  width: 100%;
  height: 2rem;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
}
#GoodsInfo .info_title_name{
  width: 90%;
  height: 1.2rem;
  margin: 0 auto;
}
#GoodsInfo .info_title_name h3{
  font-size: .45rem;
  font-weight: 500;
}
#GoodsInfo .info_title_price{
  width: 90%;
  height: auto;
  margin: 0 auto;
}
#GoodsInfo .info_title_price p{
  font-size: .35rem;
  color: #ff6600;
}
/* 颜色分类 */
#GoodsInfo .info_item_box{
  width: 100%;
  height: 2rem;
  margin-top: .1rem;
  background-color: #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
}
/* 详情 */
#GoodsInfo .info_cont_box{
  width: 100%;
  height: 3rem;
  margin-top: .2rem;
  background-color: #ffffff;
}
</style>
