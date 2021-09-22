<style lang="less">
      @import url('module.less');
</style>
<template>
      <div class="components">
            <el-scrollbar  style="height:100%">
                  <div class="card">
                        <el-divider>InputNumber计数器</el-divider>
                        <div class="el-tr">
                              <span class="title">默认计数器</span>
                               <el-input-number size="mini" v-model="num" :disabled="false"></el-input-number>
                              <span  class="title">设置最大最小值</span>
                               <el-input-number size="mini" v-model="num2" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        </div>
                        <div class="el-tr">
                              <span class="title">禁止点击</span>
                              <el-input-number size="mini" v-model="num3" :disabled="true"> </el-input-number>
                              <span class="title">设置步进数量</span>
                              <el-input-number size="mini" v-model="num4" :disabled="false" :step="2"></el-input-number>                     
                               <span class="title">设置步进数量</span>
                              <el-input-number size="mini" v-model="num5" :disabled="false" :step="2.1"></el-input-number>      
                              <span class="title">按钮位置</span>
                              <el-input-number size="mini" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                        </div>
                  </div>
            </el-scrollbar>
      </div>
</template>
<script>
export default {
      name:'Number',
      data(){
           return{
            num: 1,
            num2: 1,
            num3: 5,
            num4: 1,
            num5: 1,
           } 
      },
      methods:{
            handleChange(value) {
                  console.log(value);
            },
      }
}
</script>