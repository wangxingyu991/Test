const menuList = [
      {
            icon: "el-icon-user",
            id: 1,
            isShow: true,
            label: '票据开具',
            children:[
                  {
                        icon: "el-icon-user",
                        id: 1.1,
                        layer: "layer-1-1",
                        isShow:true,
                        label: "开票单位管理",
                        path: "/main",
                        children:[
                              {
                                    icon: "el-icon-user",
                                    id: 1.1,
                                    layer: "layer-1-1",
                                    isShow: true,
                                    label: "单位基本情况",
                                    path: "/main/dwjbxx",
                              }
                        ]
                  }
            ]

      }
]
export default menuList
