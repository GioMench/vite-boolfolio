import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import { gsap } from "gsap" 
createApp(App).use(router).mount('#app')
