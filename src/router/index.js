import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './homepage.js'
import Order from './order.js'
Vue.use(Router)

let routes=[
  ...Homepage,
  ...Order,
  {

  },
]

let router =  new Router({
  mode :'history',
  routes:routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
      document.title = to.meta.title;
  }
  next()
})

router.afterEach((to, from, next) => {

})


export default router