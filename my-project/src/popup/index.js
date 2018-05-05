import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import root from './root.vue'
import ElementUI from 'element-ui'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.accent2,
    secondary: colors.green.darken1,
    accent: colors.indigo.lighten1,
    error: colors.red.base,
    warning: colors.orange.darken3,
    info: colors.blue.base,
    success: colors.green.base
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(root)
})
