<style lang="less" scope>
      .el-dialog__header {
            padding:32px 32px 28px; 
            color: #333;
            font-weight: 700;
      }
      .el-dialog__body{
            padding:0px 32px;
            max-height: 746.4px;
            overflow: auto;
      }
</style>
<template>
      <el-dialog
      title="创建参数模板"
      :visible.sync="Visible"
      width="40%"
      :before-close="close">

            <slot></slot>
      </el-dialog>
</template>

<script>
export default {
  props:{
      dialogVisible:{
            type :Boolean,
      }
  },
  data() {
    return {
          Visible:false,
          isSubmit:false,
    };
  },
  watch: {
      dialogVisible(oldV,newV){
            this.Visible = this.dialogVisible;
      }
  },
  mounted() {
      this.Visible = this.dialogVisible;
  },
  methods: {
      close(){
            this.Visible = false;
            this.$emit('CloseBut', this.Visible);
      },
  },
};
</script>

<style scoped lang="less">

</style>
