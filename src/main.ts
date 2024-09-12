import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import pinia from "./store/pinia.store.ts";
import router from "./router/index.route.ts";
import {vuetify} from "./plugins";


const app = createApp(App)

app.use(pinia)
    .use(router)
    .use(vuetify)
    .mount('#app')
