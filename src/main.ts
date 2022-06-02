import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './styles/element/index.scss'

const app = createApp(App)

app
.use(ElementPlus, { size: 'small', zIndex: 3000 })
.use(router)
.mount('#app')
