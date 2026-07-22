import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

history.scrollRestoration = 'manual'

createApp(App).use(router).mount('#app')
