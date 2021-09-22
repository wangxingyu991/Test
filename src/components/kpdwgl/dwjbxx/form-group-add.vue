<style lang="less">
      .Form-pannel{
            padding:10px;
            .el-bt-group{
                  padding:0px 15px;
            }
      }

</style>
<template>
  <div class="Form-pannel">
      <el-form ref="form" :model="FormVals" label-width="100px">
            <el-row>
                  <el-col :span="24">
                        <el-popover
                        v-model="visible"
                        placement="bottom-end"
                        width="460"
                        height="500"
                        trigger="click">
                              <el-form-item slot="reference" label="单位代码">
                              <el-input   v-model="input" placeholder="点击激活" size="small"><i class="el-icon-arrow-down el-icon--right"></i></el-input>
                              </el-form-item>
                              <el-tree :data="data2" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                        </el-popover>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="单位代码">
                              <el-input v-model="FormVals.td_dwdm" placeholder="单位代码" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="单位名称">
                              <el-input v-model="FormVals.td_dwmc" placeholder="请输入单位名称" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="权限机构">
                              <el-input v-model="FormVals.td_qxjg" placeholder="请输入权限机构" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="主管机构代码">
                              <el-input v-model="FormVals.td_zgjgdm" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="单位编码">
                              <el-input v-model="FormVals.td_dwbm" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="单位性质">
                              <el-input v-model="FormVals.td_dwxz" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="是否启用">
                              <el-input v-model="FormVals.td_sfqy" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="领用证号">
                              <el-input v-model="FormVals.td_lyzh" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="通信地址">
                              <el-input v-model="FormVals.td_txdz" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="邮政编码">
                              <el-input v-model="FormVals.td_yzbm" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="财政归口部门">
                              <el-input v-model="FormVals.td_czgkbm" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="业务主管部门">
                              <el-input v-model="FormVals.td_ywzgbm" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="12">
                        <el-form-item label="机构类型">
                              <el-input v-model="FormVals.td_jglx" size="small"></el-input>
                        </el-form-item>
                  </el-col>
                  <el-col :span="24">
                        <div class="el-bt-group">
                              <el-button type="primary" icon="el-icon-circle-plus-outline"  size="small" @click="addForm('FormVals')">添加</el-button>
                              <el-button type="info" icon="el-icon-close" size="small" @click="resetFields('FormVals')">重置</el-button>
                        </div>
                  </el-col>
            </el-row>  
      </el-form>     
  </div>
</template>

<script>
export default {
      name:"addForm",
      data(){
            return{
                  input:'',
                  visible:false,
                  FormVals:{
                        id:0,
                        td_dwdm:"",
                        td_dwmc:"",
                        td_qxjg:"",
                        td_zgjgdm:"",
                        td_dwbm:"",
                        td_dwxz:"",
                        td_sfqy:"",
                        td_lyzh:"",
                        td_txdz:"",
                        td_yzbm:"",
                        td_czgkbm:"",
                        td_ywzgbm:"",
                        td_jglx:"",
                        drawer:true
                  },
                  data2: [{
                        label: '一级 1',
                        children: [{
                              label: '二级 1-1',
                              children: [{
                              label: '杜甫 1-1-1'
                              },{
                              label: '李白 1-1-1'
                              }]
                        }]
                        }, {
                        label: '一级 2',
                        children: [{
                              label: '歌手 2-1',
                              children: [{
                              label: '张学友 2-1-1'
                              },{
                              label: '刘德华 2-1-1'
                              }]
                        }, {
                              label: '二级 2-2',
                              children: [{
                              label: '三级 2-2-1'
                              }]
                        }]
                        }, {
                        label: '一级 3',
                        children: [{
                              label: '二级 3-1',
                              children: [{
                              label: '三级 3-1-1'
                              }]
                        }, {
                              label: '二级 3-2',
                              children: [{
                              label: '三级 3-2-1'
                              }]
                        }]
                  }],
                  defaultProps:{
                        children:'children',
                        label:'label'
                  }
            }
      },
      methods:{
            addForm:function(formName){
                  this.FormVals.drawer = false;
                  this.$emit("parent_formVal",this.FormVals);
            },
            handleNodeClick:function(data,node){
                  if(node.childNodes.length == 0){
                        this.input = data.label;
                        this.visible = false;
                  }
                  console.log(data.label);
                  
            },
            resetForm(formName){ 
                  this.$refs[formName].restFields();
            }
      },
}
</script>

<style>

</style>
