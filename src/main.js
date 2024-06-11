import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import store from "./stores/index.js"

import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'lib-flexible/flexible.js'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.use(createPinia())
app.use(store)
app.use(router)
app.mount('#app')
