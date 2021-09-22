import Main from '@/components/main/main.vue'
import Login from '@/view/login/login.vue'
import ParentView from '@/components/parent-view/parent-view.vue'
const routes = [
      {
            path: '/',
            name: '_Main',
            redirect:'/main',
            component: Main,
            meta: {
                  hideInMenu:true,
                  notCache:true,
                  needLogin: true//需要加校验判断的路由
            }
      }, 
      {
            path: '/login',
            name: 'Login',
            meta:{
                  title:'Login-登录',
                  hideInMenu:true,
                  icon:'el-icon-user'
            },
            component: Login
      }, 
      {
            path: '/main',
            name: 'Main',
            component: Main,
            meta: {
                  needLogin: true, 
                  title:'开票单位管理',
                  icon:'el-icon-setting',
                  hideInMenu: false,
            },
            children: [
                  {
                        path: 'dwjbxx',
                        name: 'Dwjbxx',//单位基本信息
                        component: () => import('../components/kpdwgl/dwjbxx.vue'),
                        meta: {
                              needLogin: true,//
                              icon: 'el-icon-news',
                              title:'单位基本情况',
                              hideInMenu: false,
                        }
                  },
                  {
                        path: 'dwzsxx',
                        name: 'Dwzsxx',//单位证书信息
                        component: () => import('../components/kpdwgl/dwzsxx.vue'),
                        meta: {
                              needLogin: true,//
                              icon: 'el-icon-news',
                              title: '单位证书信息',
                              hideInMenu: false,
                        }
                  },
                  {
                        path: 'dwpzxx',
                        name: 'Dwpzxx',//单位票种信息
                        component: () => import('../components/kpdwgl/dwpzxx.vue'),
                        meta: {
                              needLogin: true,//
                              icon: 'el-icon-news',
                              title: '单位票种信息',
                              hideInMenu: false,
                        }
                  },
                  {
                        path: 'dwqzxx',
                        name: 'Dwqzxx',//单位签章信息
                        component: () => import('../components/kpdwgl/dwqzxx.vue'),
                        meta: {
                              needLogin: true,//
                              icon:'el-icon-news',
                              title:'单位签章信息',
                              hideInMenu: false,
                        }
                  },
            ]
      }, 
      {
            path: '/components',
            name: 'components',
            meta: {
                  icon: 'el-icon-set-up',
                  title: '组件',
                  hideInMenu: false,
            },
            component: Main,
            children: [{
                  path: 'button',
                  name: 'Button',
                  component: () => import("@/components/modules/button.vue"),
                  meta:{
                        title:'button按钮',
                        icon:'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, 
            {
                  path: 'radio',
                  name: 'Radio',
                  component: () => import("@/components/modules/radio.vue"),
                  meta: {
                        title: 'Radio按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, {
                  path: 'input',
                  name: 'Input',
                  component: ParentView,
                  meta: {
                        title: 'Input按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  },
                  children:[
                        {
                              path:'input_1',
                              name:'input_1',
                              component: () => import("@/components/modules/input.vue"),
                              meta:{
                                    title:'input_1按钮',
                                    icon:'el-icon-arrow-left',
                                    hideInMenu:false,
                              }
                        },
                        {
                              path: 'input_2',
                              name: 'input_2',
                              component: () => import("@/components/modules/input2.vue"),
                              meta: {
                                    title: 'input_2按钮',
                                    icon: 'el-icon-arrow-left',
                                    hideInMenu: false,
                              }
                        }
                  ]
            }, {
                  path: 'number',
                  name: 'Number',
                  component: () => import("@/components/modules/number.vue"),
                  meta: {
                        title: 'number按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, {
                  path: 'select',
                  name: 'select',
                  component: () => import("@/components/modules/select.vue"),
                  meta: {
                        title: 'select按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, {
                  path: 'switch',
                  name: 'switch',
                  component: () => import("@/components/modules/switch.vue"),
                  meta: {
                        title: 'switch按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, {
                  path: 'date_pick',
                  name: 'DatePic',
                  component: () => import("@/components/modules/date_pick.vue"),
                  meta: {
                        title: 'date_pick按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, {
                  path: 'upload',
                  name: 'Upload',
                  component: () => import("@/components/modules/upload.vue"),
                  meta: {
                        title: 'upload按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, {
                  path: 'transfer',
                  name: 'Transfer',
                  component: () => import("@/components/modules/transfer.vue"),
                  meta: {
                        title: 'transfer按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, {
                  path: 'form',
                  name: 'Form',
                  component: () => import("@/components/modules/form.vue"),
                  meta: {
                        title: 'form按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  }
            }, {
                  path: 'table',
                  name: 'table',
                  component: () => import("@/components/modules/table.vue"),
                  meta: {
                              title: '自定义表格',
                              icon: 'el-icon-arrow-right',
                              hideInMenu: false,
                        }
            }, {
                  path: 'table2',
                  name: 'table',
                  meta: {
                        title: 'table2按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  },
                  component: () => import("@/components/modules/tablePrimary.vue")
            }, {
                  path: 'tabPage',
                  name: 'tabPage',
                  component: () => import("@/components/modules/tag.vue"),
                  meta: {
                        title: 'tabPage按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  },
            }, {
                  path: 'diy',
                  name: 'diy',
                  component: () => import("@/components/modules/diy.vue"),
                  meta: {
                        title: 'diy按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  },
            }, {
                  path: 'tree',
                  name: 'treeTemplate',
                  component: () => import("@/components/tree/tree.vue"),
                  meta: {
                        title: 'tree按钮',
                        icon: 'el-icon-arrow-right',
                        hideInMenu: false,
                  },
            }]
      },
      {
            path: '/components2',
            name: 'components2',
            meta: {
                  title: '组件2',
                  hideInMenu: false,
                  icon: 'el-icon-c-scale-to-original'
            },
            component: Main,
            children: [
            {
                  name: 'template_Tree',
                  path: 'template_Tree',
                  meta: {
                        title: 'tree树',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/tree/element-tree.vue"),
            },
            {
                  name: 'template_Input',
                  path: 'template_Input',
                  meta: {
                        title: 'input模板输入框',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/input/input.vue"),
            },
            {
                  name: 'template_selectInput',
                  path: 'template_selectInput',
                  meta: {
                        title: '模板下拉框',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/selectInput/selectInput.vue"),
            },
            {
                  name: 'template_table',
                  path: 'template_table',
                  meta: {
                        title: '模板表格',
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
                  component: () => import("@/components/modules2/message/index.vue"),
            },
            {
                  path: 'template_button',
                  name: 'template_button',
                  meta: {
                        title: 'button按钮',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/button/button.vue"),
            },
            {
                  path: 'template_tree',
                  name: 'template_tree',
                  meta: {
                        title: '二级树菜单',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/tree/index.vue"),
            },
            {
                  path: 'template_form',
                  name: 'template_form',
                  meta: {
                        title: 'form表单',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/form/form.vue"),
            },
            {
                  path: 'template_bread',
                  name: 'template_bread',
                  meta: {
                        title: 'breadcrumb面包屑导航',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/breadcrumb/breadcrumb.vue"),
            },
            {
                  path: 'template_progress',
                  name: 'template_progress',
                  meta: {
                        title: 'progress进度条插件',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/progress/progress.vue"),
            },
            {
                  path: 'template_steps',
                  name: 'template_steps',
                  meta: {
                        title: 'steps步进条插件',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/steps/step.vue"),
            },
            {
                  path:'info',
                  name:'info',
                  meta:{
                        title:'info信息提示框',
                        icon:'el-icon-c-scale-to-original',
                        hideInMenu:false
                  },
                  component: () => import("@/components/modules2/info/index.vue"),
                  children:[{
                        path: 'template_info',
                        name: 'template_info',
                        meta: {
                              title: 'info信息提示框',
                              icon: 'el-icon-c-scale-to-original',
                              hideInMenu: false
                        },
                        component: () => import("@/components/modules2/info/alert.vue"),
                  },{
                        path: 'template_loading',
                        name: 'template_loading',
                        meta: {
                              title: 'loading提示动画',
                              icon: 'el-icon-c-scale-to-original',
                              hideInMenu: false
                        },
                        component: () => import("@/components/modules2/info/loading.vue"),
                  },{
                        path: 'template_notification',
                        name: 'template_notification',
                        meta: {
                              title: 'notification通知',
                              icon: 'el-icon-c-scale-to-original',
                              hideInMenu: false
                        },
                        component: () => import("@/components/modules2/info/notification.vue"),
                  }]
            },
            {
                  path: 'template_card',
                  name: 'template_card',
                  meta: {
                        title: 'card卡片',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/card/card.vue"),
            },
            {
                  path: 'template_pageHead',
                  name: 'template_pageHead',
                  meta: {
                        title: 'pagehead头部',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/page-header/page-header.vue"),
            },
            {
                  path: 'template_searchContainer',
                  name: 'template_searchContainer',
                  meta: {
                        title: 'search头部',
                        icon: 'el-icon-c-scale-to-original',
                        hideInMenu: false
                  },
                  component: () => import("@/components/modules2/search-container/search-bar-container.vue"),
            }
            ]
      },
      {
            path: '/main',
            name: 'Main',
            component: Main,
            meta: {
                  needLogin: true,
                  title: '测试demo页面',
                  icon: 'el-icon-setting',
                  hideInMenu: false,
            },
            children: [
                  {
                        path: 'demo1',
                        name: 'demo1',//demo1页面
                        component: () => import('@/eniv/demo/page_demo1.vue'),
                        meta: {
                              needLogin: true,//
                              icon: 'el-icon-news',
                              title: '测试页面1',
                              hideInMenu: false,
                        }
                  },
                  {
                        path: 'demo1_1',
                        name: 'demo1_1',//demo1页面
                        component: () => import('@/eniv/demo/page_demo1_1.vue'),
                        meta: {
                              needLogin: true,//
                              icon: 'el-icon-news',
                              title: '测试页面1-1',
                              hideInMenu: false,
                        }
                  },
                  {
                        path: 'demo2',
                        name: 'demo2',//demo2页面
                        component: () => import('@/eniv/demo/page_demo2.vue'),
                        meta: {
                              needLogin: true,//
                              icon: 'el-icon-news',
                              title: '测试页面2',
                              hideInMenu: false,
                        }
                  },
                  {
                        path: 'demo3',
                        name: 'demo3',//demo2页面
                        component: () => import('@/eniv/demo/page_demo3.vue'),
                        meta: {
                              needLogin: true,//
                              icon: 'el-icon-news',
                              title: '测试页面3',
                              hideInMenu: false,
                        }
                  },
                  {
                        path: 'demo4',
                        name: 'demo4',//demo2页面
                        component: () => import('@/eniv/demo/page_demo4.vue'),
                        meta: {
                              needLogin: true,//
                              icon: 'el-icon-news',
                              title: '测试页面4',
                              hideInMenu: false,
                        }
                  }
            ]
      }, 
]
export default routes