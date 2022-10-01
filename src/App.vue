<template>
  <a-layout class="mainBox">
    <!-- 头部 -->
    <a-layout-header class="header">
      <div class="titleBox">
        <img src="@/assets/one.png" alt="105" />
        <div class="title">105的个人主页</div>
      </div>
    </a-layout-header>
    <a-layout>
      <!-- 菜单 -->
      <a-layout-sider width="200" style="background: #fff">
        <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <a-menu-item key="1" @click="routerPush('HomePage')">
            <home-outlined />
            主页
          </a-menu-item>
          <a-sub-menu key="2">
            <template #title>
              <span>
                <laptop-outlined />
                个人项目
              </span>
            </template>
            <a-menu-item key="21" @click="routerPush('AccountBookPage')">账本</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px 24px 16px 24px">
        <!-- 主显示区 -->
        <a-layout-content class="contentBox"> <router-view /> </a-layout-content>
        <!-- 底部 -->
        <a-layout-footer style="text-align: center"> 沪ICP备2022024506号-1 </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LaptopOutlined, HomeOutlined } from '@ant-design/icons-vue'

const router = useRouter()
const route = useRoute()

const selectedKeys = ref(['1'])
const openKeys = ref(['2'])

const routerPush = (name: string) => {
  router.push({ name })
}
watch(route, (newValue) => {
  let key = '0'
  switch (newValue.name) {
    case 'HomePage':
      key = '1'
      break
    case 'AccountBookPage':
      key = '21'
      break
    default:
      break
  }
  selectedKeys.value = [key]
})
</script>

<style scoped lang="less">
.titleBox {
  display: flex;
  align-items: center;
  height: 100%;
  img {
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
  }
}
.contentBox {
  background: #fff;
  padding: 24px;
  margin: 16px 0;
  min-height: 280px;
}
</style>
<style lang="less">
#app,
.mainBox {
  height: 100%;
}
.ant-layout-header {
  background: rgb(166, 166, 166);
}
.ant-layout-footer {
  padding: 0;
}
</style>
