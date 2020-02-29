import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
// 商品路由
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/Goods',
        name: 'Goods',
        component: () => import('../views/Goods.vue')
      },
      // 商品评论
      {
        path: '/GoodsComment',
        name: 'GoodsComment',
        component: () => import('../views/GoodsComment.vue')
      },
      {
        path: '/Merchant',
        name: 'Merchant',
        component: () => import('../views/Merchant.vue')
      },
    ]
  },
  // 商品公告
  {
    path: '/GoodsAffiche',
    name: 'GoodsAffiche',
    component: () => import('../views/GoodsAffiche.vue')
  },
  // 商品详情
  {
    path: '/GoodsDetails',
    name: 'GoodsDetails',
    component: () => import('../views/GoodsDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
