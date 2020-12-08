<template>
  <div id="UserSeting">
    <!-- 头部nav -->
     <div class="title_wrap">
      <van-nav-bar
        title="设置"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <!-- 设置列表 -->
    <div class="seting_wrap">
      <div class="seting_main_box">
        <van-cell title="用户头像">
          <template #right-icon>
            <!-- <van-icon name="search" class="search-icon" /> -->
            <div class="seting_UserImg">
              <van-uploader :after-read="afterRead" :preview-size="50" :max-count="1">
                <img :src="UserImg[0]" alt="" width="100%" height="auto">
              </van-uploader>
            </div>
          </template>
        </van-cell>
        <van-cell title="用户名" is-link value="MING."/>
        <van-cell title="消息通知" is-link />
        <van-cell title="隐私设置" is-link />
        <van-cell title="修改密码" is-link />
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
      UserImg: [
        require('../../assets/images/userIMG.png')
      ]
    }
  },
  // 模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
  // created() {},
  // 计算属性
  computed: {},
  // 在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
  mounted () {
    // window.addEventListener('scroll', this.watchScrool)
  },
  // 基本事件方法执行
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
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
.van-cell:first-child{
  line-height: 50px;
}
#UserSeting{
  width: 100%;
  height: auto;
}
/* 头部 */
#UserSeting .title_wrap{
  width: 100%;
  height: auto;
}
/* 设置列表 */
#UserSeting .seting_wrap{
  width: 100%;
  height: auto;
}

#UserSeting .seting_UserImg{
  width: 50px;
  height: 50px;
}
</style>
