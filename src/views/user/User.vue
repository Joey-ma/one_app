<template>
  <div id="User">
    <!-- 头部nav -->
    <div class="title_wrap">
      <van-nav-bar title="我的" :border="false"/>
    </div>
    <!-- 用户信息 -->
    <div class="user_wrap">
      <div class="user_main_box">
        <!-- 用户头像 -->
        <div class="user_title_box">
          <div class="user_title_img">
            <img :src="userImg[0]" alt="" width="100%" height="auto">
          </div>
          <div class="user_title_name centerText">
            <h1>MING.</h1>
          </div>
        </div>
        <!-- 菜单栏 -->
        <div class="user_meun_box">
          <van-grid :column-num="4" :border="false">
            <van-grid-item icon="photo-o" text="待付款" to="/orderlist"/>
            <van-grid-item icon="photo-o" text="待发货" to="/orderlist"/>
            <van-grid-item icon="photo-o" text="待收货" to="/orderlist"/>
            <van-grid-item icon="photo-o" text="订单管理" to="/orderlist" />
          </van-grid>
        </div>
        <!-- 个人信息列表 -->
        <div class="user_item_box">
          <div class="user_item">
            <van-cell title="收货地址" is-link to="/useraddress"/>
            <van-cell title="帮助中心" is-link />
            <van-cell title="关于我们" is-link @click="AboutShow = true"/>
            <van-action-sheet v-model="AboutShow" title="关于我们">
              <div class="AboutCont">关于我们内容</div>
            </van-action-sheet>
            <van-cell title="设置" is-link to="/userseting"/>
          </div>
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
      userImg: [
        require('../../assets/images/userIMG.png')
      ],
      AboutShow: false
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
.van-nav-bar{
  background-color: rgba(0, 0, 0, .7);
  height: 1rem;
}
::v-deep .van-ellipsis{
  color: #ffffff;
}

#User{
  width: 100%;
  height: 90vh;
}
/* 头部nav */
#User .title_wrap{
  width: 100%;
  height: 1rem;
}
/* 用户信息 */
#User .user_wrap{
  width: 100%;
  height: auto;
}
#User .user_main_box{
  width: 100%;
  height: auto;
}
/* 用户头像 */
#User .user_title_box{
  width: 100%;
  height: 3.3rem;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: .1rem;
}
#User .user_title_img{
  width: 1.85rem;
  height: 1.85rem;
  border-radius: 50%;
  margin-bottom: .25rem;
}
#User .user_title_img img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
#User .user_title_name{
  width: 100%;
  height: auto;
}
#User .user_title_name h1{
  font-size: .5rem;
  color: #ffffff;
}

/* 菜单栏 */
#User .user_meun_box{
  width: 100%;
  height: 1.8rem;
  background-color: #ffffff;
}
/* 个人信息列表 */
#User .user_item_box{
  width: 100%;
  height: auto;
  margin-top: .2rem;
}
#User .user_item{
  width: 100%;
  height: auto;
}
#User .AboutCont{
  padding: .3rem;
}
</style>
