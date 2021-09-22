<style lang="less">
      .rh-card{
            height:100%;
            padding:20px;
            background: #fff;
            .title{
                  margin-bottom: 12px;
                  font-size: 14px;
                  color: #252b3a;
                  font-weight: 700;
            }
            .rh-card-body{
                  height:100%;
                  width:100%;
            }
      }
</style>
<template>
      <div class="rh-card" style="{padding:padding||20}">
            <div class="title"><slot name="title"></slot>开发者工具-API搜索</div>
            <div class="rh-card-body">
                  <slot></slot>
            </div>
      </div>
</template>

<script>

export default {
      name:'card',
      data(){
            return{

            }
      },
      props:{
            padding:Number,
      }
}
</script>

<style>

</style>