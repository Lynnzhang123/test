// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false



import {
  DatetimePicker,
  Toast,
  Indicator,
  Picker,
  Popup
} from 'mint-ui'
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Toast)
Vue.component(Indicator)
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
