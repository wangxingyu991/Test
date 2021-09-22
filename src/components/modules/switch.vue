<style lang="less">
      @import url('module.less');
</style>
<template>
      <div class="components">
            <el-scrollbar>
                  <div class="card">
                        <el-divider>switch基础用法</el-divider>
                        <div class="el-tr">
                              <div class="title">开关:</div>
                              <el-switch
                              v-model="value"
                              size="small"
                              active-color="#948989"
                              inactive-color="#f0f0f0">
                              </el-switch>
                        </div>
                        
                        <el-divider>文字描述</el-divider>
                        <div class="el-tr">
                              <div class="title">开关：</div>   
                              <el-switch
                              v-model="value1"
                               size="small"
                              active-color="#948989"
                              inactive-color="#f0f0f0"
                              active-text="按月付费"
                              inactive-text="按年付费">
                              </el-switch>
                        </div>
                        <div class="el-tr">
                              <div class="title">开关：</div>   
                              <el-switch
                              v-model="value2"
                              active-color="#13ce66"
                              inactive-color="#ff4949"
                              active-text="按月付费"
                               size="small"
                              inactive-text="按年付费">
                              </el-switch>
                        </div>
                        <div class="el-tr">
                              <div class="title">带值的描述</div>
                              <el-tooltip :content="'Switch value: ' + value" placement="top">
                              <el-switch
                              v-model="value"
                              active-color="#13ce66"
                              inactive-color="#ff4949"
                              active-value="100"
                               size="small"
                              inactive-value="0">
                              </el-switch>
                              </el-tooltip>
                        </div>
                  </div>
            </el-scrollbar>
      </div>
</template>
<script>
export default {
      name:'aaa',
      data(){
            return {
                  value1:true,
                  value2:true,
                  value:true
            }
      }
}
</script>