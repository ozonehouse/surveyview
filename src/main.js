// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bFormSlider from 'vue-bootstrap-slider'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'

Vue.use(bFormSlider)

Vue.config.productionTip = false

Vue.directive('focus', {
  bind: function () {
    console.log(this.el)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  debug: true,
  router,
  data: function () {
    return {
      basicValue: 50,
      rangeValue: [25, 75]
    }
  },
  methods: {
    submitSurvey: function () {
      alert(this)
    }
  },
  template: '<App/>',
  components: {App}
})

