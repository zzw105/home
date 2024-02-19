<template>
  <div class="AccountBookPage">
    <universal-page-components :config="config" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import img1 from '@/assets/MiniPicture/img/1.png'
import UniversalPageComponents from '@/components/UniversalPageComponents.vue'

const config = ref({
  urlString: 'https://mini.zzw105.com',
  versionNumber: '0.1.1',
  technologyStack: ['v3', 'ts', 'vite', 'antdv', 'images'],
  image: [img1],
  other: '因为一个朋友特别喜欢在微信发尺寸特别小的表情，所以做了这个小项目'
})
</script>

<style scoped lang="less"></style>
