import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
    { path: '/', name: 'Index', component: () => import('@/pages/Index') },
    { path: '/welfare/:key', name: '', component: () => import('@/pages/welfare-detail/Index') },
    // { path: '*', name: 'not-found', component: NotFound }
  ]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})
  
const router = createRouter()
  
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router