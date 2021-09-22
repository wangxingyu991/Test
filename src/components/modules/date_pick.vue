<style lang="less">
.components .title{
      padding:10px 0px;
}
</style>
<template>
  <div class="components">
      <el-scrollbar  style="height: 100%">
            <div class="card">
                  <el-divider>日期控件</el-divider>
                  <div class="el-tr" style="width:300px">
                        <span class="title">日期控件</span>
                        <el-date-picker
                              v-model="value1"
                              type="date"
                              size="small"
                              placeholder="选择日期">
                        </el-date-picker>
                        <span class="title">带快捷选项</span>
                        <el-date-picker
                              v-model="value2"
                              align="right"
                              type="date"
                              size="small"
                              placeholder="选择日期"
                              :picker-options="pickerOptions">
                        </el-date-picker>
                  </div>
                  <el-divider>
                        日期控件设置日期格式      
                  </el-divider>
                  <div class="ele-tr" style="width: 300px">
                        <div class="title">时间-周</div>
                        <el-date-picker
                        v-model="value3"
                        size="small"
                        align="left"
                        type="week"
                        format="yyyy 第 WW周"
                        placeholder="请选择周"
                        ></el-date-picker>

                        <div class="title">时间-年</div>
                        <el-date-picker
                        v-model="value4"
                        align="left"
                        size="small"
                        type="year"
                        format="yyyy年"
                        placeholder="请选择年"
                        ></el-date-picker>

                        <div class="title">时间-月</div>
                        <el-date-picker
                        v-model="value4"
                        align="left"
                        size="small"
                        type="month"
                        format="MM月"
                        placeholder="请选择月"
                        ></el-date-picker>

                        <div class="title">时间-多日期</div>
                        <el-date-picker
                        v-model="value5"
                        align="right"
                        size="small"
                        type="dates"
                        placeholder="请选择多个日期"
                        ></el-date-picker>
                  </div>
                  <el-divider>
                        选择日期范围     
                  </el-divider>
                  <div class="el-tr" style="width: 300px">
                        <span class="title">date格式:</span>
                        <el-date-picker v-model="value6" size="small" type="daterange" align="right" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :pick-options= "pickerOptitons">
                        </el-date-picker>

                        <span class="title">年范围:</span>
                        <el-date-picker v-model="value7" size="small" type="yearhrange" align="right" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :pick-options= "pickerOptitons">
                        </el-date-picker>
                        <span class="title">年月份范围:</span>
                        <el-date-picker v-model="value8" size="small" type="monthrange" align="right" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :pick-options= "pickerOptitons">
                        </el-date-picker>
                  </div>
                  <el-divider>
                        日期输出值的格式化     
                  </el-divider>
                  <div class="el-tr" style="width: 300px">
                        <span class="title">日期范围:</span>
                        <el-date-picker v-model="value6" size="small" type="daterange" align="right" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :pick-options= "pickerOptitons">
                        </el-date-picker>

                        <span class="title">年范围:</span>
                        <el-date-picker v-model="value7" size="small" type="yearhrange" align="right" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :pick-options= "pickerOptitons">
                        </el-date-picker>
                        <span class="title">年月份范围:</span>
                        <el-date-picker v-model="value8" size="small" type="monthrange" align="right" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :pick-options= "pickerOptitons">
                        </el-date-picker>
                  </div>
                  <el-divider>
                        日期输出值的值     
                  </el-divider>
                  <div class="el-tr" style="width: 300px">
                        <div class="title">默认：{{value9}}</div>
                        <el-date-picker
                        v-model="value9"
                        size="small"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日">
                        </el-date-picker>
                  </div>

                  <div class="el-tr" style="width: 300px">
                        <div class="title">默认：{{value11}}</div>
                        <el-date-picker
                        v-model="value11"
                        size="small"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy/MM/dd"
                        format="yyyy 年 MM 月">
                        </el-date-picker>
                  </div>
            </div>
      </el-scrollbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
              value1:'',
              value2:'',
              value3:'',
              value4:'',
              value5:'',
              value6:'',
              value7:'',
              value8:'',
              value9:'',
              value10:'',
              value11:'',
              pickerOptions:{
                  disableDate(time) {
                              returntime.getTime() > Date.now();
                  },
                  shortcuts:[{text:'今天'},{text:"昨天",onClick(picker){console.log(picker)}},{text:"一周以前"}],
              },
              pickerOptitons:{
                  disableDate(time) {
                              returntime.getTime() > Date.now();
                  },
                  shortcuts:[{text:'今天'},{text:"昨天",onClick(picker){console.log(picker)}},{text:"一周以前"}],
              }
        }
    }
}
</script>

<style lang="less">
      @import url('module.less');
</style>