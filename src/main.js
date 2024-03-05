
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify/lib/framework'
import 'vuetify/dist/vuetify.min.css'
import router from './router'

const app = createApp(App)
const vuetify = createVuetify()


app.use(vuetify)
app.use(router);

app.mount('#app')