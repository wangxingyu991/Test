// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios';
import less from 'less'
import storage from './store'
import Mock from './mock.js';
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import api from '@/api/api.js'

/**
 * @description 全局注册应用配置
 */
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$storage = storage;
Vue.prototype.$api = api;

Vue.use(less)
Vue.use(ElementUI);

/* eslint-disable no-new */

router.beforeEach((to,from,next) =>{
  //console.log("userName=" + localStorage.getItem("userName"));
  console.log("路由跳转检测是否登录main.js 25行");
    if(to.meta.needLogin) {
      if (localStorage.getItem("userName")) {
        //本地储存是否有token(uid)数据
        next();//表示已经登录
      }else{
        next({name:"Login"})
      }
    }else{
      //表示不需要登录
      next();//继续往后走
    }
    next();
})

/*请求拦截器*/
axios.interceptors.request.use(
  config=>{
    console.log("现在进行路由拦截啦");
    return config
  },err=>{
    console.log(err);
  }
)

/*组件初始化*/
new Vue({
  el: '#app',
  router,
  storage,
  components: { App },
  template: '<App/>'
})