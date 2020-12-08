<template>
  <div id="UserAddress">
    <!-- 头部 -->
    <div class="title_wrap">
      <van-nav-bar
        title="地址管理"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <!-- 列表 -->
    <div class="address_wrap">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
// import { Toast } from 'vant'
export default {
  components: {},
  // 存放数据
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '138',
          isDefault: true
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '50'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '15'
        }
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
      this.$router.push('/user')
    },
    onAdd () {
      // Toast('新增地址')
      this.$router.push('/UserAddressEdit')
    },
    onEdit (item, index) {
      // Toast('编辑地址:' + index)
      this.$router.push('/UserAddressEdit')
    }
  }
}
</script>

<style scoped>
.van-address-list__bottom{
  background-color: transparent;
}
#UserAddress{
  width: 100%;
  height: auto;
}
/* 头部 */
#UserAddress .title_wrap{
  width: 100%;
  height: auto;
}
/* 列表 */
#UserAddress .address_wrap{
  width: 100%;
  height: auto;
}
</style>
