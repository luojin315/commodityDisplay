import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import { Row, Col, Icon } from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

//按需加载使用的elementui
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
