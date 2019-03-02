// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
// import 'common/style/index/less'
// import router from './router'

Vue.use(VueRouter)
Vue.use(VueResource)
let routes = [
  { path: '/',
    name: 'index',
    component: App,
    children: [
      {path: './goods', component: goods},
      {path: '/ratings', component: ratings},
      {path: '/seller', component: seller}
    ]}
]

// Vue.config.productionTip = false

/* eslint-disable no-new */
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes: routes
})
let app = new Vue({
  router
}).$mount('#app')
router.push('/goods')
export default app
