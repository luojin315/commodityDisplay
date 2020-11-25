import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
// import routes from './router'
// import ElementUI from "element-ui"
Vue.config.productionTip = false

Vue.prototype.$axios = axios;


// Vue.use(VueRouter)

// Vue.use(ElementUI)




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
