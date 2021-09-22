<style lang="less" >
      .table-wrap{
        padding:20px;
        background-color:#FFF;
      }
      // 表格样式
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
      }
      // 分页样式
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
</style>
<template>
  <div class="table-wrap">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
          <el-table-column type="selection" width="55">
          </el-table-column>
          //{
                
            }
          <el-table-column
            type="index"
            label="序号"
            width="155"
            :index="indexMethod">
          </el-table-column>
          <el-table-column
            prop="date"
             sortable
            label="日期"
            width="180">
            <template slot-scope="scope">
                <el-tooltip trigger="hover">
                      <div slot="content">{{scope.row.date}}</div>
                      <span class="td_link">***********</span>
                </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="单位代码"
            width="180">
              <template slot="header">
                    <span class="rh-th-text">单位代码</span>
                    <el-tooltip 
                    trigger="hover" 
                    effect = "dark"
                    content="">
                          <div slot="content" style="width:140px;">
                                单位代码：请选择一个或多个要设置备份策略的存储库
                          </div>
                          <i class="el-icon-question rh-thead-icon" style="font-size:16px"></i>
                    </el-tooltip>
              </template>
          </el-table-column>
          <el-table-column
            prop="address"
            show-overflow-tooltip
            label="地址">
          </el-table-column>
          <el-table-column
          width="300"
          label="操作">
            <template solt-scope="scope">
                <el-button type="text" size="mini">比较</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text" size="mini">应用</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text" size="mini">应用记录</el-button>
            </template>
          </el-table-column>
    </el-table>
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

</template>

<script>
export default {
      data(){
            return{
            currentPage4:2,
            tableData: [{
                  date: '2016-05-02',
                  name: '王小虎1',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  tag: '家'
                  }, {
                  date: '2016-05-04',
                  name: '王小虎2',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1517 弄',
                  zip: 200333,
                  tag: '公司'
                  }, {
                  date: '2016-05-01',
                  name: '王小虎3',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1519 弄',
                  zip: 200333,
                  tag: '家'
                  }, {
                  date: '2016-05-03',
                  name: '王小虎4',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1516 弄',
                  zip: 200333,
                  tag: '公司'
            }],
            }
      },
      methods:{
            indexMethod(index) {
                  return index;
            },
            handleSizeChange(val){
                  console.log("每一页显示${val}条");
            },
            handleCurrentChange(val){
                  console.log("当前页面显示${val}条");
            },
      },
      mounted(){

      }
}
</script>

