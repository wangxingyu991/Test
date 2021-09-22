<!--备份文件-->
<style lang="less">
    @import url(./main/main.less);
</style>
<template>
  <div class="main-wrap" :style="{height:WinHeight+'px'}">
      <div class="rh-top-head">
        <div class="rh-logo" :class="{'shrink':!(isNavShow)}">
          <div class="rh-logo-img">
            <i class="el-icon-s-help"></i>
          </div>
          <div class="rh-logo-text" v-show="isNavShow" >财政电子票据管理平台</div>
          <div class="nav-tragge" @click="NavToggle" >
            <i class="el-icon-s-fold"></i>
          </div>
        </div>
        <div class="rh-party-left">
          <div class="rh-nav-horizental">
            <ul class="Horizetal-nav-items">
              <li class="horizental-nav-item">保险业务</li>
              <li class="horizental-nav-item">电子票据开具</li>
              <li class="horizental-nav-item">报销发票校验</li>
            </ul>
          </div>
        </div>
        <div class="rh-topRight-party">
            <div class="rh-search" :class="{search_focus:isFocus}" style="display:none;">
              <input type="text" class="rh-input input-primary" @focus="isFocus=true" @blur="isFocus=false" />
              <i class="el-icon-search" @click="mainSearch"></i>
            </div>
            <div class="vertical-line" style="display:none;"></div>
            <div class="rh-nav">
              <ul class="nav-ul">
                <li>工单</li>
                <li>更多</li>
                <li>消息</li>
              </ul>
            </div>
            <div class="vertical-line" style="display:none;"></div>
            <div class="rh-user-avatar">
              <div class="rh-avatar-img">
                <img  src="../../static/img/potr.png" alt="">
              </div>
              <div class="rh-user-drop">
                <ul>
                  <li class="rh-li" @click="clearTocken()">注销</li>
                  <li class="rh-li">{{p_name}}信息</li>
                  <li class="rh-li">我的工单信息</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div class="rh-side-left" :style="{height:navHeight+'px',width:navWidth+'px'}">
        <!-- 导航树图标 -->
        
        <div class="rh-nav-icon-wrap"  v-show="!isNavShow">
          <div class="rh-nav-icons">
            <div class="nav-icon" v-for="(icon,index) in dataMenuList" :key="index">
              <el-tooltip placement="right-start">
                <div class="tooltip-nav-list" v-if="('children' in icon)" slot="content">
                    <div class="tol-nav-item" v-for="(nav,index) in icon.children" :key="index">{{nav.label}}</div>
                </div>
                <i :class="icon.icon"></i>
              </el-tooltip>
            </div>
          </div>
        </div>
        <div class="rh-nav-wrap" v-show="isNavShow">
          <el-scrollbar  style="height: 100%;" :native="false">
            <!--导航树模块-->
            <div class="rh-nav-item" :key="100">
              <div class="rh-nav-main nav-layer-1" 
              @click="isActive=!isActive">
                <span class="rh-nav-icon"><i class="el-icon-s-tools"></i></span>
                <span class="rh-nav-name">开票单位管理</span>
                <span class="rh-nav-arrow" 
                :class="{'active':!isActive}">
                  <i v-show="isActive" class="el-icon-arrow-down"></i>
                  <i v-show="!isActive" class="el-icon-arrow-up"></i>
                </span>
              </div>
              <div class="rh-nav-drop" 
              :class="{'rh-nav-close':isActive==false}">
                <div class="rh-nav-submain nav-layer-2" 
                :key="index" 
                v-for="(data,index) in data_nav"  
                :class="{'submain-active':sub_isActive==index&&sub_id==1}" 
                @click="subNavclick(1,index)">
                  <span class="rh-subnav-name">{{data.name}}</span>
                  <span class="rh-nav-arrow" v-show="showSubarrow">
                    <i v-show="isActive" class="el-icon-arrow-down"></i>
                    <i v-show="!isActive" class="el-icon-arrow-up"></i>
                  </span>
                </div>
    
                <!-- <div class="rh-nav-submain nav-layer-2" :key="2" :class="{'submain-active':sub_isActive==2} " @click="subNavclick(2)">
                  <span class="rh-subnav-name">单位基本信息</span>
                  <span class="rh-nav-arrow" v-show="showSubarrow"><i v-show="isActive" class="el-icon-arrow-down"></i><i
                      v-show="!isActive" class="el-icon-arrow-up"></i></span>
                </div> -->
              </div>
            </div>
            <div class="rh-nav-item"  :key="101">
              <div class="rh-nav-main nav-layer-1" @click="isActive_2=!isActive_2">
                <span class="rh-nav-icon"><i class="el-icon-s-platform"></i></span>
                <span class="rh-nav-name">组件信息</span>
                <span class="rh-nav-arrow" :class="{'active':!isActive_2}">
                  <i v-show="isActive_2" class="el-icon-arrow-down"></i>
                  <i v-show="!isActive_2" class="el-icon-arrow-up"></i>
                </span>
              </div>
              
              <div class="rh-nav-drop"
              :class="{'rh-nav-close':isActive_2==false}">
                <div class="rh-nav-submain nav-layer-2" 
                :key="index" v-for="(data,index) in data_module"
                  :class="{'submain-active':sub_isActive_2==index&&sub_id==2}" 
                  @click="subNavclick(2,index)">
                  <span class="rh-subnav-name" >{{data.name}}</span>
                  <span class="rh-nav-arrow" v-show="showSubarrow"><i v-show="isActive_2" class="el-icon-arrow-down"></i><i
                      v-show="!isActive_2" class="el-icon-arrow-up"></i></span>
                </div>
                <!-- <div class="rh-nav-submain nav-layer-2" :key="2" :class="{'submain-active':sub_isActive==2} " @click="subNavclick(2)">
                  <span class="rh-subnav-name">单位基本信息</span>
                  <span class="rh-nav-arrow" v-show="showSubarrow"><i v-show="isActive" class="el-icon-arrow-down"></i><i
                      v-show="!isActive" class="el-icon-arrow-up"></i></span>
                </div> -->
              </div>
            </div>
            <!--动态导航内容显示以及单击事件-->
            <div class="rh-nav-item" v-for="(data_nav,index) in dataMenuList" :key="index" :layer="data_nav.layer">
                <div class="rh-nav-main nav-layer-1" @click="nav_click($event,data_nav)">
                <!--导航图标-->
                  <span class="rh-nav-icon">
                    <i :class="data_nav.icon"></i>
                  </span>
                <!--导航名称-->
                  <span class="rh-nav-name">{{data_nav.label}}</span>
                <!--导航箭头-->
                  <span class="rh-nav-arrow" v-show='isArrowShow(data_nav)'>
                    <i class="el-icon-arrow-down" v-show="data_nav.isShow"></i>
                    <i class="el-icon-arrow-up" v-show="!(data_nav.isShow)"></i>
                  </span>
                </div>
                <!--下拉菜单-->
                <div class="rh-nav-drop" v-show="data_nav.isShow">
                  <div class="rh-nav-submain nav-layer-2"  v-for="(data,index) in data_nav.children" :key="index" :layer="data.layer">
                    <div class="rh-subnav-item" @click="nav_click($event,data)">
                      <!--下拉菜单名称-->
                      <span class="rh-subnav-name">{{data.label}}</span>
                      <!--下拉菜单箭头是否显示-->
                      <span class="rh-nav-arrow" v-show="isArrowShow(data)">
                        <!--判断children属性是否存在-->
                          <i class="el-icon-arrow-down"  v-show="data_nav.isShow"></i>
                          <i class="el-icon-arrow-up"  v-show="!(data_nav.isShow)"></i>
                      </span>
                    </div>
                    <div class="rh-subnav-drop" v-show="data.isShow">
                      <div class="rh-nav-item" v-for="(data_sub,index) in data.children" :key="index"  @click="nav_click($event,data_sub)">
                        <span class="rh-nav-name">{{data_sub.label}}</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
      <div class="rh-side-content" :style="{height:navHeight+'px',width:contentWidth+'px',left:contentLeft+'px'}">
        {{aa}}
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
import './main/main.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
    navlist:'',
    isNavShow:false,
    navWidth:50,
    p_name:'XXXXXXXXX',  
     navHeight:"300px",
     isFocus:false,
     isActive:false,
     WinHeight:900,
     contentWidth:1920,
     contentLeft:50,
     isActive_2:false,
     showSubarrow:false,
     sub_isActive:0,
     sub_id:0,
     sub_isActive_2:1,
     dataMenuList:[
        {
          id:1,
          label:'开票单位管理',
          layer:'1',
          children:[{
            id:3,
            label:'单位基本信息',
            layer:'1-1',
          },{
            id:4,
            label:'单位证书信息',
            layer:'1-2',          
          },{
            id:4,
            label:'单位证书信息',
            layer:'1-2',          
          },{
            id:5,
            label:'单位票种信息',
            layer:'1-3',          
          },{
            id:6,
            label:'单位签章信息',
            layer:'1-3',          
          }],
          id:2,
          label:'组件信息',
          layer:'2',
          children:[{

          }]
        }
      ],
     data_nav:[{name:'单位基本信息',path:'/main/dwjbxx'},{ name:'单位证书信息',path:'/main/dwzsxx'},{name:'单位票种信息', path: '/main/dwpzxx'},{name:'单位签章信息',path:'/main/dwqzxx'}],
     data_module:[
      {name:'button按钮',path:'/components/button'},
      {name:'单选复选按钮',path:'/components/radio'},
      {name:'input输入框',path:'/components/input'},
      {name:'计数器',path:'/components/number'},
      {name:'选择器',path:'/components/select'},
      {name:'开关',path:'/components/switch'},
      {name:'时间日期控价',path:'/components/date_pick'},
      {name:'上传',path:'/components/upload'},
      {name:'穿梭框',path:'/components/transfer'},
      {name:'表单',path:'/components/form'},
      {name:'表格',path:'/components/table'},
      {name:'表格2',path:'/components/table2'},
      {name:'tag标签页',path:'/components/tabPage'},
      {name:'diy页',path:'/components/diy'},
      {name:'tree页',path:'/components/tree'},
      ]
    }
  },
  computed:{
    aa(){
      let list = this.$storage.getters.userInfo;
      console.log(list);
    }
  },
  methods:{
    NavToggle(){
      this.isNavShow = !(this.isNavShow);
      console.log("window.innerWidth:"+window.innerWidth);
      this.navWidth =  (this.isNavShow) ? 240 : 50;
      console.log("this.navWidth:"+ this.navWidth);
    //window的宽度
      this.contentWidth = (this.isNavShow) ? (window.innerWidth-240) : (window.innerWidth-50);
      console.log("this.contentWidth:后"+ this.contentWidth);
      this.contentLeft = (this.isNavShow) ? 240 : 50;
      console.log("this.contentLeft:后"+ this.contentLeft);   
    },
    mainSearch(){
      console.log("Asdfafdds");
    },
    nav_click($event,data_nav){
      this.$router.push(data_nav.path);
      //console.log(data_nav.isShow);
      data_nav.isShow = !data_nav.isShow;
    },
    isArrowShow(NavDate){
      // 判断导航菜单对象里面是否含有子元素集合
      //名校的人格分析---边界--好话好说---
      var prop = "children";
      if(prop in NavDate){
        return true;
      }else{
        return false;
      }
    },
    clearTocken(){
      localStorage.removeItem("userName");
      this.$router.push({path:'/login'});
      this.$message({
        message:'恭喜你，注销成功消息'+localStorage.getItem("token"),
        type:'success'
      })
    },
    subNavclick(sub_id,index){
      this.sub_isActive = index;
      this.sub_id = sub_id;
      let path = "";
      switch(sub_id){
        case 1:
          {this.sub_isActive = index;
          path = this.data_nav[index].path;
          }
          break;
        case 2:
          {
          this.sub_isActive_2 = index;
          path = this.data_module[index].path;
          }
          break;
        default:
          return;
      };
      this.$router.push(path);
    },
    mainNavclik(key){
      console.log(key)
    }
  },
  created(){
    let that =this;
    this.navHeight = window.innerHeight-50;
    this.WinHeight = window.innerHeight;
    //this.contentWidth = window.innerWidth-240;
    if(this.isNavShow){
      this.contentWidth = window.innerWidth-240;     
    } else {
      this.contentWidth = window.innerWidth-50;   
    }
    window.onresize = ()=>{
      this.WinHeight = window.innerHeight;
      if(this.isNavShow){
        this.contentWidth = window.innerWidth-240;     
      } else {
         this.contentWidth = window.innerWidth-50;   
      }
      console.log("内容去高度："+document.body.clientHeight);
      this.navHeight = window.innerHeight-50;
    };
  },
  mounted(){
    // 获取vuex中的用户信息
    this.p_name = this.$storage.state.userName;
    // 获取导航信息
    this.dataMenuList = this.$storage.getters.userInfo;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
