<template>
  <div id="UserAddressAdd">
    <!-- 头部 -->
    <div class="title_wrap">
      <van-nav-bar
        title="标题"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <!-- 添加地址 -->
    <div class="AddressAdd_wrap">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import area from '../../utils/area'
export default {
  components: {},
  // 存放数据
  data () {
    return {
      areaList: {},
      searchResult: []
    }
  },
  // 模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
  created () {
    this.areaList = area.AddressList
  },
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
      this.$router.push('/useraddress')
    },
    onClickRight () {
      Toast('按钮')
    },
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: 'name',
            address: 'address'
          }
        ]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style scoped>
#UserAddressAdd {
  width: 100%;
  height: auto;
}
</style>
