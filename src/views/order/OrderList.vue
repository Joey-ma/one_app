<template>
  <div id="OrderList">
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
    <!-- 筛选 -->
    <div class="sizer_wrap">
      <van-dropdown-menu active-color="#ff6600">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <!-- 列表 -->
    <div class="order_wrap">
      <div class="order_main_box">
        <div class="order_item_box">
          <router-link class="order_item" tag="div" to="/orderinfo" v-for="(images, index) in orderImg" :key="index">
            <div class="order_item_img">
              <img :src="images" alt="" width="100%" height="auto">
            </div>
            <div class="order_item_main">
              <div class="order_item_title">
                <div class="order_item_name">
                  <h3>标题</h3>
                </div>
                <div class="order_item_status">
                  <h3>状态</h3>
                </div>
              </div>
              <div class="order_item_cont">
                <p>type</p>
                <p>size</p>
              </div>
              <div class="order_item_price">
                <p>date</p>
                <p>price</p>
              </div>
            </div>
          </router-link>
        </div>
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
      orderImg: [
        require('../../assets/images/banner1.jpg'),
        require('../../assets/images/banner2.jpg'),
        require('../../assets/images/banner3.jpg')
      ],
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部', value: 0 },
        { text: '交易完成', value: 1 },
        { text: '未付款', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '时间倒序', value: 'b' }
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
      // Toast('返回')
      this.$router.push('/user')
    },
    onClickRight () {
      // Toast('按钮')
    }
  }
}
</script>

<style scoped>
#OrderList{
  width: 100%;
  height: auto;
}
/* 头部 */
#OrderList .title_wrap{
  width: 100%;
  height: 1rem;
}
/* 筛选 */
#OrderList .sizer_wrap{
  width: 100%;
  height: 1rem;
}
/* 列表 */
#OrderList .order_wrap{
  width: 100%;
  height: auto;
}
#OrderList .order_main_box{
  width: 100%;
  height: auto;
}
#OrderList .order_item_box{
  width: 100%;
  height: auto;
}
#OrderList .order_item{
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem .3rem;
  background-color: #FFFFFF;
}
#OrderList .order_item_img{
  width: 30%;
  height: 1.6rem;
}
#OrderList .order_item_img img{
  width: 100%;
  height: 100%;
}
#OrderList .order_item_main{
  width: 68%;
  height: 1.6rem;
}

#OrderList .order_item_title{
  width: 100%;
  height: .6rem;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
#OrderList .order_item_name{
  width: 80%;
  height: .6rem;
}
#OrderList .order_item_name h3{
  font-size: .33rem;
  font-weight: 500;
}
#OrderList .order_item_status{
  width: 20%;
  height: .6rem;
}
#OrderList .order_item_status h3{
  text-align: right;
  font-size: .25rem;
  color: #df4634;
  font-weight: 500;
}
#OrderList .order_item_cont{
  width: 100%;
  height: .5rem;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  align-items: center;
}
#OrderList .order_item_cont p{
  font-size: .25rem;
  color: #818181;
}
#OrderList .order_item_cont p:not(:last-child){
  margin-right: .2rem;
}
#OrderList .order_item_price{
  width: 100%;
  height: .5rem;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
#OrderList .order_item_price p{
  font-size: .25rem;
  color: #aaaaaa;
}
</style>
