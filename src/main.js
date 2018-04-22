// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require("./css.js");

import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/css/index.css';
Vue.use(Tooltip, {
  delay: 0,
  placement: 'top',
  class: 'tooltip-material',
  triggers: ['hover'],
  offset: 0
});


import Ripple from 'vue-ripple-directive'

Vue.directive('ripple', Ripple);

import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
