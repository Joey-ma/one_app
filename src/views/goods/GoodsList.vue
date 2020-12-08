<template>
  <div id="GoodsList">
    <div class="title_wrap">
      <!-- 搜索 -->
      <div class="title_search">
        <van-search v-model="value" shape="round" background="transparent" placeholder="请输入搜索关键词"/>
      </div>
    </div>
    <!-- 列表 -->
    <div class="goods_wrap">
      <div class="goods_main_box">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
          <div class="goods_item_box">
            <router-link class="goods_item" tag="div" to="/goodsinfo">
              <div class="goods_item_img">
                <img :src="goodsImg[0]" alt="" width="100%" height="auto">
              </div>
              <div class="goods_item_main centerText">
                <div class="goods_item_title">
                  <h3>标题</h3>
                </div>
                <div class="goods_item_price">
                  <p>998.00起</p>
                </div>
              </div>
            </router-link>
            <router-link class="goods_item" tag="div" to="/goodsinfo">
              <div class="goods_item_img">
                <img :src="goodsImg[0]" alt="" width="100%" height="auto">
              </div>
              <div class="goods_item_main centerText">
                <div class="goods_item_title">
                  <h3>标题</h3>
                </div>
                <div class="goods_item_price">
                  <p>998.00起</p>
                </div>
              </div>
            </router-link>
            <router-link class="goods_item" tag="div" to="/goodsinfo">
              <div class="goods_item_img">
                <img :src="goodsImg[0]" alt="" width="100%" height="auto">
              </div>
              <div class="goods_item_main centerText">
                <div class="goods_item_title">
                  <h3>标题</h3>
                </div>
                <div class="goods_item_price">
                  <p>998.00起</p>
                </div>
              </div>
            </router-link>
          </div>
        </van-list>
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
      value: '',
      list: [],
      loading: false,
      finished: false,
      goodsImg: [
        require('../../assets/images/timg.jpg')
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
    onLoad () {
      console.log('加载')
    }
  }
}
</script>

<style scoped>
.van-search{
  padding: 0;
}
#GoodsList{
  width: 100%;
  height: auto;
}
#GoodsList .title_wrap{
  width: 100%;
  height: 1rem;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 2px solid #eeeeee;
}
#GoodsList .title_search{
  width: 95%;
  height: auto;
  margin: 0 auto;
}
#GoodsList .goods_wrap{
  width: 100%;
  height: auto;
}
#GoodsList .goods_item_box{
  width: 100%;
  height: auto;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
#GoodsList .goods_item{
  width: 50%;
  height: 5rem;
  background-color: #ffffff;
}
#GoodsList .goods_item_img{
  width: 100%;
  height: 3.8rem;
}
#GoodsList .goods_item_img img{
  width: 100%;
  height: 100%;
}
#GoodsList .goods_item_main{
  width: 95%;
  height: 1rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: .1rem;
}
#GoodsList .goods_item_title{
  width: 100%;
  height: auto;
}
#GoodsList .goods_item_title h3{
  font-size: .35rem;
  font-weight: 500;
}
#GoodsList .goods_item_price{
  width: 100%;
  height: auto;
}
#GoodsList .goods_item_price p{
  font-size: .3rem;
  color: #ff6600;
}
</style>
