import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

/* CSS Files */
import "./assets/mainSass.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
/* ******************************************* */

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
