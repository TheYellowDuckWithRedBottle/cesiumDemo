<template>
  <div class="SideBar">
      <div class="sideBarContainer" >
            <tabControl :titles="iconStyle"/>  
      </div>

      <div class="contentPanel">
                 
      </div>
  </div>
</template>

<script>
import tabControl from '@/components/tabControl/tabControl'
export default {
    data(){
        return {
           iconStyle:[
                "图层",
                "标绘",
                "分析",
                "工具"
           ]  
        }
    },
   components:{
      tabControl
   },
    methods:{
        
    }

}
</script>

<style>
.contentPanel{
    border-left:solid grey 0.5px;
    position: relative;
    left: 50px;
    background-color: #fff;
    width:200px;
  
}
.SideBar{
    position: relative;
    top:150px;
    left:50px;
    height: 200px;
    width: 250px;
    z-index: 3;
    background-color: white;
}
.sideBarContainer{
    height: 100%;
    border-radius: 10px 0 0 10px;
    width: 50px;
    display: flex;
    flex-direction: column;
   
}
</style>