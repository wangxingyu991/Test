<style lang="less" scoped>
      .ti-leftmenu-head {
            position: relative;
            padding: 20px 36px 20px 20px;
            font-size: 14px;
            text-align: left;
            line-height: 20px;
            color: #252b3a;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
            width: 100%;
            margin-bottom: 10px;
      }
      .ti-leftmenu-head:after {
            position: absolute;
            bottom: 0;
            left: 20px;
            content: "";
            border: solid #dfe1e6;
            border-width: 0 0 1px;
            width: calc(100% - 56px);
      }
      .rh-tree{
            // width:200px;
            margin:0px;
            .rh-tree-trunk{
                  background: #FFF;
                  overflow: hidden;
                  .rh-tree-leaf{
                        div.rh-tree-node{
                              font-size: 12px;
                              color:#525252;
                              line-height:37px;
                              cursor: pointer;
                              &::before{
                                    z-index: 1;
                              }
                              &:hover{
                                    background: #e6e8ee;
                                    color:#5e7ce0;

                              }
                        }
                        div.active.rh-tree-node{
                              color:#5e7ce0;
                              &::before{
                                    position: absolute;
                                    left:30px;
                                    top: 8px;
                                    width:2px;
                                    content: "";
                                    height: calc(100% - 18px);
                                    background: #5e7ce0;
                                    z-index: 3;
                              }
                        }
                  }
                  &.last::before{
                        position: absolute;
                  }
            }
      }
      .rh-tree-leaf.leaf_0 .rh-tree-trunk.last::before{
            position: absolute;
            left: 30px;
            top: 43px;
            content: "";
            width: 2px;
            height: calc(100% - 52px);
            background: #d9e0f7;
            z-index: 2;
      }
      .flotR{
            float:right;
            margin-right: 10px;
            margin-top: 10px;
      }
      .leaf_1{
            position: relative;
      }
      .rh-tree-leaf.leaf_0{
            position: relative;
      }
      .leaf_1{
            position: relative;
      }
      .leaf_1 div.active.rh-tree-node::before{
            position: absolute;
            left:30px;
            top: 8px;
            content: "";
            width: 2px;
            height: calc(100% - 18px);
            background: #5e7ce0;
            z-index: 3;           
      }
      .leaf_0>.rh-tree-node{
            padding-left:17px;
            font-weight:700;
      }
      .leaf_1>.rh-tree-node{
            padding-left:45px;
      }
</style>
<template>
 <div style="height:100%;">
      <el-scrollbar style="height:100%">
            <div class="rh-tree" id="tree_layer2">
                  <div class="ti-leftmenu-head">
                        云服务器控制台
                  </div>
                  <ul class="rh-tree-trunk">
                        <li class="rh-tree-leaf leaf_0"  v-for="(treeN1,index) in treeData" :key='index'>
                              <div class="rh-tree-node" @click="a($event,treeN1)">
                                    {{treeN1.label}}  
                                    <i v-if = "('isDropdown' in treeN1)" :class="{ 'el-icon-caret-bottom' :treeN1.isDropdown, 'el-icon-caret-top' :!(treeN1.isDropdown) }" class="flotR"></i>
                              </div>
                              <ul class="rh-tree-trunk last" v-if="('children' in treeN1)" >
                                    <li class="rh-tree-leaf leaf_1" v-for="(treeN2,index_2) in treeN1.children" :key="index_2">
                                          <div class="rh-tree-node" @click="a($event,treeN2)">
                                                {{treeN2.label}} 
                                               
                                          </div>
                                    </li>
                              </ul>
                        </li>
                  </ul>
            </div>
      </el-scrollbar>
</div>
</template>

<script >
export default {
      props:{
            TreeData:{
                  type:Array
            }
      },
      data(){
            return{
                  isActive:false,
                  isDropdown:true,
                  isDropdown2:true,
                  treeList:['1','2','3','4','5'],
                  treeData:[],
            }
      },
      methods:{
            a(el,data){
                  data.isDropdown = !(data.isDropdown);

                  if('children' in data){
                        this.parentsNode(el);
                  }else{
                        this.TreeNode(el)
                  };
            },
            TreeNode(el){
                  var obj = document.getElementById("tree_layer2");

                  var arr = obj.getElementsByClassName("rh-tree-node");
                  for(var i=0; i<arr.length;i++){
                        arr[i].setAttribute("class","rh-tree-node");
                  }
                  el.target.setAttribute("class","rh-tree-node active");
            },
            parentsNode(el){
                  let dpDown_Obj = el.target.nextElementSibling;
                  let dropH = el.target.nextElementSibling.clientHeight ;//获取下拉菜单下拉内容的高度
                  let dropChild = el.target.nextElementSibling.childNodes;//获取下拉菜单下拉节点的数量
                  let newNodes=[];
                  let NodeHeight = 0;

                  for(var i = 0;i<dropChild.length;i++){//删除掉textNode节点
                        if(!(dropChild[i].nodeType==3)&&!(dropChild[i].nodeName=="#text")){
                              newNodes.push(dropChild[i]);
                        }
                  }
                  for(var i=0; i<newNodes.length;i++){
                        NodeHeight = NodeHeight + newNodes[i].clientHeight;
                  }

                  if(parseInt(dropH)>0){
                        dpDown_Obj.style.height = 0+"px";
                  }else{
                        dpDown_Obj.style.height = NodeHeight+"px"; 
                  }

                  this.isDropdown = !(this.isDropdown);
            }
      },
      mounted(){
            console.log(this.TreeData)
            this.treeData = this.TreeData;
      }
}
</script>

<style>

</style>