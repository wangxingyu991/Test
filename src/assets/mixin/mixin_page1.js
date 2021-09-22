export  const Vuex_Mixin = {
      data(){
            return{
                  frame_height: 0, 
            }
      },
      computed: {
            //vuex参数监听获取页面高度
            frameProps() {
                  return this.$storage.state.frameProp.height
            }
      },
      //vuex参数监听
      watch: {
            frameProps: {
                  immediate: true,
                  handler: function (newval) {
                        this.frame_height = newval;
                  }
            }
      },
      mounted() {
            this.frame_height = this.$storage.state.frameProp.height + 14;
      }
}