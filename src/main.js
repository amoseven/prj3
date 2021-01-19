import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './theme.css'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
