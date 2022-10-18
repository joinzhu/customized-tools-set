import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import items from './router/items'
import 'virtual:windi.css'
import './assets/scss/global.scss'

const router = createRouter({
  history: createWebHistory(import.meta.env.PROD ? '/toolsdoc/' : '/'),
  routes: items
})

createApp(App).use(router).use(ElementPlus).mount('#app')
