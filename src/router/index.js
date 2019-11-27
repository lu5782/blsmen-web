import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/note',
      name: 'note',
      component: () => import('@/components/note/index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/components/demo/index.vue'),
      children: [{
        path: 'eCharts',
        component: () => import('@/components/demo/eCharts.vue')
      },
      {
        path: 'aMap',
        component: () => import('@/components/demo/aMap.vue')
      },
      {
        path: 'watch',
        component: () => import('@/components/demo/watchComputed.vue')
      }]
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  console.log(location)
  return originalPush.call(this, location)
}
