<template>
  <div id="app">
    <!-- <titles></titles> -->
    <router-view/>
    <navs :style="this.$route.path == '/useraddress' || this.$route.path == '/orderinfo' || this.$route.path == '/orderlist' || this.$route.path == '/UserAddressEdit' || this.$route.path == '/UserAddressEdit' ? 'display:none' : 'display:block'"></navs>
  </div>
</template>

<style>
@import './utils/common.css';
#app{
  width: 100%;
  height: auto;
}
</style>

<script>
// import titles from './components/title'
import navs from './components/nav'
export default {
  // 存放数据
  data () {
    return {}
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
  methods: {},
  components: {
    // titles,
    navs
  }
}
</script>
