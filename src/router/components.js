const componentRouters = {
      path: '/components2',
      name: 'components2',
      meta: {
            title: '组件2',
            hideInMenu: false,
            icon: 'el-icon-c-scale-to-original'
      },
      component: ()=>import("@/components/main.vue"),
      children:[{
            path:'template_table',
            name:'template_table',
            meta:{
                  title:'模板表格',
                  icon: 'el-icon-c-scale-to-original',
                  hideInMenu: false
            },
            component: () => import("@/components/modules2/table/table.vue"),
      },{
            path: 'template_dialog',
            name: 'template_dailog',
            meta: {
                  title: '模板弹出层',
                  icon: 'el-icon-c-scale-to-original',
                  hideInMenu: false
            },
            component: () => import("@/components/modules/layer/layer.vue"),
      }]
}
export default componentRouters