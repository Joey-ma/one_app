<template>
  <div id="Classification">
    <div class="title_wrap">
      <!-- 搜索 -->
      <div class="title_search">
        <van-search v-model="value" shape="round" background="transparent" placeholder="请输入搜索关键词"/>
      </div>
    </div>
    <!-- 分类列表 -->
    <div class="classify_wrap">
      <div class="classify_main_box">
        <van-tree-select height="90vh" :items="items" :main-active-index.sync="active">
          <template #content>
            <div class="classify_item_box" v-if="active === 0">
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img" >
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
            </div>
            <div class="classify_item_box" v-if="active === 1">
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img" >
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
            </div>
            <div class="classify_item_box" v-if="active === 2">
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img" >
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img">
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
            </div>
            <div class="classify_item_box" v-if="active === 3">
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img" >
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
            </div>
            <div class="classify_item_box" v-if="active === 4">
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img" >
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
            </div>
            <div class="classify_item_box" v-if="active === 5">
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img" >
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
            </div>
            <div class="classify_item_box" v-if="active === 6">
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img" >
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
            </div>
            <div class="classify_item_box" v-if="active === 7">
              <router-link class="classify_item" tag="div" to="/goodslist">
                <div class="classify_item_img" >
                  <img :src="classImg[0]" alt="" width="100%" height="auto">
                </div>
              </router-link>
            </div>
          </template>
        </van-tree-select>
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
      active: 0,
      items: [
        { text: 'NIKE' },
        { text: 'JORDAN' },
        { text: 'ADIDAS' },
        { text: 'LI-NING' },
        { text: 'PUMA' },
        { text: 'VANS' },
        { text: 'NEW BALANCE' },
        { text: 'CONVERSE' }
      ],
      classImg: [
        require('../../assets/images/tab.png')
      ],
      value: ''
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
.van-search{
  padding: 0;
}
.van-sidebar-item{
  text-align: center;
}
#Classification{
  width: 100%;
  height: auto;
}
#Classification .title_wrap{
  width: 100%;
  height: 1rem;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 2px solid #eeeeee;
}
#Classification .title_search{
  width: 95%;
  height: auto;
  margin: 0 auto;
}
#Classification .classify_wrap{
  width: 100%;
  height: auto;
}
#Classification .classify_main_box{
  width: 100%;
  height: auto;
}
#Classification .classify_item_box{
  width: 100%;
  height: auto;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
#Classification .classify_item{
  width: 33%;
  height: 2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
</style>
