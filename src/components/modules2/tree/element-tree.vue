<template>
      <div :style="{'height':frame_height+'px',}">
            <div class="tree float">
                  <el-tree
                  :data = "data"
                  :props = "defaultProps" show-checkbox node-key="id" 
                  :default-expanded-keys = "[1,2]"
                  :default-checked-keys = "[2,4]" 
                  @node-click = "handleNodeClick"></el-tree>
            </div>
            <div class="tree float">
                  <el-tree
                  :data = "data2"
                  :props = "defaultProps" node-key="id" 
                  :default-expanded-keys = "[4]"
                  @node-click = "handleNodeClick"></el-tree>
            </div>
      </div>
</template>

<script>
export default {
          data(){
              return{
                  data:[{
                        id: 0,
                        label: '全国',
                        children: [
                        {
                              id: 1,
                              label: '山东省',
                              children: [
                              {
                                    id: 4,
                                    label: '济南市'
                              },
                              {
                                    id: 5,
                                    label: '聊城市'  
                              },
                              {
                                    id: 6,
                                    label: '青岛市'  
                              },
                              {
                                    id: 7,
                                    label: '潍坊市'  
                              },
                              {
                                    id: 8,
                                    label: '烟台市'  
                              },
                              ]
                        },{
                              id: 2,
                              label:'河北省',
                              children:[
                                    {
                                          label: '石家庄'
                                    },               
                              ]
                        }]
                  }],
                  frame_height:100,
                  defaultProps: {
                  children: 'children',
                  label: 'label'
                  },
                  data2:[{
                        id: 0,
                        label: '全国',
                        children: [
                        {
                              id: 1,
                              label: '山东省',
                              children: [
                              {
                                    id: 4,
                                    label: '济南市'
                              },
                              {
                                    id: 5,
                                    label: '聊城市'  
                              },
                              {
                                    id: 6,
                                    label: '青岛市'  
                              },
                              {
                                    id: 7,
                                    label: '潍坊市'  
                              },
                              {
                                    id: 8,
                                    label: '烟台市'  
                              },
                              ]
                        },{
                              id: 2,
                              label:'河北省',
                              children:[
                                    {
                                          label: '石家庄'
                                    },               
                              ]
                        }]
                  }]
              }
          },
            //vuex参数监听获取页面高度
            computed: {
                  frameProps() {
                        return this.$storage.state.frameProp.height
                  }
            },
            //vuex参数监听
            watch: {
                  frameProps: {
                        immediate: true,
                        handler: function (newval) {
                              this.frame_height = newval;
                        }
                  }
            },
          mounted(){
                this.frame_height = this.$storage.state.frameProp.height;
          },
          methods: {
            handleNodeClick(data) {
                  console.log(data);
            }               
          }
}
</script>

<style>
      .tree{
            width:200px;
            margin-right:20px;
            padding:20px;
            height:800px;
            background:#FFF;
      }
</style>