import Vue from 'vue'
import App from './App.vue'
import wmui from '../packages'
import vueConfig from '../vue.config'

Vue.config.productionTip = false
Vue.use(wmui)

new Vue({
  render: h => h(App),
}).$mount('#app')
