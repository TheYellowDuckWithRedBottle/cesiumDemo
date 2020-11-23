<template>
  <div class="SideBar">
<!-- 菜单栏的盒子 -->
    <div class="SideBarContainer" ref="SideBar">
        <!-- 左侧的图标栏 -->
      <div class="iconContainer">
         <tabControl @tabClick="switchPanel"/>
      </div>
      
        <!-- 右侧的内容栏 -->
      <div class="contentContainer">
        <LayerPanel v-if="activePanel==0"/>
        <DrawPanel v-else-if="activePanel==1"/>
        <Analysis  v-else-if="activePanel==2"/>
        <Setting v-else/>
      </div>

    </div>

  </div>
</template>

<script>
import Analysis from '@/views/ToolPanel/Analysis'
import DrawPanel from '@/views/ToolPanel/DrawPanel'
import LayerPanel from '@/views/ToolPanel/LayerPanel'
import Setting from '@/views/ToolPanel/Setting'
import tabControl from '@/components/tabControl/tabControl'
export default {
  data() {
    return {
      activePanel:0,
    };
  },
  components:{
      tabControl,
      Analysis,
      DrawPanel,
      LayerPanel,
      Setting
  },
  methods: {
  switchPanel(data){
    console.log(data)
    this.activePanel=data;
  }
  },
  directives: {
    drag(el, bindings) {
      el.onmousedown = function(e) {
        console.log(e)
        var disx = e.pageX - el.offsetLeft;
        var disy = e.pageY - el.offsetTop;
        document.onmousemove = function(e) {
          console.log(e)
          el.style.left = e.pageX - disx + "px";
          el.style.cursor = "move";
          el.style.top = e.pageY - disx + "px";
        
        };
        document.onmouseup = function() {
          el.style.cursor = "default";
          document.onmousemove = document.onmouseup = null;
        };
      };
    }
  }
};
</script>


<style>
.SideBarContainer {
  position: relative;
  z-index: 999;
  width:200px;
  display: flex;
  justify-content: space-around;
  height: 200px;

  top: 150px;
  left: 30px;
 
  box-shadow: 0 3 0px gray;
}
.contentContainer {
  float: right;
  width: 100%;
  background-color: #fff;
}
.iconContainer {
    width: 30px;
    margin-left: 3px;
    height: 150px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
   border-radius: 10px 0 0 10px;
  justify-content: space-around;
}
</style>