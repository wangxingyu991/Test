<style lang="less">
  @import url(./less/rh-input.less);
  .rh-diy-wrap{
    padding:15px;
  }
  .h20{
    height:15px;
  }
</style>
<template>
  <div class="rh-diy-wrap">
    <RhCard>
        <span slot="title">开发者工具-API搜索</span>
        <div class="content">
          <el-input class="rh-input-search" size="small" v-model="input1" suffix-icon="el-icon-search"></el-input>
        </div>
    </RhCard>
    <div class="h20">api
    </div>
    <RhCard>
        <span slot="title">开发者工具-API搜索</span>
        <div class="content">
          内容区
        </div>
    </RhCard>  
  </div>
</template>

<script>
import card from './card.vue'
export default {
      components:{
        RhCard:card,
      },
      data(){
          return{
            input1:""
          }
      }
}
</script>

<style>

</style>