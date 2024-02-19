<template>
  <a-row>
    <a-col :span="2" class="label">主页:</a-col>
    <a-col :span="22" class="hand" @click="toProjectAddress">{{ config.urlString }}</a-col>
  </a-row>
  <a-divider />
  <a-row>
    <a-col :span="2" class="label">版本号:</a-col>
    <a-col :span="22">v{{ config.versionNumber }}</a-col>
  </a-row>
  <a-divider />
  <a-row>
    <a-col :span="2" class="label">技术栈:</a-col>
    <a-col :span="22">{{ config.technologyStack.join('+') }}</a-col>
  </a-row>
  <a-divider />
  <a-row>
    <a-col :span="2" class="label">图片:</a-col>
    <a-col :span="22" class="imgCol">
      <a-button type="dashed" class="imgBtn" @click="changeShowImg">{{ isShowImg ? '折叠图片' : '展开图片' }}</a-button>
      <div v-if="isShowImg">
        <img v-for="img in config.image" :key="img" :src="img" alt="" />
      </div>
      <div v-else>图片已折叠</div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row>
    <a-col :span="2" class="label">其他:</a-col>
    <a-col :span="22">{{ config.other }}</a-col>
  </a-row>
  <a-divider />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  config: {
    urlString: string
    versionNumber: string
    technologyStack: string[]
    image: string[]
    other: string
  }
}>()

const toProjectAddress = () => {
  document.location.href = props.config.urlString
}
const isShowImg = ref(true)

const changeShowImg = () => {
  isShowImg.value = !isShowImg.value
}
</script>

<style scoped lang="less">
.imgCol {
  position: relative;
  .imgBtn {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.3);
  }
}
</style>
