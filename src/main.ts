import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import pinia from './store/pinia.store.ts';
import router from './router/index.route.ts';
import { i18nInstance, vuetify } from './plugins';
import I18NextVue from 'i18next-vue';

const app = createApp(App);
i18nInstance().then((i18n) => {
  app
    .use(pinia)
    .use(router)
    .use(vuetify)
    .use(I18NextVue, {
      i18next: i18n,
      rerenderOn: ['languageChanged', 'loaded', 'added', 'removed'],
    })
    .mount('#app');
});
