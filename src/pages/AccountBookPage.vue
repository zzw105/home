<template>
  <div class="AccountBookPage">
    <universal-page-components :config="config" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import img1 from '@/assets/AccountBook/img/1.jpg'
import img2 from '@/assets/AccountBook/img/2.jpg'
import img3 from '@/assets/AccountBook/img/3.jpg'
import UniversalPageComponents from '@/components/UniversalPageComponents.vue'

const config = ref({
  urlString: 'https://account.zzw105.com',
  versionNumber: '0.1.1',
  technologyStack: ['v3', 'ts', 'vite', 'vant', 'express'],
  image: [img1, img2, img3],
  other: '本来是想这数据安全为前提自己写一个记账程序，但由于在找仿照ui的时候找到了一个确实好用的记账软件就很果断的放弃了自己使用这个项目【'
})
</script>

<style scoped lang="less"></style>
