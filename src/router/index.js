import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
import Login from '@/view/login/login.vue'
import VueRouter from 'vue-router'

// const originalPush = VueRouter.prototype.originalPush
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this,location).catch(err=>err);
// }

Vue.use(Router)
export default new Router({
  routes:routes
});