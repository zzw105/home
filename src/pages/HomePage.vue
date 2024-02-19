<template>
  <div class="home">
    <div class="title">一个普通的前端的普通个人网站</div>
    <div class="time">
      <!-- 时 -->
      <div :style="columnStyle1" class="column">
        <div :style="getOpacity(0, 0)" class="num">0</div>
        <div :style="getOpacity(1, 0)" class="num">1</div>
        <div :style="getOpacity(2, 0)" class="num">2</div>
      </div>
      <div :style="columnStyle2" class="column">
        <div :style="getOpacity(0, 1)" class="num">0</div>
        <div :style="getOpacity(1, 1)" class="num">1</div>
        <div :style="getOpacity(2, 1)" class="num">2</div>
        <div :style="getOpacity(3, 1)" class="num">3</div>
        <div :style="getOpacity(4, 1)" class="num">4</div>
        <div :style="getOpacity(5, 1)" class="num">5</div>
        <div :style="getOpacity(6, 1)" class="num">6</div>
        <div :style="getOpacity(7, 1)" class="num">7</div>
        <div :style="getOpacity(8, 1)" class="num">8</div>
        <div :style="getOpacity(9, 1)" class="num">9</div>
      </div>
      <div class="colon">:</div>
      <!-- 分 -->
      <div :style="columnStyle3" class="column">
        <div :style="getOpacity(0, 2)" class="num">0</div>
        <div :style="getOpacity(1, 2)" class="num">1</div>
        <div :style="getOpacity(2, 2)" class="num">2</div>
        <div :style="getOpacity(3, 2)" class="num">3</div>
        <div :style="getOpacity(4, 2)" class="num">4</div>
        <div :style="getOpacity(5, 2)" class="num">5</div>
      </div>
      <div :style="columnStyle4" class="column">
        <div :style="getOpacity(0, 3)" class="num">0</div>
        <div :style="getOpacity(1, 3)" class="num">1</div>
        <div :style="getOpacity(2, 3)" class="num">2</div>
        <div :style="getOpacity(3, 3)" class="num">3</div>
        <div :style="getOpacity(4, 3)" class="num">4</div>
        <div :style="getOpacity(5, 3)" class="num">5</div>
        <div :style="getOpacity(6, 3)" class="num">6</div>
        <div :style="getOpacity(7, 3)" class="num">7</div>
        <div :style="getOpacity(8, 3)" class="num">8</div>
        <div :style="getOpacity(9, 3)" class="num">9</div>
      </div>
      <div class="colon">:</div>
      <!-- 秒 -->
      <div :style="columnStyle5" class="column">
        <div :style="getOpacity(0, 4)" class="num">0</div>
        <div :style="getOpacity(1, 4)" class="num">1</div>
        <div :style="getOpacity(2, 4)" class="num">2</div>
        <div :style="getOpacity(3, 4)" class="num">3</div>
        <div :style="getOpacity(4, 4)" class="num">4</div>
        <div :style="getOpacity(5, 4)" class="num">5</div>
      </div>
      <div :style="columnStyle6" class="column">
        <div :style="getOpacity(0, 5)" class="num">0</div>
        <div :style="getOpacity(1, 5)" class="num">1</div>
        <div :style="getOpacity(2, 5)" class="num">2</div>
        <div :style="getOpacity(3, 5)" class="num">3</div>
        <div :style="getOpacity(4, 5)" class="num">4</div>
        <div :style="getOpacity(5, 5)" class="num">5</div>
        <div :style="getOpacity(6, 5)" class="num">6</div>
        <div :style="getOpacity(7, 5)" class="num">7</div>
        <div :style="getOpacity(8, 5)" class="num">8</div>
        <div :style="getOpacity(9, 5)" class="num">9</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, ref } from 'vue'

const columnStyle1 = ref<CSSProperties | undefined>(undefined)
const columnStyle2 = ref<CSSProperties | undefined>(undefined)
const columnStyle3 = ref<CSSProperties | undefined>(undefined)
const columnStyle4 = ref<CSSProperties | undefined>(undefined)
const columnStyle5 = ref<CSSProperties | undefined>(undefined)
const columnStyle6 = ref<CSSProperties | undefined>(undefined)
const columnStyle = ref([columnStyle1, columnStyle2, columnStyle3, columnStyle4, columnStyle5, columnStyle6])

const timeArr = ref(['0', '0', '0', '0', '0', '0'])

function formatNumber(number: number) {
  return number < 10 ? '0' + number : number.toString()
}

const getOpacity = (value: number, index: number) => {
  const difference = Math.abs(+timeArr.value[index] - value)
  switch (difference) {
    case 0:
      return { opacity: 1 }
    case 1:
      return { opacity: 0.7 }
    case 2:
      return { opacity: 0.3 }
    default:
      return { opacity: 0 }
  }
}

const setTime = () => {
  const date = new Date()
  const hours = formatNumber(date.getHours())
  const minutes = formatNumber(date.getMinutes())
  const seconds = formatNumber(date.getSeconds())
  const timeList = hours + minutes + seconds
  timeArr.value = Array.from(timeList)
  Array.from(timeList).forEach(function (time, index) {
    columnStyle.value[index].value = { transform: `translateY(-${time}00px)` }
  })
}
setTime()
setInterval(() => {
  setTime()
}, 1000)
</script>

<style scoped lang="less">
:deep(.contentBox) {
  margin: 0;
}
.home {
  background: linear-gradient(to top right, #f9f9f9 50%, #000000 50%);
  height: 100%;
  width: 100%;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    background-color: transparent;
    mix-blend-mode: difference;
    color: white;
  }
  .time {
    display: flex;
    font-size: 100px;
    margin: auto;
    height: 110px;
    line-height: 100px;
  }
  .title {
    position: absolute;
  }
  .column,
  .num {
    transition: all 300ms;
  }
}
</style>
