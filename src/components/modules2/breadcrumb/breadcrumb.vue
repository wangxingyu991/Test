<style lang="less">
@import url('./breadcrumb.less');
</style>
<template>
  <div class="breadcrumb brd">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>组件1</el-breadcrumb-item>
            <el-breadcrumb-item>按钮</el-breadcrumb-item>
        </el-breadcrumb>
  </div>
</template>

<script>
export default {
      data(){
            return{
                  breadCrumbData:['首页','组件1','按钮'],
                  navData:{title:'首页',path:'/',children:{

                  }
                  }
            }
      },
}
</script>

<style>

</style>