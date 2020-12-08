<template>
  <div id="ShopCar">
    <!-- 头部 -->
    <div class="title_wrap">
      <van-nav-bar title="购物车" :border="false"/>
    </div>
    <!-- 商品列表 -->
    <div class="goods_wrap">
      <div class="goods_item_box">
        <!-- 列表 -->
        <div class="goods_item">
          <van-swipe-cell>
            <van-card num="1" price="998.00" desc="描述信息" title="商品标题" class="goods-card" thumb="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </div>
        <div class="goods_item">
          <van-swipe-cell>
            <van-card num="1" price="998.00" desc="描述信息" title="商品标题" class="goods-card" thumb="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </div>
        <div class="goods_item">
          <van-swipe-cell>
            <van-card num="1" price="998.00" desc="描述信息" title="商品标题" class="goods-card" thumb="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </div>
        <div class="goods_item">
          <van-swipe-cell>
            <van-card num="1" price="998.00" desc="描述信息" title="商品标题" class="goods-card" thumb="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </div>
        <div class="goods_item">
          <van-swipe-cell>
            <van-card num="1" price="998.00" desc="描述信息" title="商品标题" class="goods-card" thumb="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </div>
      </div>
      <!-- buy -->
      <div class="goods_buy">
        <van-submit-bar :price="8888" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
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
      checked: ''
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
    onSubmit () {
      console.log('提交成功')
    }
  }
}
</script>

<style scoped>
.van-nav-bar{
  height: 1rem;
}
.van-submit-bar{
  position: unset;
}
.goods-card {
  height: 2.1rem;
  margin: 0;
  background-color: #ffffff;
}
.delete-button {
  height: 100%;
}
#ShopCar{
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
#ShopCar .title_wrap{
  width: 100%;
  height: 1rem;
  box-sizing: border-box;
}
#ShopCar .goods_wrap{
  width: 100%;
  height: auto;
}
#ShopCar .goods_item_box{
  width: 100%;
  height: auto;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#ShopCar .goods_item{
  width: 100%;
  height: 2.1rem;
  background-color: #ffffff;
  margin-top: .15rem;
}
#ShopCar .goods_buy{
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 50px;
}
</style>
