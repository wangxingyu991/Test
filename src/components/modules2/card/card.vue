<style lang="less">
      @import url('../button/button.less');
      @import url('../page-header/page-header.less');
      @import url('../page-hint/page-hint.less');
      @import url('./page-card.less');
</style>
<template>
  <div class="card">
        <div class="rh-page-header">
            <div class="rh-head-and-operate">
                  <div class="tips-content">
                        <span class="rh-helpTip-text">
                        GaussDB(for MySQL)
                        </span>
                        <span class="rh-helpTip-icon">
                              <el-tooltip class="item" content="云数据库GaussDB(for MySQL)是华为自研的最新一代企业级高扩展海量存储分布式数据库，完全兼容MySQL">
                                    <i class="el-icon-info"></i>
                              </el-tooltip>
                        </span>
                  </div>
                  <div class="operate-btns">
                        <el-button>操作</el-button>
                  </div>
            </div>
            
        </div>
        <div class="rh-page-content">
              <div class="rh-page-hint" v-show="HintShow">
                    <div class="page-hint-content">
                          <span class="page-hint-icon">
                                <i class="el-icon-info"></i>
                          </span>
                          <span class="page-hint-text">
                                我的资源当前仅支持如下服务类型及区域的查询，更多服务及区域持续上线中。
                          </span>
                    </div>
                    <div class="operate-bts">
                          <div class="bt-close" @click="HintShow=false"><i class="el-icon-close"></i></div>
                    </div>
              </div>
        </div>
        <div class="rh-page-layout-section">
              <div class="project-info">
                    开通企业项目功能后，您可以根据需要，将资源分类归集使用，比如将具有相同使用目标的资源归属到同一个企业项目，方便对资源进行管理。
              </div>
        </div>
        <el-card class="box-card">
              <div slot="header">
                  <span>好吃的汉堡</span>
              </div>
              <div class="bottom clearfix">
                    <time class="time">{{currentDate}}</time>
                    <el-button stype='text' class="button">操作按钮</el-button>
              </div>
        </el-card>
  </div>
</template>

<script>
export default {

      data(){
            return{
                  currentDate: new Date(),
                  HintShow:true,
            }
      },

}
</script>
<style lang="less">

</style>