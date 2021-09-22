<style lang="less">
       @import url('../module.less');
      .rh-text{
            color:#8a8e99;     
      }

</style>
<template>
  <div class="form">
        <el-form   :model="FormData" :rules="rules" ref="FormData"  class="rh-ruleForm" size="small">
              <el-form-item label="数据库引擎版本" prop="sjkyqbb">
                    <el-input v-model="FormData.sjkyqbb" class="rh-input"></el-input>
              </el-form-item>
              <el-form-item label="参数模板名" prop="csmbm">
                    <el-input v-model="FormData.csmbm" class="rh-input"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                  <el-date-picker v-model="FormData.date1" type="date"  value-format="yyyy-MM-dd" placeholder="选择日期" class="rh-input"></el-date-picker>
              </el-form-item>
              <el-form-item label="watch观察" prop="value">
                    <el-input v-model="FormData.value" class="rh-input"></el-input>
              </el-form-item>
              <div class="rh-form-text">
                  您还可以创建100个参数模板。当前项目下所有关系型数据库引擎共享参数模板配额{{isSubmit}}
              </div>
              <el-form-item label="开关">
                    <el-switch v-model="FormData.switch1"></el-switch>
              </el-form-item>
              <el-form-item>
                    <el-button class="rh-button" type="primary" @click="submitForm('FormData')">立即创建</el-button>
                    <el-button class="rh-button" @click="resetForm('FormData')">重置</el-button>
              </el-form-item>
        </el-form>
  </div>
</template>

<script>
      export default {
            props:{
                  isSubmit:{
                        type:Boolean
                  },
                  isReset:{
                        type:Object
                  }
            },
            watch:{
                  //对对象进行监控
                  value:function(n,o){
                        alert(n)
                  },
                  "isReset.reset":function(newValue,oldValue) {
                        console.log("props新值："+newValue);
                        this.watchProps();
                  },
                  sjkyqbb(newValue,oldValue){
                       
                        console.log(newValue);
                  },
                  isSubmit(newValue,oldValue) {
                        console.log("表单提交开关2"+newValue);
                        this.submitForm('Form');
                  }
            },
            data(){
                  return{
                       FormData:{
                             sjkyqbb:'',
                             csmbm:'',
                             date1:'',
                             value:'',
                              switch1:true,
                       },
                        rules:{
                              sjkyqbb: [
                                    {required:true,message:'请输入活动名称',trigger:'blur'}
                              ],
                              csmbm: [{required:true,message:'请选择活动区域',trigger:'change'}
                              ],
                              value: [{required:true,message:'请输入信息',trigger:'blur'}]
                        },
                        value:'2016-05-04',
                  }
            },
            mounted(){
                  let props = this.isReset;
                  this.FormData.sjkyqbb = props.resetDate.address;
                  this.FormData.csmbm = props.resetDate.company;
                  this.FormData.date1 = props.resetDate.date;
                  this.FormData.value = props.resetDate.name;
            },
            methods:{
                  Date(){
                        alert(this.value)
                  },
                  submitForm(formName) {
                        this.$refs[formName].validate((valid) => {
                              if (valid) {
                                    console.log(this.FormData);
                                    this.isReset.resetDate.address = this.FormData.sjkyqbb;
                                    this.isReset.resetDate.company = this.FormData.csmbm;
                                    this.isReset.resetDate.date = this.FormData.date1;
                                    this.isReset.resetDate.name = this.FormData.value;
                                    this.$emit("parentData",this.FormData);
                              } else {
                                    console.log('error submit!!');
                                    return false;
                              }
                        });
                  },
                  resetForm(formName) {
                        this.$refs[formName].resetFields();
                        //this.refs.formData.resetFields();


                  },
                  watchProps(){
                        let props = this.isReset;
                        this.FormData.sjkyqbb = props.resetDate.address;
                        this.FormData.csmbm = props.resetDate.company;
                        this.FormData.date1 = props.resetDate.date;
                        this.FormData.value = props.resetDate.name;
                  }
            }
      }
</script>

<style>

</style>