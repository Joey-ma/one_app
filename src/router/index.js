import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 购物车
  {
    path: '/shopcar',
    name: 'ShopCar',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/ShopCar.vue')
  },
  // 商品分类
  {
    path: '/goodsclass',
    name: 'GoodsClass',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/goods/GoodsClass.vue')
  },
  // 商品列表
  {
    path: '/goodslist',
    name: 'GoodsList',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/goods/GoodsList.vue')
  },
  // 商品详情
  {
    path: '/goodsinfo',
    name: 'GoodsInfo',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/goods/GoodsInfo.vue')
  },
  // 订单
  {
    path: '/orderlist',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/order/OrderList.vue')
  },
  // 订单详情
  {
    path: '/orderinfo',
    name: 'OrderInfo',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/order/OrderInfo.vue')
  },
  // 用户
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/user/User.vue')
  },
  // 地址列表
  {
    path: '/useraddress',
    name: 'UserAddress',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/user/UserAddress.vue')
  },
  // 修改地址
  {
    path: '/useraddressEdit',
    name: 'UserAddressEdit',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/user/UserAddressEdit.vue')
  },
  // 添加地址
  {
    path: '/useraddressAdd',
    name: 'UserAddressAdd',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/user/UserAddressAdd.vue')
  },
  // 设置
  {
    path: '/userseting',
    name: 'UserSeting',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/user/UserSeting.vue')
  },
  // 购买
  {
    path: '/buy',
    name: 'Buy',
    component: () => import(/* webpackChunkName: "Classification" */ '../views/Buy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
