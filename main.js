import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'
import _ from 'lodash'

Vue.prototype.$myRequest = myRequest
Vue.prototype._ = _;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
