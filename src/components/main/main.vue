
<template>
  <div class="main-wrap" :style="{height:WinHeight+'px'}">
      <div class="rh-top-head">
        <div class="rh-logo" :class="{'shrink':!(isNavShow)}">
          <div class="rh-logo-img">
            <i class="el-icon-s-help"></i>
          </div>
          <div class="rh-logo-text" v-show="isNavShow" >毕马威中国电子发票服务平台</div>
          <div class="nav-tragge" @click="NavToggle" :class="{'active':!isNavShow}">
            <i class="el-icon-s-fold"></i>
          </div>
        </div>
        <div class="rh-party-left">
          <div class="rh-nav-horizental">
            <ul class="Horizetal-nav-items">
              <li class="horizental-nav-item">控制台</li>
              <li class="horizental-nav-item">销项</li>
            </ul>
          </div>
        </div>
        <div class="rh-topRight-party">
            <div class="rh-search" :class="{search_focus:isFocus}" style="display:block;">
              <input type="text" class="rh-input input-primary" @focus="isFocus=true" @blur="isFocus=false" />
              <i class="el-icon-search" @click="mainSearch"></i>
            </div>
            <div class="vertical-line" style="display:none;"></div>
            <div class="rh-nav">
              <ul class="nav-ul">
                <li>工单</li>
                <li>
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      更多
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>选项一</el-dropdown-item>
                      <el-dropdown-item>选项二</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
                <li>
                  <el-badge size="mini" :value="12" class="rh-badge">
                    <span class="nav-text">消息</span> 
                  </el-badge>  
                </li>
              </ul>
            </div>
            <div class="vertical-line" style="display:none;"></div>
            <div class="rh-user-avatar">
              <div class="rh-avatar-img">
                <img  src="../../../static/img/potr.png" alt="">
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
              <el-tooltip placement="right-start" v-if="('children' in icon)">
                <div class="tooltip-nav-list"  slot="content">
                    <div class="tol-nav-item" v-for="(nav,index) in icon.children" :key="index"  @click="nav_click($event,nav)">{{nav.label}}</div>
                </div>
                <i :class="icon.icon"></i>
              </el-tooltip>
              <i :class="icon.icon" v-if="!('children' in icon)"></i>
            </div>
          </div>
        </div>
        <!--导航树文字模块-->
        <div class="rh-nav-wrap" v-show="isNavShow">
          <el-scrollbar  style="height: 100%;" :native="false">
            <!-- 导航收索部分 -->
            <div class="rh-search" :class="{search_focus:isFocus}" style="display:block;">
              <el-input  placeholder="请输入内容" suffix-icon="el-icon-search" v-model="Search_Nav"></el-input>
            </div>
            <!--动态显示导航内容以及单击路由跳转-->
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
                    <i class="el-icon-arrow-down" v-show="!(data_nav.isShow)"></i>
                    <i class="el-icon-arrow-up" v-show="data_nav.isShow"></i>
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
                          <i class="el-icon-arrow-down"  v-show="!(data.isShow)"></i>
                          <i class="el-icon-arrow-up"  v-show="data.isShow"></i>
                      </span>
                    </div>
                    <div class="rh-subnav-drop" v-show="data.isShow">
                      <div class="rh-Ssubnav-item" v-for="(data_sub,index) in data.children" :key="index"  @click="nav_click($event,data_sub)">
                        <span class="rh-nav-name">{{data_sub.label}}</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
      <div class="rh-side-content" :style="{height:(navHeight)+'px',width:contentWidth+'px',left:contentLeft+'px'}">
        <div class="right-content" :style="{'padding-left':(is_contentNav_show ? 308:15)+'px'}">
          <!-- <div class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="(item,index) in breadCrumb" :to="{path: item.path }" :key="index">{{item.title}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div> -->
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        Search_Nav:'',//search导航菜单
        isNavShow:true,//导航是否显示
        p_name:'用户名', //获取用户名称
        navHeight:0,//导航高度
        navWidth:250,//导航宽度
        isFocus:false,//菜单搜索标志符
        WinHeight:0,//浏览器窗口高度
        contentWidth:1920,//内容区宽度
        contentLeft:250,//内容去距离左侧位置距离、
        dataMenuList:[],//最左侧菜单导航列表数据
        breadCrumb:[],//面包屑导航
        is_contentNav_show:false
    }
  },
  watch: {
    '$route'(newRoute){
      // 路由改变后检测路由链生成面包屑导航
      // const {name,query,matched,meta} = newRoute
      let Array = newRoute.matched;
      let breadList=[];
      Array.forEach((item)=>{
        let obj = {};
        obj.title = item.meta.title;
        obj.path = item.path;
        breadList.push(obj);
      });
      this.breadCrumb = breadList;
      //vuex异步设置值
      //this.$storage.dispatch('setBreadCrumb',this.breadCrumb);
      //vuex同步设置值
      this.$storage.commit('setBreadCrumb',this.breadCrumb);
      // 获取vuex信息
      //console.log("vuex:"+this.$storage.state.breadCrumb);
    }
  },
  computed:{
    //获取用户信息
  },
  methods:{
    // menu导航菜单开关
    NavToggle(){
      this.isNavShow = !(this.isNavShow);
      this.navWidth =  (this.isNavShow) ? 240 : 50;
      //window的宽度
      this.contentWidth = (this.isNavShow) ? (window.innerWidth-240) : (window.innerWidth-50);
      this.contentLeft = (this.isNavShow) ? 240 : 50;
    },
    //菜单收索功能待开发
    mainSearch(){
      console.log("Asdfafdds");
    },
    //导航菜单点击功能dom以及当前数据列
    nav_click($event,data_nav){
      let exisChildren = ('children' in data_nav);
      let temUrl = window.location.href.split("#")[1];
      if(!(exisChildren)&&(temUrl!=data_nav.path)){
        //路由重定向以及保证最后一级菜单
        this.$router.push(data_nav.path);
        //在vuex中设置breadcrumb内容
        //this.$storage
        $(".rh-subnav-item").attr("class","rh-subnav-item");
        $(".rh-Ssubnav-item").attr("class","rh-Ssubnav-item");
        $($event.target).addClass("active");
      }
      console.log($event.target);
      data_nav.isShow = !data_nav.isShow;
    },

    // 箭头显示判断，导航菜单对象里面是否含有子元素集合
    isArrowShow(NavDate){
      var prop = "children";
      if(prop in NavDate){
        return true;
      }else{
        return false;
      }
    },
    //注销掉清除tocken
    clearTocken(){
      localStorage.removeItem("userName");
      this.$router.push({path:'/login'});
      this.$message({
        message:'恭喜你，注销成功消息'+localStorage.getItem("token"),
        type:'success'
      })
    },
  },
  created(){
    //导航数据初始化
    this.navHeight = window.innerHeight-50;
    this.WinHeight = window.innerHeight;
     let obj = {};
     obj.height = window.innerHeight;
    if(this.isNavShow){//判断是否展开导航菜单
      this.contentWidth = window.innerWidth-240; 
      obj.width =  this.contentWidth;    
    } else {
      this.contentWidth = window.innerWidth-50;   
     obj.width =  this.contentWidth; 
    }
    this.$storage.commit('setFrameProp',obj); 
    //添加屏幕自适应监听
    window.onresize = ()=>{
      let props = {};
      this.WinHeight = window.innerHeight;
      if(this.isNavShow){
        this.contentWidth = window.innerWidth-240;
        props.width = this.contentWidth;
      } else {
         this.contentWidth = window.innerWidth-50;   
          props.width = this.contentWidth;
      }
      this.navHeight = window.innerHeight-50;
       props.height = window.innerHeight;
      this.$storage.commit('setFrameProp',props);   
      //console.log(props);
    };
  },
  mounted(){
      // 获取vuex中的用户信息
      this.p_name = this.$storage.state.userName;
      console.log("this_main");
      console.log(this);
      // 获取导航信息
      this.dataMenuList = this.$storage.getters.menuList;
      console.log("导航列表menuList");
      console.log(this.dataMenuList);
      // 获取导航信息初始化面包屑导航
      console.log("this.$route=初始化面包屑导航main.vue 235行")
      let Array = this.$route.matched;
      let breadList=[];
      Array.forEach((item)=>{
        let obj = {};
        obj.title = item.meta.title;
        obj.path = item.path;
        breadList.push(obj);
      })
      this.breadCrumb = breadList;
      //保持面包屑导航
      //this.$storage.commit('setBreadCrumb',this.breadCrumb);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
