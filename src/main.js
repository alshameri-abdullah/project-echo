import "./assets/styles/main.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import PrimeVue from 'primevue/config';
import { PrimeVueTheme } from "@/theme.js";
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(createPinia());
app.use(i18n);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: PrimeVueTheme,
        options: {
            darkModeSelector: 'none',
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue, components, utilities, app'
            }
        }
    }
});
app.mount('#app')