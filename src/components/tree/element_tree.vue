<style lang="less" scoped>
      .ti-leftmenu-head {
            position: relative;
            padding: 20px 36px 20px 20px;
            font-size: 14px;
            text-align: left;
            line-height: 20px;
            color: #252b3a;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
            width: 100%;
            margin-bottom: 10px;
      }
      .ti-leftmenu-head:after {
            position: absolute;
            bottom: 0;
            left: 20px;
            content: "";
            border: solid #dfe1e6;
            border-width: 0 0 1px;
            width: calc(100% - 56px);
      }
</style>
<template>
  <div style="height:100%">
      <div class="ti-leftmenu-head">
            云服务器控制台
      </div>
      <el-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
      </el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: '弹性云服务' + this.count++
            }, {
              name: '共享IP' + this.count++
            }];
          } else {
            data = [];
          }
          resolve(data);
        }, 500);
      }
    }
  };
</script>

<style>

</style>