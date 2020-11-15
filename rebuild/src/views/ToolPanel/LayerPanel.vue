<template>
  <div class="layerPnael">
      <div class="title"><span>图层</span></div>
      <div class="tree">
       <el-tree
  :data="config[0].treeList"
  show-checkbox
  node-key="id"
  ref="tree"
  highlight-current
  @check-change="nodeChange"
  :props="defaultProps">
</el-tree>
      </div>
  </div>
</template>

<script>
import {addData} from '@/common/addData'
import config from './tree'
export default {
    name:'panel',
    data(){
    return {
      config,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        props:{

        },
        loadNode:{

        }
    }
  },
  mounted(){
    console.log(config[0])
  },
  methods: {
    nodeChange(node,isSelect){
      console.log(node)
      if(isSelect){
        switch (node.tree) {
          case value:
            
            break;
        
          default:
            break;
        }
      }
      
      console.log(obj)
    },
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

}
</script>

<style>
.layerPnael{
  margin:5px;
}
.title{
font-size: 10px;
font-family: 'Courier New', Courier, monospace;
}
.el-tree{
  font-size: 2px!important;

}
.el-tree-node__label {
    font-size: 14px;
}
</style>