<template>
  <div>
    <a-row>
      <a-col :span="2" class="label">主页:</a-col>
      <a-col :span="22" class="hand" @click="toProjectAddress">https://www.zzw105.com/accountBook</a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="2" class="label">版本号:</a-col>
      <a-col :span="22">v0.1.1</a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="2" class="label">图片:</a-col>
      <a-col :span="22" class="imgCol">
        <a-button type="dashed" class="imgBtn" @click="changeShowImg">{{ isShowImg ? '折叠图片' : '展开图片' }}</a-button>
        <template v-if="isShowImg">
          <img v-if="isShowImg" src="@/assets/AccountBook/img/1.jpg" alt="" />
          <img v-if="isShowImg" src="@/assets/AccountBook/img/2.jpg" alt="" />
          <img v-if="isShowImg" src="@/assets/AccountBook/img/3.jpg" alt="" />
        </template>
        <template v-else> 图片已折叠 </template>
      </a-col>
    </a-row>
    <a-divider />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toProjectAddress = () => {
  document.location.href = 'https://www.zzw105.com/accountBook'
}
const isShowImg = ref(true)

const changeShowImg = () => {
  isShowImg.value = !isShowImg.value
}
</script>

<style scoped lang="less">
.ant-row {
  font-size: 18px;
  .label {
    font-weight: bolder;
  }
}
.ant-divider {
  margin: 15px 0;
}
.imgCol {
  position: relative;
  .imgBtn {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
