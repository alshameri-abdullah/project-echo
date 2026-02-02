import "./assets/styles/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { PrimeVueTheme } from "@/theme.js";
import 'primeicons/primeicons.css';

const app = createApp(App);
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