<style lang="less">
      .rh-Container{
            background: #fff;
            padding:15px 20px 0px;
            .head-container{
                 padding-top:0px;
                  .el-row{
                        padding-top:15px;
                        .el-select{
                              width:100%;
                        }
                  }
                  .rh-form{
                        padding:10px 0px;
                        padding-top:0px;
                  }
            }
            .el-divider{
                  background-color:#d4d4d4;
            }
            .rh-content-head{
                  padding-bottom:14px;
            }
      }
</style>
<template>
      <div class="rh-Container">
            <div class="head-container">
                  <el-row :gutter="10">
                        <el-col :span="5">
                              <div class="grid-content bg-purple">
                                    <el-input v-model="val_dwssjg" placeholder="单位所属机构" size="small" @focus="dialogVisible = true"></el-input>
                              </div>
                        </el-col>
                        <el-col :span="5">
                              <div class="grid-content bg-purple">
                                    <el-input v-model="val_xzqh" placeholder="行政区划" size="small"  @focus="dialogVisible2 = true"></el-input>
                              </div>
                        </el-col>
                        <el-col :span="5">
                              <div class="grid-content bg-purple">
                                    <el-input v-model="val_dwmc" placeholder="单位名称" size="small"></el-input>
                              </div>
                        </el-col>
                        <el-col :span="5">
                              <el-select v-model="val_jglx" placeholder="机构类型" size="small">
                                    <el-option v-for="item in opt_jglx" :key="item.value" :label="item.label" :value="item.value"></el-option>
                              </el-select>
                        </el-col>
                        <el-col :span="4">
                              <el-select v-model="val_kpfs" placeholder="开票方式" size="small">
                                    <el-option v-for="item in opt_kpfs" :key="item.value" :label="item.label" :value="item.value"></el-option>
                              </el-select>
                        </el-col>
                  </el-row>
                  <el-row :gutter="10">
                        <el-col :span="5">
                              <div class="grid-content bg-purple">
                                    <el-select v-model="val_sfzclxkj" placeholder="是否支持离线开具" size="small">
                                          <el-option v-for="item in opt_sfzclxkj" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                              </div>
                        </el-col>
                        <el-col :span="5">
                              <div class="grid-content bg-purple">
                                    <el-select v-model="val_sffsdx" placeholder="是否发送短信" size="small">
                                          <el-option v-for="item in opt_sffsdx" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                              </div>
                        </el-col>
                        <el-col :span="5">
                              <div class="grid-content bg-purple">
                                    <el-select v-model="value" placeholder="请选择" size="small">
                                          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                              </div>
                        </el-col>
                        <el-col :span="9">
                              <div class="grid-content bg-purple">
                                    <el-button type="primary" plain size="small" icon="el-icon-search">查询</el-button>
                                    <el-button type="info" plain size="small" icon="el-icon-refresh-left">重置</el-button>
                              </div>
                        </el-col>
                  </el-row>              
            </div>
            <div class="dialog-container head">
                  <el-dialog title="选择单位所属机构" width="30%"  :visible.sync="dialogVisible">
                        <el-input v-model="filterText" placeholder="机构编码或者名称" size="small"></el-input>
                        <el-tree class="filter-tree"
                        :data="data" 
                        :props="defaultProps" 
                        :filter-node-method="filterNode"
                        @node-click="handleNodeClick"
                        ref="tree"></el-tree>
                  </el-dialog>
                  <el-dialog title="行政区划" width="30%"  :visible.sync="dialogVisible2">
                        <el-input v-model="filterText2" placeholder="请输入行政区划" size="small"></el-input>
                        <el-tree class="filter-tree"
                        :data="data2" 
                        :props="defaultProps2" 
                        :filter-node-method="filterNode2"
                        @node-click="handleNodeClick2"
                        ref="tree2"></el-tree>
                  </el-dialog>
            </div>
            <el-divider>
            </el-divider>
            <div class="body-container">
                  <div class="rh-content-head">
                        <div class="rh-form">
                              <el-button type="primary" plain size="small" icon="el-icon-plus" @click="drawer = true">新增</el-button>
                              <el-button type="primary" plain size="small" icon="el-icon-edit" @click="drawer2 = true">修改</el-button>
                              <el-button type="primary" plain size="small" icon="el-icon-edit" @click="dele">删除</el-button>
                              <el-button type="success" plain size="small" icon="el-icon-refresh-left">启用</el-button>
                              <el-button type="info" plain size="small" icon="el-icon-remove-outline">禁用</el-button>
                        </div>
                  </div>
                  <div class="rh-content-body">
                        <div class="rh-table">
                              <el-table :data="tableData" stripe height="460" style="width:100%;" border @selection-change="handelChange">
                                    <el-table-column type="selection" width="55"></el-table-column>
                                    <el-table-column prop="id" label="id号" width="50">
                                    </el-table-column>
                                    <el-table-column prop="td_dwdm" label="单位代码" width="200">
                                    </el-table-column>
                                    <el-table-column prop="td_dwmc" label="单位名称" width="200">
                                    </el-table-column>
                                    <el-table-column prop="td_qxjg" label="权限机构" width="150">
                                    </el-table-column>
                                    <el-table-column prop="td_zgjgdm" label="主管机构代码" width="150">
                                    </el-table-column>
                                    <el-table-column prop="td_dwbm" label="单位编码" width="200">
                                    </el-table-column>
                                    <el-table-column prop="td_dwxz" label="单位性质" width="240">
                                    </el-table-column>
                                    <el-table-column prop="td_sfqy" label="是否启用" width="120">
                                          <template slot-scope="scope">
                                                <div>
                                                 <el-tag :type="scope.row.td_sfqy === false ? 'info' : 'success'" effect="dark" disable-transitions>
                                                       {{scope.row.td_sfqy=== true ? '已开启' : '未开启'}}
                                                </el-tag>
                                                </div>
                                          </template>
                                    </el-table-column>
                                    <el-table-column prop="td_lyzh" label="领用证号" width="150">
                                    </el-table-column>
                                    <el-table-column prop="td_txdz" label="通信地址" width="250">
                                    </el-table-column>
                                    <el-table-column prop="td_yzbm" label="邮政编码" width="100">
                                    </el-table-column>
                                    <el-table-column prop="td_czgkbm" label="财政归口部门" width="240">
                                    </el-table-column>
                                    <el-table-column prop="td_ywzgbm" label="业务主管部门" width="240">
                                    </el-table-column>
                                    <el-table-column prop="td_jglx" label="机构类型" width="200">
                                    </el-table-column>
                              </el-table>
                        </div>
                  </div>
            </div>
            <div class="drawer-container add" :key=1000>
                  <el-drawer
                  :with-header="false"
                  size="40%"
                  :visible.sync="drawer">
                        <FormGroupAdd @parent_formVal="getFormVal"></FormGroupAdd>
                  </el-drawer>
            </div>
            <div class="drawer-container change"  :key=1001>
                  <el-drawer
                  title="单位基本信息修改"
                  :visible.sync="drawer2"
                  :before-close="handleClose">
                  </el-drawer>
            </div>
      </div>
</template>

<script>  
import FormGroupAdd from "./dwjbxx/form-group-add.vue"
export default{
      name:'dwjbxx',
      components:{
            FormGroupAdd
      },
      data(){
            return{
                  option_InputVal:{
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
                  },
                  drawer:false,
                  drawer2:false,
                  filterText: '',
                  filterText2: '',
                  tableData:[],
                  selectTabelDate:[],
                  data: [{
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
                  data2: [{
                        label: '一级 1',
                        children: [{
                              label: 'XXX私人 1-1',
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
                        
                  val_dwssjg:'',
                  dialogVisible:false,
                  dialogVisible2:false,
                  val_xzqh:'',
                  val_dwmc:'',
                  val_jglx:'',
                  opt_jglx:[{value:'选项1',label:'省直用票单位'},{value:'选项2',label:'其他用票单位'},{value:'选项3',label:'其他'}],
                  val_kpfs:'',
                  opt_kpfs:[{value:'选项1',label:'同步'},{value:'选项2',label:'异步'}],
                  val_sfzclxkj:'',
                  opt_sfzclxkj:[{value:'选项1',label:'支持'},{value:'选项2',label:'不支持'}],
                  val_sffsdx:'',
                  opt_sffsdx:[{value:'选项1',label:'发送'},{value:'选项2',label:'不发送'}],
                  value:'',
                  options: [{
                        value: '选项1',
                        label: '启用'
                        }, {
                        value: '选项2',
                        label: '禁用'
                  }],
                  defaultProps: {
                        children: 'children',
                        label: 'label'
                  },
                  defaultProps2: {
                        children: 'children',
                        label: 'label'
                  }
            }
      },
      created(){
            console.log("shis_dwjbxx");
            console.log(this);
            this.$http.get("http://table-api.com").then(res=>{
                  //console.log(res.data);
                  this.tableData = res.data.array;
            })
      },
      watch:{
            filterText:function(val){
                  this.$refs.tree.filter(val);
            },
            filterText2:function(val){
                  this.$refs.tree2.filter(val);
            }
      },
      methods:{
            getFormVal(formVal){
                  this.drawer = formVal.drawer;
                  console.log(formVal);
                  let rowDate =formVal;
                  rowDate.id = this.tableData[this.tableData.length-1].id+1
                 // alert(rowDate.id);
                  this.tableData.push(formVal);
            },
            getInputVal(formVal){
                  console.log(formVal);
            },
            handleClose(done){
                  this.drawer2=false;
            },
            // // 查询单位所属机构
            // selectDwssjg(){
            //       this.dialogVisible = true
            // },
            // selectXzqh(){
            //       this.dialogVisible2 = true
            // },
            handleNodeClick(data,node){
                  if(node.childNodes.length==0){
                        this.val_dwssjg = data.label;
                         this.dialogVisible = false;
                  }
                  console.log(node.childNodes.length);
            },
            handleNodeClick2(data,node){
                  if(node.childNodes.length==0){
                        this.val_xzqh = data.label;
                        this.dialogVisible2 = false;
                  }
            },
            filterNode(value, data) {
                  if (!value) return true;
                  return data.label.indexOf(value) !== -1;
            },
            filterNode2(value, data) {
                  if (!value) return true;
                  return data.label.indexOf(value) !== -1;
            },
            handelChange:function(val){
                   this.selectTabelDate = [];
                  for(var x in val){
                        this.selectTabelDate.push(val[x].id)
                  }
                  console.log(this.selectTabelDate)
            },
            dele:function(index){
                  let arr1 = this.tableData;
                  let arr2 = this.selectTabelDate;
                  console.log(arr1);
                  console.log(arr2);
                  for(var j in arr2){
                        for(var i in arr1){
                              if(arr2[j] == arr1[i].id){
                                    arr1.splice(i,1);
                              };
                        }
                  }
                  console.log(arr1);
                  this.tableData = arr1;
            }
      }
}
</script>