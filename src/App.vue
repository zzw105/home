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
        <a-layout-footer style="text-align: center">
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31012002005640"
            style="display: inline-block; text-decoration: none; height: 20px; line-height: 20px; margin-right: 10px"
            ><img src="@/assets/filingIcon.png" style="float: left" />
            <p style="float: left; height: 20px; line-height: 20px; margin: 0px 0px 0px 5px; color: #939393">沪公网安备 31012002005640号</p></a
          >

          <a style="display: inline-block; text-decoration: none; height: 20px; line-height: 20px"
            ><img src="" style="float: left" />
            <p style="float: left; height: 20px; line-height: 20px; margin: 0px 0px 0px 5px; color: #939393">沪ICP备2022024506号-1</p></a
          >
        </a-layout-footer>
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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #ededed;
  }
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

.hand {
  cursor: pointer;
}
</style>
