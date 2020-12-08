<template>
  <div id="home">
    <!-- 头部 -->
    <div class="title_wrap">
      <div class="title_main_box">
        <!-- 搜索 -->
        <div class="title_search">
          <van-search v-model="value" shape="round" background="transparent" placeholder="请输入搜索关键词"/>
        </div>
      </div>
    </div>

    <!-- banner -->
    <div class="banner_wrap">
      <div class="banner_main_box">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in bannerImgs" :key="index">
            <img :src="image" width="100%" height="auto"/>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!-- 分类 -->
    <div class="classify_wrap">
      <div class="classify_main_box">
        <van-grid :column-num="5" :border='false'>
          <van-grid-item icon="photo-o" text="" />
          <van-grid-item icon="photo-o" text="" />
          <van-grid-item icon="photo-o" text="" />
          <van-grid-item icon="photo-o" text="" />
          <van-grid-item icon="photo-o" text="" />
        </van-grid>
      </div>
    </div>

    <!-- 推荐卡片 -->
    <div class="card_wrap">
      <div class="card_main_box">
        <div class="card_item_box">
          <div class="card_item_L CBdr_R">
            <div class="card_item_L_img">
              <!-- <img :src="cardImgs[0]" width="100%" height="auto"/> -->
            </div>
          </div>
          <div class="card_item_R">
            <div class="card_item_R_one CBdr_B">
              <!-- <img :src="cardImgs[1]" width="100%" height="auto"/> -->
            </div>
            <div class="card_item_R_two">
              <div class="CBdr_R">
              <!-- <img :src="cardImgs[2]" width="100%" height="auto"/> -->
              </div>
              <div>
              <!-- <img :src="cardImgs[3]" width="100%" height="auto"/> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="commodity_wrap">
      <div class="commodity_main_box">
        <van-tabs v-model="active" sticky animated swipeable title-active-color="#FF6600" color="#FF6600">
          <van-tab title="TAB1">
            <div class="commodity_item_box">
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
            </div>
          </van-tab>
          <van-tab title="TAB2">
            <div class="commodity_item_box">
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
            </div>
          </van-tab>
          <van-tab title="TAB3">
            <div class="commodity_item_box">
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
            </div>
          </van-tab>
          <van-tab title="TAB4">
            <div class="commodity_item_box">
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
              <div class="commodity_item"></div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  // 存放数据
  data () {
    return {
      bannerImgs: [
        require('../assets/images/banner1.jpg'),
        require('../assets/images/banner2.jpg'),
        require('../assets/images/banner3.jpg')
      ],
      cardImgs: [

      ],
      value: '',
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
  methods: {}
}
</script>

<style scoped>
/* vant */
.van-search{
  padding: 0;
}
.van-swipe-item{
  height: auto;
}
.CBdr_R{
  border-right: 1px solid #a0a0a0;
}
.CBdr_B{
  border-bottom: 1px solid #a0a0a0;
}
#home {
  width: 100%;
  height: auto;
}
/* 头部 */
#home .title_wrap{
  width: 100%;
  height: 1.2rem;
  background-color: #ffffff;
  border-bottom: 2px solid #eeeeee;
}
#home .title_main_box{
  width: 100%;
  height: 1.2rem;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
#home .title_search{
  width: 90%;
}
/* banner */
#home .banner_wrap{
  width: 100%;
  height: auto;
  position: relative;
}
#home .banner_main_box{
  width: 100%;
  height: auto;
  margin: 0 auto;
}
#home .banner_main_box img{
  width: 100%;
  height: 100%;
}
/* 分类 */
#home .classify_wrap{
  width: 100%;
  height: auto;
  margin: 0 auto;
}
/* 推荐卡片 */
#home .card_wrap{
  width: 100%;
  height: 4rem;
  margin-top: .2rem;
  background-color: #FFFFFF;
}
#home .card_main_box{
  width: 100%;
  height: 4rem;
}
#home .card_item_box{
  width: 100%;
  height: 4rem;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
#home .card_item_L{
  width: 38%;
  height: 4rem;
  background-color: #FFFFFF;
}
#home .card_item_R{
  width: 62%;
  height: 4rem;
  background-color: #FFFFFF;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#home .card_item_R_one,
#home .card_item_R_two{
  width: 100%;
  height: 2rem;
  box-sizing: border-box;
}
#home .card_item_R_one{
  background-color: #FFFFFF;
}
#home .card_item_R_two{
  background-color: #FFFFFF;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
#home .card_item_R_two div{
  width: 50%;
  height: 2rem;
  box-sizing: border-box;
}
/* 商品列表 */
#home .commodity_wrap{
  width: 100%;
  height: auto;
  margin-top: .2rem;
}
#home .commodity_main_box{
  width: 100%;
  height: auto;
}
#home .commodity_item_box{
  width: 100%;
  height: auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 3px solid #eeeeee;
}
#home .commodity_item{
  width: 49.3%;
  height: 5rem;
  margin-bottom: .1rem;
  background-color: #FFFFFF;
}
</style>
