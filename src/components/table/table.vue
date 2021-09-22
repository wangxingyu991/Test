<template>
      <div class="rh-table">
            <el-table :data="tableData" stripe="true" style="width:100%">
                  <el-table-column type="selection" width="55">
                  <el-table-column prop="td_dw" label="单位代码" width="200">
                  </el-table-column>
                  </el-table-column>
                  <el-table-column prop="name" label="单位名称" width="200">
                  </el-table-column>
                  <el-table-column prop="address" label="权限机构" width="150">
                  </el-table-column>
                  <el-table-column prop="address" label="主管机构代码" width="150">
                  </el-table-column>
                  <el-table-column prop="address" label="单位编码" width="150">
                  </el-table-column>
                  <el-table-column prop="address" label="单位性质" width="150">
                  </el-table-column>
                  <el-table-column prop="address" label="主管机构代码" width="150">
                  </el-table-column>
                  <el-table-column prop="address" label="单位编码" width="150">
                  </el-table-column>
                  <el-table-column prop="address" label="单位性质" width="150">
                  </el-table-column>
                  <el-table-column prop="address" label="是否启用" width="150">
                  </el-table-column>
                  <el-table-column prop="address" label="领用证号" width="150">
                  </el-table-column>
            </el-table>
      </div>
</template>
<script>
export default {
      name:'com_table',
      props:{
            props_theadData:[],
            props_tableData:[]
      },
      data(){
            return{
                  tableData:[],
                  theadData:[]
            }
      },
      beforeCreate(){
            this.tableData = props_tableDa;
            this.theadData = props_theadData;
      }
}
</script>