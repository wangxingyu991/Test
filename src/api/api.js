import axios from 'axios'
import { Message } from 'element-ui';
import router from '../router';

//错误信息整理反馈
function errorInfo(url,error,fun){
    if (error != null && error != undefined) {
        
        if (error.response != null && error.response.status != '200') {
            //构建反馈信息
            let data = { 'success': false, "errorCode": error.response.status, 'errorMsg': error.message, 'data': '' }
            fun(data);
        }
    }
}
function checkInfo(data,fun){
    if(data.errorCode == '06004'){
        Message.error('账号身份过期，请重新登录');
        router.push({"path":"/login"});
    } else {
        fun(data);
    }
}
//请求实列创建
let instance = axios.create({
    timeout: 6000
    //创建一个新的axios实列
}) 
//api实列创建
const api = {
    get(url,params,fun){
        let _url = "/api"+url;
        let _params = {
            params: params,
            headers: {"X-API-TOKEN":null}
        }
        //get请求
        instance.get(_url,_params).then((response) => {
            let data = response.data;
            fun(data)
        }).catch((error) => {
            errorInfo(url,error,fun);
        })
    },
    post(url, params, fun, headers){
        let _url = "/api" + url;
        let newHeaders = {
            headers: {"X-API-TOKEN":null}
        }
        if( arguments.length == 4){
            newHeaders["header"] = headers;
        }
        //post请求
        instance.post(_url, params,newHeaders).then((response) => {
            let data = response.data;
            fun(data);
        }).catch((error) => {
            errorInfo(url, error, fun);
        })
    },
    put(url,params,fun){
        let _url = "/api" +url;
        instance.put(_url,params).then((response)=>{
            let data = response.data;
            fun(data);
        }).catch((error) =>{
            errorInfo(url, error, fun);
        })
    },
    delete(url,params,fun){
        let _url = "/api" + url;
        let _params = {
            params: params,
            headers: { "X-API-TOKEN": null }
        };
        instance.delete(_url, _params).then((response) => {
            let data = response.data;
            fun(data);
        }).catch((error) => {
            errorInfo(url, error, fun);
        })       
    }
}
export default api