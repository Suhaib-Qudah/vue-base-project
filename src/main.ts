import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import pinia from "./store/pinia.store.ts";
import router from "./router/index.route.ts";


const app = createApp(App)

app.use(pinia).use(router)
    .mount('#app')
