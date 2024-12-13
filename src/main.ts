import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import V3ScrollLock from 'v3-scroll-lock'
import { createHead } from '@unhead/vue'


const app = createApp(App)

app.use(createRouter({history: createWebHistory(),
    // pass the generated routes written by the plugin
routes}))

app.use(V3ScrollLock, {})
const head = createHead()
app.use(head)

app.mount('#app')