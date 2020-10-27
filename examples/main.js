import Vue from 'vue'
import App from './App.vue'
import tjUI from '../packages'

Vue.use(tjUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
