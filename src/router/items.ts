import { h, resolveComponent } from 'vue'
import main from '../layout/main.vue'

export const menuItems = [
  {
    path: 'validate',
    name: 'validate',
    meta: {
      menuTitle: '校验模块'
    },
    component: () => import('../views/validate/index.vue')
  },
  {
    path: 'common',
    name: 'common',
    meta: {
      menuTitle: '公共模块'
    },
    component: () => import('../views/common/index.vue')
  }
]

export default [
  {
    path: '/',
    redirect: { name: 'validate' },
    // component: { render: () => h(resolveComponent('router-view')) },
    component: main,
    children: menuItems
  }
]
