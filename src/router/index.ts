import * as VueRouter from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AccountBookPage from '@/pages/AccountBookPage.vue'
import MiniPicture from '@/pages/MiniPicture.vue'
import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/accountBook', component: AccountBookPage, name: 'AccountBookPage' },
  { path: '/miniPicture', component: MiniPicture, name: 'MiniPicture' }
]

const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

export default router
