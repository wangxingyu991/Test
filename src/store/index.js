import Vue from 'vue'
import Vuex from 'vuex'
import routes from '@/router/routes.js'
// import { template } from 'babel-core'
 import {getMenuList} from '@/utils/util.js'
Vue.use(Vuex)

export default new Vuex.Store({
      state: {
            isLogin: true,
            userName: '王兴玉',
            password: '',
            userId: '0',
            navListAll: [],//导航数组
            is_contentNav_show: false,
            breadCrumb: [],
            sideMenuList: [],
            frameProp: {//content宽度加浏览器高度
                  height: 100,
                  width: 100,
            },
            frameSize: {//content区域大小
                  height: 0,
                  width: 0,
            },
            isNavShow: true,
            NavSize: {//导航大小
                  height: 0,
                  width: 250,
            },
            persmisonMenu: [],
      },
      mutations:{//
            IsLogin(state,status){
                  state.isLogin = status;
            },
            userName(state,userName){
                  state.userName = userName;
            },
            password(state,password){
                  state.password = password;
            },
            Is_contentNav_show(state,Boole){
                  state.is_contentNav_show = Boole;
            },
            setBreadCrumb(state,breadList){
                  state.breadCrumb = breadList;
            },
            setFrameProp(state,Paramet){
                  state.frameProp.height = Paramet.height;
                  state.frameProp.width = Paramet.width;
            }
      },
      getters:{
            // menuList: () => getMenuList(routes),
            menuList:(state) =>{
                  let arr = getMenuList(routes);
                  return arr;
            },
            userInfo:(state) =>{
                  let obj = {};
                  obj = {
                        //mebuList:getter.menuList,
                        isLogin:state.isLogin,
                        userName:state.userName,
                        password:state.password,
                        userId:state.userId
                  }
                  return obj;
            }
      },
      actions:{//
            setIsLogin({commit,state},{userName,password}){
                  userName = userName.trim();
                  return new Promise((resolve,reject) =>{

                  })
            },
            // 设置内容导航是否显示
            setConNav({commit},Boolen){
                  commit('Is_contentNav_show', Boolen);
            },
            setBreadCrumb({commit},crumbList){
                  commit('setBreadCrumb',crumbList);
            }
      },
      modules:{//
      }
})