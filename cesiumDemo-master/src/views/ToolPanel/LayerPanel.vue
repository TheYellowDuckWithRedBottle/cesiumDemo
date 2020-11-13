<template>
  <div class="layerPnael">
      <div class="title"><span>图层</span></div>
      <!-- <el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox
  @check-change="handleCheckChange">
</el-tree> -->
  </div>
</template>

<script>
export default {
    name:'panel',
    data(){
    return {
        props:{

        },
        loadNode:{

        }
    }
  },
  methods:{
    handleCheckChange(){
      console.log("iii")
    }
  }
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
</style>