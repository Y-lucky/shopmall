import Vue from 'vue'
import App from './App'
import router from './router'

import toast from '@/components/common/toast'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 解决移动端300S延迟
FastClick.attach(document.body)

// 使用懒加载的插件
Vue.use(VueLazyLoad, {
    // 图片加载占位符   跟图片路径
    // loading: require('')
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')