import './assets/css/main.css'
import './assets/css/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import prismic from "./services/prismic";

const app = createApp(App)

app.use(createPinia())
app.use(prismic)
app.use(router)

app.mount('#app')
