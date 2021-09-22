<style lang="less">
      @import url('module.less');
</style>
<template>
    <div class="components">
        <el-scrollbar  style="height: 100%">
            <div class="card">
                <div class="el-tr">
                    <el-tooltip class="item" effect="dark" content='请选择一台或多台需要开机的云端服务器'>
                        <el-tag>标签一</el-tag>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" >
                        <div class="content" slot="content">
                            您宝贵的意见和建议是我们持续提升产品体验的源动力，<br/>感谢您的参与！
                        </div>
                    <el-tag type="success">标签二</el-tag>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content='您宝贵的意见和建议是我们持续提升产品体验的源动力，感谢您的参与！'>                   
                    <el-tag type="info">标签三</el-tag>
                    </el-tooltip>
                    <el-tooltip class="item" width="200" effect="dark" content=''>
                        <div class="content" slot="content" style="width:200px">
                            系统盘随云服务器一同购买，数据盘可单独购买并手动挂载至云服务器。<br/>
                            您可在当前页面点击“购买磁盘”，也可在云服务器控制台点击。<br/>
                            <a href="#" style="color:blue">新增磁盘</a>
                        </div>
                        <el-tag type="warning">标签四</el-tag>
                    </el-tooltip>
                    <el-tooltip class="item" effect="light" content='请选择一台或多台需要开机的云端服务器'>
                        <el-tag type="danger">标签五</el-tag>
                    </el-tooltip>
                </div>
            </div>
        </el-scrollbar>
     </div>
</template>

<script>
      export default {

      }
</script>