import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/home/Home.vue'
import User from '@/views/home/children/User.vue'
import UserList from '@/views/home/children/UserList.vue'
import UserUpdate from '@/views/home/children/UserUpdate.vue'
import PermissionList from '@/views/home/children/PermissionList.vue'
import Echarts from '@/views/home/children/Echarts.vue'

import { DataLine, List, UserFilled } from '@element-plus/icons-vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/user',
        component: User,
        meta: {
          title: "住户信息",
          icon: UserFilled
        },
        children: [
          {
            path: '/home/userlist',
            component: UserList,
            meta: {
              title: "住户列表"
            }
          },
          {
            path: '/home/userupdate',
            component: UserUpdate,
            meta: {
              title: "住户信息更新"
            }
          }
        ]
      },
      {
        path: '/home/permission',
        component: PermissionList,
        name: PermissionList,
        meta: {
          title: "权限列表",
          icon: List
        }
      },
      {
        path: '/home/echarts',
        component: Echarts,
        name: Echarts,
        meta: {
          title: "数据展示",
          icon: DataLine
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
