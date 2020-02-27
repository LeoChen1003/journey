// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入axios模块
import axios from 'axios'

Vue.use(ElementUI)

Vue.config.productionTip = false
// 配置服务器基础路径
axios.defaults.baseURL = 'http://127.0.0.1:4000/'
// 配置保存session信息
axios.defaults.withCredentials = true
// axios注册vue
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
