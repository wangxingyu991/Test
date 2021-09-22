<style lang="less">
.el-form{
      width:100%;
      .el-form-item{
            margin-bottom:20px;
            .el-icon{
                  width: 30px;
                  height: 30px;
                  margin-top: 0px;
                  position: absolute;
                  text-align: center;
            }
            .el-form-item__label{
                  width:180px;
                  height:28px;
                  line-height: 26px;
                  font-size: 12px;
            }
            .el-form-item__content{
                  margin-right: 30px;
                  line-height: 28px;
                  font-size: 12px;
                  .el-input{
                        width:100%;
                        font-size: 12px;
                        .el-input__inner{
                              height:28px;
                              line-height: 28px;
                              border-radius:2px;
                        }
                        .el-input__suffix{
                              .el-input__suffix-inner{
                                    .el-input__icon{
                                          line-height:28px;
                                    }
                              }
                        }
                        .el-input__prefix{
                          .el-input__icon{
                            line-height:28px;
                          }
                        }  
                  }    
                  .el-select{
                        width:100%;
                  }
                  .el-switch{
                    height:20px;
                    .el-switch__core{
                      border-radius:2px;
                      &:after{
                        border-radius:2px;
                        width:16px;
                        height:16px;
                      }
                    }
                    .el-switch__input{
                      color:#FFF;
                    }
                  }
                  .el-radio-group{
                        .el-radio-button{
                          .el-radio-button__inner{
                                padding: 6px 20px;
                                font-size: 12px;
                                height:28px;
                                &:first-child{
                                      border-radius: 2px 0 0 2px;
                                }
                                &:last-child{
                                      border-radius: 0px 2px 2px 0px;
                                }
                          }
                        }
                        .el-radio{
                          .el-radio__label{
                            font-size: 12px;
                          }
                        }
                  }
                  .el-checkbox-group{
                    .el-checkbox{
                      .el-checkbox__label{
                        font-size:12px;
                      }
                    }
                  }
            }
      }
}
.el-button{
      padding: 0px 20px;
      line-height: 26px;
      font-size: 12px;
      border-radius: 2px;
      &:hover{
            color:#5e7ce0;
            background: #fff;
      }
      &:focus{
            color:#5e7ce0;
            background: #fff;                 
      }
}
.card{
  background:#fff;
  padding:20px;
}

</style>
<template>
  <div class="components">
  <el-scrollbar  style="height: 100%">
      <div class="card">
        <el-form ref="form" :model="form" label-width="80px" style="width:50%">
          <el-form-item label="基本输入">
            <el-input v-model="form.name"></el-input>
            <span class="el-icon">
              <el-tooltip :content="form.description" placement="right-start">
                <div slot='content' style="width:300px">{{form.description}}</div>
                <i class="el-icon-question"></i>
              </el-tooltip>
            </span>
          </el-form-item>
          <el-form-item label="下拉框">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <span class="el-icon">
              <el-tooltip :content="form.description" placement="right-start">
                <div slot='content' style="width:300px">{{form.description}}</div>
                <i class="el-icon-question"></i>
              </el-tooltip>
            </span>
          </el-form-item>
          <el-form-item label="组织机构树">
            <el-select v-model="form.tree" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <span class="el-icon">
              <el-tooltip :content="form.description2" placement="right-start">
                <div slot='content' style="width:300px">{{form.description}}</div>
                <i class="el-icon-question"></i>
              </el-tooltip>
            </span>
          </el-form-item>
          <el-form-item label="日期输入">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2" :style="{'text-align':'center'}">——</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="开关按钮">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="多选按钮">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选按钮">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="按钮型radio选择">
            <el-radio-group v-model="form.resource2">
              <el-radio-button label="线上品牌商赞助"></el-radio-button>
              <el-radio-button label="线下场地免费"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
  </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
        return {
          form: {
            description:'1个或多个下面的关键词，迅雷会员一天免费送吃鸡好迅雷有没有ios迅雷会员一天体验卡注册账号在哪里迅雷超级会员租专业的男人福利网站',
            description:'下拉选择组织机构树',
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            resource2: '',
            desc: '',
            ruleForm:{
              name:'',
            }
          }
        }
  },
  method:{
    method:function(){
      console.log("sddd");
    }
  }
}
</script>
