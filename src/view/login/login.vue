<style lang="less">
  @import url('./login.less');
  .el-form-item__content{
    margin-left:0px!important;
  }
</style>
<template>
  <div class="login" :style="{height:WHeight+'px'}">
    
    <div class="login-from-box">
      <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width = "100px" class="loginFrom">
        <el-card class="box-card">
          <div class="rh-login-title clearfix" slot="header" >
            <span class="rh-login-title">登录</span>
          </div>
          <div class="rh-row">
            <el-form-item prop="userName">
              <el-input prefix-icon="el-icon-user" v-model="loginForm.userName" placeholder="请输入用户名" ></el-input>
            </el-form-item>
          </div>
          <div class="rh-row">
            <el-form-item prop="passWord">
              <el-input prefix-icon="el-icon-lock" v-model="loginForm.passWord" placeholder="请输入密码" prop="passWord" show-password></el-input>
            </el-form-item>
          </div>
          <div class="rh-row">
            <el-checkbox-group v-model="loginForm.check_rp">
              <el-checkbox label="1" >记住密码</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="rh-row">
            <el-button type="primary"  size="small" style="width:100px" @click="submitForm('ruleForm')">登录</el-button>
            <el-button type="info"  size="small" style="width:100px" @click="resetForm('ruleForm')">重置</el-button>
          </div>
          <div class="rh-row">
            <el-button type="primary" size="small"></el-button>
          </div>
        </el-card>
      </el-form>
    </div>
  </div>
</template>
<script>
import sessionFun from "@/store/session.js"
  export default {
    name:'login',
    data () {
      return{
        loginForm:{
          userName:'',
          passWord:'',
          check_rp:'',
          sign_name:'',
          sign_password:''
        },
        rules:{
          userName:[
            {required:true,message:'请输入用户名',trigger:'blur'},
            { min: 3, max: 15, message: '长度在 3到 15 个字符', trigger: 'blur' }
          ],
          passWord:[
            {required:true,message:'请输入密码',trigger:'blur'},
          ]
        },
        WHeight:window.innerHeight,
        msg:'请填写登录信息',
      }
    },
    methods:{
      //提交函数N
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
            showClose: true,
            message: '恭喜'+this.loginForm.userName+'，登录成功',
            type: 'success'
          });
          localStorage.setItem("userName",this.loginForm.userName);
          sessionFun.set("passWord",this.loginForm.passWord);
          sessionFun.set("token",this.loginForm.userName);
          this.$router.push({path:'/main'});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //清空表单内容
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login(){
        this.$http({
          type:'get',
          url:'请求的接口路径',
          params:{
            username:this.username,
            password:this.password
          }
        }).then(res=>{
          console.log(res);
          localStorage.setItem("userName",this.username);
          this.$router.push({
            name: "Main"
          })
        })
      },
    }
  }

</script>
