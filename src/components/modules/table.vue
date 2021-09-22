<style lang="less">
      @import url(./module.less);
      .table-wrap{
      padding:20px;
      background-color:#FFF;
      }
      // table样式
      .el-table{
        border:none;
        font-size: 12px;
        .el-table__header-wrapper{
          .el-table__header{
            thead{
              tr{
                th{
                  background-color: #f2f5fc;
                  padding:5px 0px;
                  color:#252b3a;
                  font-weight: 700;
                  border-left: none;
                  border-bottom: 1px solid #dfe1e6;
                  border-right: 1px solid #FFF;
                  font-family: 'Microsoft YaHei Regular';
                  .cell{
                      line-height:14px;
                      .caret-wrapper{
                        height:18px;
                        width:24px;
                        .ascending{
                            top: -3px;
                        }
                        .descending{
                            bottom: -2px;
                        }
                      }
                      .rh-thead-icon{
                        margin-left: 5px;
                        margin-top: 0px;
                        font-size: 10px;
                        font-size: 14px;
                      }
                  }
                }
              }
            }
          }
        }
        .el-table__body-wrapper{
          .el-table__body{           
            tbody{
              tr{
                td{
                    padding: 12px 0px;
                    border-right:none;
                  .cell{
                    line-height: 12px;
                    color: #575d6c;
                    .el-button--text{
                        padding: 0px;
                        height:12px;
                        line-height: 12px;
                    }
                  }
                }
              }
            }
          }
        }
        .el-table__fixed{
            .el-table__fixed-header-wrapper{
                  .el-table__header{
                  thead{
                        tr{
                              background: none;
                              th{
                                    padding:5px 0px;
                                    background: none;
                                    .cell{
                                          line-height:14px;
                                          font-weight:700;
                                    }  
                              }
                        }
                        }
                  }
            }
            .el-table__fixed-body-wrapper{
                  .el-table__body{
                  tbody{
                        tr{
                              td{
                                    padding:12px 0px;
                                    .cell{
                                          line-height:12px;
                                          font-weight:500;
                                    }
                              }    
                        }
                  }
                  }
            }
        }
        .el-table__fixed-right{
            .el-table__fixed-header-wrapper{
                  .el-table__header{
                  thead{
                        tr{
                              background: none;
                              th{
                                    padding:5px 0px;
                                    background: none;
                                    .cell{
                                          line-height:14px;
                                          font-weight:700;
                                    }  
                              }
                        }
                        }
                  }
            }
            .el-table__fixed-body-wrapper{
                  .el-table__body{
                  tbody{
                        tr{
                              td{
                                    padding:12px 0px;
                                    .cell{
                                          line-height:12px;
                                          font-weight:500;
                                    }
                              }    
                        }
                  }
                  }
            }
        }
      }
      //分页样式
      .rh-pagination{
        margin-top:6px;
        height:24px;
        font-size:12px;
        .rh-pagination-in{
          padding:0px;
          vertical-align: middle;
            .el-pagination__sizes{
              font-size:12px ;
              .el-select{
                height:24px;
                line-height:24px;
                .el-input{
                  width: 85px;
                  .el-input__inner{
                    font-size:12px!important;
                    border-radius:3px!important;
                    height: 24px!important;
                    line-height: 22px!important;
                  }
                  &.el-input--mini{
                    .el-input__inner{
                      font-size:12px!important;
                      border-radius:3px!important;
                      height: 24px!important;
                      line-height: 22px!important;                   
                    }
                  }
                }
              }
            }
            .el-pagination__total{
              font-size:12px;
            }
            .el-pager{
              .number{
                font-size:12px;
                height:24px;
                line-height:30px;
                vertical-align: initial;
              }
            }
            .btn-next{
              font-size:12px;
            }
            .el-pagination__jump{
              font-size: 12px;
              .el-input{
                &.el-pagination__editor{
                  font-size:12px;
                  line-height: 24px;
                  height:24px;
                  border-radius:3px;
                  .el-input__inner{
                    height:24px;
                    border-radius: 3px;
                  }
                }
              }
            }
          
        }
      }
      
      .popper__arrow{
            display: none;
      }
      .components .el-scrollbar__view{
            padding-top:0px;
      }
      .rh-head{
            color: #252b3a;
            font-size: 16px;
            font-weight: 700;
            line-height: 32px;
      }
</style>
<template>
    <div class="components">
        <el-scrollbar  style="height: 100%">
            <div class="rh-head rh-head-title">权限<i class="el-icon-info ics-25"></i></div>
            <div class="card">
                  <el-alert
                  style="margin-bottom:20px"
                  type="success">
                        <i class="el-icon-info"></i>
                        <span class="title">每个区域默认预置一个项目，以区域默认项目为单位授权IAM用户可访问您账号中该区域所有项目资源。如需了解企业项目，点击查看帮助，点击创建项目。</span>
                  </el-alert>
                  <div class="rh-operate clearfix">
                        <div class="rh-pull-right">
                              <el-input class="rh-input"  placeholder="请输入项目名称进行收索" @blur = "searchBlur" @focus="ItemSearch" v-model="input_1"  size="small" :style="{width:search_W}">
                                    <i class="el-icon-search" slot="suffix" @click="handSearch"></i>
                              </el-input>
                        </div>
                        <div class="rh-pull-right">
                              <el-select v-model="input_2" placeholder="请选择" size="small">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                              </el-select>
                        </div>
                  </div>            
                  <div class="el-row">
                        <div class="rh-table">
                              <el-table
                                    :data="tableData"
                                    height="500"
      
                                    style="width: 100%">
                                    <el-table-column width="90" type="selection" align="center">

                                    </el-table-column>
                                    <el-table-column prop="id" label="序号id" width="90">
                                    </el-table-column>

                                    <el-table-column
                                    prop="date"
                                    label="日期"
                                    width="180">
                                    </el-table-column>
                                    <el-table-column
                                    prop="name"
                                    label="姓名"
                                    width="180">
                                    </el-table-column>
                                    <el-table-column
                                          prop="company"
                                          label="公司名称"
                                          width="240">
                                    </el-table-column>
                                    <el-table-column
                                    prop="address"
                                    label="地址">
                                    </el-table-column>
                                    <el-table-column
                                    width="200"
                                    label="操作">
                                          <template slot-scope="scope">
                                                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small" class="operate_text">删除</el-button>
                                                <el-divider direction = "vertical"></el-divider>
                                                 <span   @click="handleClick(scope.$index, scope.row)"  class="operate_text">修改</span>
                                          </template>   
                                    </el-table-column>
                              </el-table>
                        </div>
                        <div class="rh-pagination">
                              <el-pagination
                                    class="rh-pagination-in"
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[10, 20, 30, 40]"
                                    :page-size="10"
                                    layout="sizes,total, prev, pager, next, jumper"
                                    :total="120">
                              </el-pagination>           
                        </div>
                  </div>
            </div>
            <div class="card">
                  <el-divider>固定表头表列fixed</el-divider>
                  <div class="el-row">
                        <el-table
                              :data="tableData"
                              stripe
                              border
                              height="300"
                              style="width: 100%">
                        <el-table-column 
                              fixed prop="id" 
                              label="序号" 
                              width="60">
                        </el-table-column>
                        <el-table-column
                              prop="date"
                              label="日期"
                              width="300">
                        </el-table-column>
                        <el-table-column
                              prop="name"
                              label="姓名"
                              width="300">
                        </el-table-column>
                        <el-table-column
                              prop="address"
                              label="地址"
                              
                              width="300">
                        </el-table-column>
                        <el-table-column
                              prop="company"
                              label="公司名称"
                              width="300">
                        </el-table-column>
                        <el-table-column
                              fixed="right"
                              prop="tel"
                              label="电话"
                              width="150">
                        </el-table-column>
                        </el-table>
                  </div>                  
            </div>
        </el-scrollbar>
            <Layer v-bind:dialogVisible="show" @subLayer="getSubmit" @CloseBut="getClose" >
                  <Labelinput @parentData="getformData" :isSubmit="isSubmit" :isReset="isReset"></Labelinput>
            </Layer>     
     </div>
</template>

<script>
      import layer from './layer/layer.vue'
      import label_input from './input/label_input.vue'
      export default {
            components:{Layer:layer,Labelinput:label_input},
            data(){
                  const generateData = _ => {
                        const data = [];
                        const date = ['2016-05-03','2016-05-04','2016-05-05','2016-05-06','2016-05-03','2016-05-04','2016-05-05','2016-05-06','2016-05-03','2016-05-04','2016-05-05'];
                        const name = ['王小虎','马云云','马化腾','任正非'];
                        const address = ['上海市普陀区金沙江路 1518 弄','上海市普陀区金沙江路 1517 弄济南唐冶新城国际','上海市普陀区金沙江路 1517 弄','上海市普陀区金沙江路 1517 弄'];
                        date.forEach((date,index)=>{
                              data.push({
                                    id:index,
                                    date:date,
                                    name:index+"王小虎",
                                    address:index+"上海市普陀区金沙江路 1518 弄",
                                    company:index+"上海黄埔光明大厦有限公司",
                                    tel:index+"0001-8888888",
                              })
                        });
                        return data;
                  }
                  return{
                        tableData:generateData(),
                        input_1:"",
                        input_2:"",
                        input_3:"",
                        input_4:"",
                        input_5:{},
                        show:false,
                        search_W:"200px",
                        currentPage4:2,
                        options:[{
                                    value: '选项1',
                                    label: '全部引擎'
                              }, {
                                    value: '选项2',
                                    label: 'MySQL'
                              }, {
                                    value: '选项3',
                                    label: 'PostgreSQL'
                              }, {
                                    value: '选项4',
                                    label: 'Microsoft SQL Server'
                              }],
                        isSubmit: false,
                        isReset: {
                              reset:false,
                              resetDate:{

                              }
                        },
                  }
            },
            methods:{
                  ItemSearch:function(){
                        this.search_W = "220px";
                  },
                  searchBlur:function(){
                        this.search_W = "200px";
                  },
                  handSearch:function(){
                        console.log(this.input_1);
                  },
                  handleSizeChange(val){
                        console.log("每一页显示${val}条");
                  },
                  handleCurrentChange(val){
                        console.log("当前页面显示${val}条");
                  },
                  deleteRow(index, rows) {
                        rows.splice(index, 1);
                  },
                  handleClick(index,rows) {
                        this.show = true;
                        let data = rows;
                        this.isReset.reset=!(this.isReset.reset);
                        this.isReset.resetDate = rows;
                        console.log(rows);
                  },
                  getformData(val){
                        console.log("获取到form框内的所有数据"+val);
                        this.input_5 = val;
                  },
                  getSubmit(val){
                        console.log("改变子组件"+this.isSubmit);
                        this.isSubmit = val;
                  },
                  getClose(val){
                        this.show = val;
                  }
            }
      }
</script>