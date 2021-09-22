<template>
      <div class="box" ref="box" style="height:100%;">
        <div class='left'>
                <Tree1 v-bind:TreeData = "TreeData"></Tree1>
        </div>
        <div class="resize" title="收缩侧边栏">
                ⋮
        </div>
        <div class='right' style="height:100%">
            <Tree2 v-bind:TreeData = "TreeData2"></Tree2>
        </div>
        <div class="resize" title="收缩侧边栏">
                ⋮
        </div>
        <div class="center">
            <ElementTree></ElementTree>
        </div>
      </div>
</template>
 
<script>
import Tree1 from './tree_template.vue'
import Tree2 from './tree_layer2.vue'
import ElementTree from './element_tree.vue'
  export default {
    components:{
      Tree1,Tree2,ElementTree
    },
    name: 'Dashboard',
    data(){
        return{
        TreeData:[
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
                        },{
                                id:13,
                                label:'共享宽带'
                        },{
                                id:14,
                                label:'共享宽带'
                        },{
                                id:15,
                                label:'共享宽带'
                        }]
                    },
                    {
                        id:10,
                        label:'共享宽带'
                    },
                    {
                        id:11,
                        label:'共享宽带2'
                    },
                    {
                        id:11,
                        label:'共享宽带3'
                    }]
                },{
                        id:2,
                        label:'虚拟私有云',
                        isDropdown:false,
                        LastChildren:false,
                        children:[{
                            id:11,
                            label:'共享宽带',
                            isDropdown:false,
                            LastChildren:true,
                            children:[{
                                    id:11,
                                    label:'弹性公网IP'
                            },{
                                    id:12,
                                    label:'共享宽带'
                            },{
                                    id:13,
                                    label:'共享宽带'
                            },{
                                    id:14,
                                    label:'共享宽带'
                            },{
                                    id:15,
                                    label:'共享宽带'
                            }]
                            
                        },{
                            id:11,
                            label:'弹性公网IP'
                        }]
                },{
                        id:3,
                        label:'子网'
                },{
                        id:4,
                        label:'子网2'
                }
            ],
        TreeData2:[
                {
                    id:1,
                    label:'弹性公网IP和宽带 ',
                    isDropdown:true,
                    LastChildren:false,
                    children:[{
                        id:9,
                        label:'弹性公网IP',
                    },
                    {
                        id:10,
                        label:'共享宽带'
                    },
                    {
                        id:11,
                        label:'共享宽带2'
                    },
                    {
                        id:11,
                        label:'共享宽带3'
                    }]
                },{
                        id:2,
                        label:'虚拟私有云',
                },{
                        id:3,
                        label:'子网'
                },{
                        id:4,
                        label:'子网2'
                }
            ],
        }
    },
    mounted () {
      this.dragControllerDiv();
    },
    methods: {
        dragControllerDiv: function () {
            var resize = document.getElementsByClassName('resize');
            var left = document.getElementsByClassName('left');
            var mid = document.getElementsByClassName('right');
            var box = document.getElementsByClassName('box');
            for (let i = 0; i < resize.length; i++) {
                // 鼠标按下事件
                resize[i].onmousedown = function (e) {
                    //颜色改变提醒
                    resize[i].style.background = '#818181';
                    var startX = e.clientX;
                    // 鼠标拖动事件
                    document.onmousemove = function (e) {
                        resize[i].left = startX;
                        var endX = e.clientX;
                        var moveLen = resize[i].left + (endX - startX); // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
                        var maxT = box[i].clientWidth - resize[i].offsetWidth; // 容器宽度 - 左边区域的宽度 = 右边区域的宽度
                        if (moveLen < 32) moveLen = 32; // 左边区域的最小宽度为32px
                        if (moveLen > maxT - 150) moveLen = maxT - 150; //右边区域最小宽度为150px
                        resize[i].style.left = moveLen; // 设置左侧区域的宽度
                        for (let j = 0; j < left.length; j++) {
                            left[j].style.width = (moveLen/document.body.clientWidth)*100-8.5 + '%';
                            mid[j].style.width = ((box[i].clientWidth - moveLen)/document.body.clientWidth - 0.008)*100 + '%';
                        }
                    };
                    // 鼠标松开事件
                    document.onmouseup = function (evt) {
                        //颜色恢复
                        resize[i].style.background = '#d6d6d6';
                        document.onmousemove = null;
                        document.onmouseup = null;
                        resize[i].releaseCapture && resize[i].releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
                    };
                    resize[i].setCapture && resize[i].setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
                    return false;
                };
            }
        },
    }
  }
</script>
 
<style lang="less" scoped>
 .left {
    width: 220px;
    height:1000px;
    overflow-y:auto;
    overflow-x:hidden;
    float: left;
}
 .center {
    width: 220px;
    height:1000px;
    overflow-y:auto;
    overflow-x:hidden;
    float: left;
    background: #FFF;
}
.resize {
    cursor: col-resize;
    float: left;
    position: relative;
    top: 45%;
    background-color: #d6d6d6;
    border-radius: 5px;
    width: 0.6%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-size: cover;
    background-position: center;
    font-size: 0.32rem;
    color: white;
}
/*拖拽区鼠标悬停样式*/
.resize:hover {
    color: #444444;
}
.right {
    height:7.8rem;
    float: left;
    width:240px;
    background: white;
}
.box {
    width: 100%;
    height: 7.8rem;
}
</style>