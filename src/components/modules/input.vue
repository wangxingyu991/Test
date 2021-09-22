<style lang="less">
      @import url('module.less');
</style>
<template>
      <div class="components">
            <el-scrollbar style="height: 100%;">
                  <div class="card">
                        <el-divider>label标签输入框1111111111111111111111</el-divider>
                        <el-row :gutter="20">
                              <el-form ref="form" :model="form" label-width="120px">
                                    <el-col :span="6">
                                          <el-form-item label="普通输入框">
                                                <el-input v-model="form.name" size="small"></el-input>
                                          </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                          <el-form-item label="不可编辑输入框">
                                                <el-input placeholder="不可编辑" size="small" v-model="val" disabled></el-input>
                                          </el-form-item>
                                    </el-col>
                              </el-form>
                        </el-row>
                  </div>
                  <div class="card">

                  </div>
            </el-scrollbar>

      </div>
</template>
<script>
export default {
      name:'Input',
      data(){
            return{     
                  form:{
                        name:'xxxxxxxx',
                        password:''
                  },
                  val:"",
                  val2:"",
                  val3:"",
                  val4:"",
                  input:"",
                  input1: '',
                  input2: '',
                  input3: '',
                  input4: '',
                  textarea1:'',
                  select: ''
            }
      }
}
</script>