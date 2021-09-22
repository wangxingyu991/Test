import Main from '@/components/main/main.vue'
import Login from '@/view/login/login.vue'

const routes = [{
      path:'*',
      component: () => import('@/view/login/login.vue'),
},
{
      path: '/components',
      name: 'components',
      component: Main,
      children: [
            {
                  path: 'button',
                  component: () => import("@/components/modules/button.vue"),
            }, 
            {
                  path: 'radio',
                  component: () => import("@/components/modules/radio.vue"),
            }, 
            {
                  path: 'input',
                  component: () => import("@/components/modules/input.vue"),
                  children: [{
                        path: 'input_1',
                        component: () => import("@/components/modules/input.vue"),
                  }]
            }, 
            {
                  path: 'number',
                  component: () => import("@/components/modules/number.vue"),
            }, 
            {
                  path: 'select',
                  component: () => import("@/components/modules/select.vue"),
            }, 
            {
                  path: 'switch',
                  component: () => import("@/components/modules/switch.vue"),
            }, 
            {
                  path: 'date_pick',
                  component: () => import("@/components/modules/date_pick.vue"),
            }, 
            {
                  path: 'upload',
                  component: () => import("@/components/modules/upload.vue"),
            }, 
            {
                  path: 'transfer',
                  component: () => import("@/components/modules/transfer.vue"),
            }, 
            {
                  path: 'form',
                  component: () => import("@/components/modules/form.vue"),
            }, 
            {
                  path: 'table',
                  component: () => import("@/components/modules/table.vue"),
            }, 
            {
                  path: 'table2',
                  component: () => import("@/components/modules/tablePrimary.vue")
            }, 
            {
                  path: 'tabPage',
                  component: () => import("@/components/modules/tag.vue"),
            },
            {
                  path: 'diy',
                  component: () => import("@/components/modules/diy.vue"),
            }, 
            {
                  path: 'tree',
                  component: () => import("@/components/tree/tree.vue"),
            }
      ]
},
{
      path: '/components2',
      component:Main,
      children:[
            {
                  path:'template_table',
                  component: () => import("@/components/modules2/table/table.vue"),
            },
            {
                  path: 'template_dialog',
                  component: () => import("@/components/modules2/message/index.vue"),
            },
            {
                  path: 'template_button',
                  component: () => import("@/components/modules2/button/button.vue"),
            },
            {
                  path: 'template_tree',
                  component: () => import("@/components/modules2/tree/index.vue"),
            },
            {
                  path: 'template_form',
                  component: () => import("@/components/modules2/form/form.vue"),
            },
            {
                  path: 'template_bread',
                  component: () => import("@/components/modules2/breadcrumb/breadcrumb.vue"),
            },
            {
                  path: 'template_progress',
                  component: () => import("@/components/modules2/progress/progress.vue"),
            },
            {
                  path: 'template_steps',
                  component: () => import("@/components/modules2/steps/step.vue"),
            },
            {
                  path: 'info',
                  component: () => import("@/components/modules2/info/index.vue"),
                  children: [
                        {
                              path: 'template_info',
                              component: () => import("@/components/modules2/info/alert.vue"),
                        }, {
                              path: 'template_loading',
                              component: () => import("@/components/modules2/info/loading.vue"),
                        }, {
                              path: 'template_notification',
                              component: () => import("@/components/modules2/info/notification.vue"),
                        }
                  ]
            },
            {
                  path: 'template_card',
                  component: () => import("@/components/modules2/card/card.vue"),
            },
            {
                  path: 'template_pageHead',
                  component: () => import("@/components/modules2/page-header/page-header.vue"),
            },
            {
                  path: 'template_searchContainer',
                  component: () => import("@/components/modules2/search-container/search-bar-container.vue"),
            }  
      ]
}]

export default routes