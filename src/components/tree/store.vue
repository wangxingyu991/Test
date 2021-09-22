<style lang="less">
      .rh-tree{
            // width:200px;
            margin:15px;
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
                              }
                        }
                        div.active.rh-tree-node{
                              color:#5e7ce0;
                              &::before{
                                    position: absolute;
                                    //left:30px;
                                    top: 8px;
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
            left: 6px;
            top: 46px;
            content: "";
            width: 1px;
            height: calc(100% - 57px);
            background: #d9e0f7;
            z-index: 2;
      }
      .rh-tree-leaf.leaf_1 .rh-tree-trunk.last::before{
            position: absolute;
            left: 30px;
            top: 43px;
            content: "";
            width: 1px;
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
      .leaf_1 div.active.rh-tree-node::before{
            position: absolute;
            left:6px;
            top: 8px;
            content: "";
            width: 1px;
            height: calc(100% - 18px);
            background: #5e7ce0;
            z-index: 3;           
      }
      .leaf_2{
            position: relative;
      }
      .leaf_2 div.active.rh-tree-node::before{
            position: absolute;
            left:30px;
            top: 8px;
            content: "";
            width: 1px;
            height: calc(100% - 18px);
            background: #5e7ce0;
            z-index: 3;           
      }
      .leaf_0>.rh-tree-node{
            padding-left:10px;
            font-weight:700;
      }
      .leaf_0>.rh-tree-node{
            padding-left:17px;
            font-weight:700;
      }
      .leaf_1 .rh-tree-node{
            padding-left:17px;
      }
      .leaf_2 .rh-tree-node{
            padding-left:45px;
      }
</style>
<template>
      <div class="rh-tree">
            <ul class="rh-tree-trunk">
                  <li class="rh-tree-leaf leaf_0">
                        <div class="rh-tree-node">网络控制台  <i v-show="true" class="el-icon-caret-bottom flotR"></i> <i v-show = 'false'  class="el-icon-caret-top"></i></div>
                        <ul class="rh-tree-trunk">
                              <li class="rh-tree-leaf leaf_1">
                                    <div class="rh-tree-node "  @click="TreeNode">总览</div>
                              </li>
                              <li class="rh-tree-leaf leaf_1">
                                    <div class="rh-tree-node"  @click="TreeNode">虚拟私有云 </div>
                              </li>
                              <li class="rh-tree-leaf leaf_1">
                                    <div class="rh-tree-node"   @click="TreeNode">子网</div>
                              </li>
                              <li class="rh-tree-leaf leaf_1">
                                    <div class="rh-tree-node" @click="parentsNode">弹性公网IP和宽带 <i  :class="{ 'el-icon-caret-bottom' : isDropdown, 'el-icon-caret-top' :!(isDropdown) }" class="flotR"></i></div>
                                    <ul class="rh-tree-trunk last">
                                          <li class="rh-tree-leaf leaf_2">
                                                <div class="rh-tree-node"  @click="TreeNode">弹性公网IP</div>
                                          </li>                                     
                                          <li class="rh-tree-leaf leaf_2">
                                                <div class="rh-tree-node"  @click="TreeNode">共享宽带</div>
                                          </li>                                     
                                          <li class="rh-tree-leaf leaf_2">
                                                <div class="rh-tree-node"  @click="TreeNode">共享流量包</div>
                                          </li>                                     
                                          <li class="rh-tree-leaf leaf_2">
                                                <div class="rh-tree-node"  @click="TreeNode">宽带加油包</div>
                                          </li>                                     
                                    </ul>
                              </li>
                              <li class="rh-tree-leaf leaf_1">
                                    <div class="rh-tree-node" @click="parentsNode">弹性公网IP和宽带 <i  :class="{ 'el-icon-caret-bottom' : isDropdown2, 'el-icon-caret-top' :!(isDropdown2) }" class="flotR"></i></div>
                                    <ul class="rh-tree-trunk last">
                                          <li class="rh-tree-leaf leaf_2">
                                                <div class="rh-tree-node"  @click="TreeNode">弹性公网IP</div>
                                          </li>                                     
                                          <li class="rh-tree-leaf leaf_2">
                                                <div class="rh-tree-node"  @click="TreeNode">共享宽带</div>
                                          </li>                                     
                                          <li class="rh-tree-leaf leaf_2">
                                                <div class="rh-tree-node"  @click="TreeNode">共享流量包</div>
                                          </li>                                     
                                          <li class="rh-tree-leaf leaf_2">
                                                <div class="rh-tree-node"  @click="TreeNode">宽带加油包</div>
                                          </li>                                     
                                    </ul>
                              </li>
                              <li class="rh-tree-leaf leaf_1">
                                    <div class="rh-tree-node"   @click="TreeNode">NAT网关</div>
                              </li>
                              <li class="rh-tree-leaf leaf_1">
                                    <div class="rh-tree-node" @click="TreeNode">弹性负载均衡</div>
                              </li>                        
                        </ul>
                  </li>
            </ul>
            <el-divider>nav系列</el-divider>
            <ul class="rh-tree-trunk">
                  <li class="rh-tree-leaf leaf_0"  v-for="(data1,index) in treeData" :key='index'>
                  <div class="rh-tree-node" >{{data1.label}}  <i v-if = "!(data1.isDropdown==undefined)" class="flotR"></i></div>
                  <ul class="rh-tree-trunk" v-if="!(data1.children=='undefined')" >
                        <li class="rh-tree-leaf leaf_1" v-for="(data2,index_2) in data1.children" :key="index_2">
                              <div class="rh-tree-node" @click="a($event,data2.children)">{{data2.label}} <i v-if = "!(data2.isDropdown==undefined)" :class="{ 'el-icon-caret-bottom' : data2.isDropdown, 'el-icon-caret-top' :!(data2.isDropdown) }" class="flotR"></i></div>
                              <ul class="rh-tree-trunk" v-if="!(data2.children=='undefined')" :class="{last:!(data2.LastChildren=='undefined')&&(data2.LastChildren)}">
                                    <li class="rh-tree-trunk leaf_2" v-for="(data3,index_3) in data2.children" :key="index_3">
                                          <div class="rh-tree-node" @click="a($event,data3.children)">{{data3.label}} <i v-if = "!(data3.isDropdown==undefined)" :class="{ 'el-icon-caret-bottom' : data3.isDropdown, 'el-icon-caret-top' :!(data3.isDropdown) }" class="flotR"></i></div>
                                    </li>
                              </ul>
                        </li>
                  </ul>
                  </li>
            </ul>
      </div>
</template>

<script>
export default {
      data(){
            return{
                  isActive:false,
                  isDropdown:true,
                  isDropdown2:true,
                  treeList:['1','2','3','4','5'],
                  treeData:[
                        {
                              id:1,
                              label:'弹性公网IP和宽带 ',
                              isDropdown:true,
                              LastChildren:false,
                              children:[{
                                    id:9,
                                    label:'弹性公网IP',
                                    isDropdown:true,
                                    LastChildren:true,
                                    children:[{
                                          id:11,
                                          label:'弹性公网IP'
                                    },{
                                          id:12,
                                          label:'共享宽带'
                                    }]
                              },
                              {
                                    id:10,
                                    label:'共享宽带'
                              }]
                        },{
                              id:2,
                              label:'虚拟私有云',
                              isDropdown:false,
                              LastChildren:true,
                              children:[{
                                    id:11,
                                    label:'共享宽带'
                              },{
                                    id:11,
                                    label:'弹性公网IP'
                              }]
                        },{
                              id:3,
                              label:'子网 '
                        }
                  ],
            }
      },
      methods:{
            a(el,boll){
                  console.log(boll==undefined);
                  if(boll==undefined){
                         this.TreeNode(el)
                  }else{
                       this.parentsNode(el);
                  };
            },
            TreeNode(el){
                  var arr = document.getElementsByClassName("rh-tree-node");
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

                 console.log(dropH+NodeHeight);

                  if(parseInt(dropH)>0){
                        dpDown_Obj.style.height = 0+"px";
                  }else{
                        dpDown_Obj.style.height = NodeHeight+"px"; 
                  }
                 console.log(dpDown_Obj.style.height);

                  this.isDropdown = !(this.isDropdown);
            }
      }
}
</script>

<style>

</style>