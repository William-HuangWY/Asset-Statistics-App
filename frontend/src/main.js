import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import EN from './locales/en.json'
import ZH_TW from './locales/zh-TW.json'
import { initTheme } from './theme.js'
import './styles.css'

initTheme();
const i18n = createI18n({
    legacy: false,
    locale: document.cookie.split('=')[1],
    fallbackLocale: ['en', 'zh-TW'],
    messages: {
        'en': EN,
        'zh-TW': ZH_TW,
    },
});
createApp(App).use(i18n).use(router).mount('#app');
