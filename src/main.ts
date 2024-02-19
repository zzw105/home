import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'ant-design-vue/dist/reset.css'
import './myAntd.less'

const app = createApp(App)
app.use(router).mount('#app')
