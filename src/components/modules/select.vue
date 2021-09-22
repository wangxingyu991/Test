<style lang="less">
      @import url('module.less');
</style>
<template>
      <div class="components">
            <el-scrollbar>
                  <div class="card">
                        <el-divider>基础用法</el-divider>   
                        <div class="el-tr">
                              <span class="title">请选择美食：</span>
                              <el-select size="small" v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"></el-option>
                              </el-select>
                        </div>
                        <el-divider>禁止掉下拉选项</el-divider>   
                        <div class="el-tr">
                              <span class="title">选 择 地 区：</span>
                              <el-select size="small" v-model="value2" placeholder="请选择">
                                    <el-option
                                    v-for="item in cities"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="item.disabled">
                                    <span style="float: left">{{ item.label }}</span>
                                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                                    </el-option>
                              </el-select>
                              <span class="title">选择地区禁止掉</span>
                              <el-select size="small" v-model="value2" placeholder="请选择" disabled>
                                    <el-option
                                    v-for="item in cities"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="item.disabled">
                                    <span style="float: left">{{ item.label }}</span>
                                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                                    </el-option>
                              </el-select>
                        </div>
                        <el-divider>自定义下拉选择</el-divider>   
                        <div class="el-tr">
                              <span class="title">选 择 地 区：</span>
                              <el-select class="rh-button-primary" size="small"  v-model="lableName" placeholder="请选择报表路径" style="width:200px" ref="selectInput">
                                    <el-option :value="selectId" :label="lableName" style="width:100%;height:100%;">
                                          <el-tree :data="selectTree" default-expand-all :props="defaultProps" @node-click = "handleNodeClick"></el-tree>
                                    </el-option> 
                              </el-select>      
                        </div>
                        <el-divider>基础多选</el-divider>
                        <div class="el-tr">
                               <div class="title">标签选择器：</div>
                              <el-select size="small" v-model="value4" multiple placeholder="请选择" style="width:350px;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                              </el-select>
                        </div>
                        <div class="el-tr">

                        </div>
                        <div class="el-tr">
                              
                              <div class="title">搜索选择器：</div>
                              <seachInput ></seachInput>
                        </div>
                  </div>
            </el-scrollbar>
      </div>
</template>
<script>
import seachInput from "./select_input.vue"

export default {
      components:{seachInput},
      name:'Select',
      data() {
            return {
            cities: [{
                  value: 'Beijing',
                  label: '北京'
                  }, {
                  value: 'Shanghai',
                  label: '上海',
                  disabled:true
                  }, {
                  value: 'Nanjing',
                  label: '南京',
                  disabled:true
                  }, {
                  value: 'Chengdu',
                  label: '成都'
                  }, {
                  value: 'Shenzhen',
                  label: '深圳'
                  }, {
                  value: 'Guangzhou',
                  label: '广州'
            }],
            selectId2:'',
            selectId:'',
            lableName:'',
            lableName2:'',
            selectTree: [{
                  label: '',
                  children: [{
                  label: '北京',
                  children: [{
                        label: '北京市'
                        }]
                  }]
            }, {
                  label: '山东',
                  children: [{
                  label: '济南',
                        children: [{
                              label: '槐荫区'
                        },{
                              label: '历下区'
                        },{
                              label: '历城区'
                        }]
                  }, {
                        label: '青岛',
                        children: [{
                              label: '崂山区 '
                        }]
                  }]
            }, {
                  label: '东营3',
                  children: [{
                        label: '莱阳 3-1',
                        children: [{
                              label: '三级 3-1-1'
                        }]
                        }, {
                        label: '莱州 3-2',
                        children: [{
                              label: '蓬莱区 3-2-1'
                        }]
                  }]
            }],
            defaultProps: {
                  children: 'children',
                  label: 'label'
            },
            select:'',

            value: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            options: [{
                  value: '选项1',
                  label: 'E1企业智能'
                  }, {
                  value: '选项2',
                  label: 'AI服务'
                  }, {
                  value: '选项3',
                  label: '大数据服务'
                  }, {
                  value: '选项4',
                  label: 'MAPReduce服务'
                  }, {
                  value: '选项5',
                  label: 'AI开发平台'
            }],
      options2: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
      }
    },
    methods:{
            handleNodeClick(node){
                console.log(node,'node')
                if(node.children){
 
                }else{
                    this.selectId = node.url
                    this.lableName = node.label
                    this.$refs.selectInput.blur()
                    console.log(node.label);
                }

            },
            handleNodeClick2(node){
                console.log(node,'node')
                if(node.children){
 
                }else{
                    this.selectId2 = node.url
                    this.lableName2 = node.label
                    this.$refs.selectInput2.blur()
                    console.log(node.label);
                }

            },
    }
}
</script>   