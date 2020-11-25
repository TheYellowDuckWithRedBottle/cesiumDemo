<template>
  <div class="layerPanel">
      <div class="graphDraw">
        <div class="title">
         <span>图形标绘</span>
        </div>
         <div class="drawItem">
            <button class="point">点</button>
            <button class="polyline">线</button>
            <button class="polygon">面</button>
            
          </div>
          <div class="clearItem">
              <el-button>清除标绘结果</el-button>
          </div>
      </div>

      <div class="infoDraw">
        <div class="title">
         <span>信息标绘</span>
        </div>
         <div class="drawItem">
           <button>标绘信息</button>
          </div>
          <div class="clearItem">

          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'panel',

}
</script>

<style scoped>
.graphDraw{
  height: 60%;
}
.layerPanel{
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin:5px;
}
.drawItem{
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.span{
  font-size: 5px;
}
.clearItem{
  display:flex;
   justify-content: space-around;
  
}
.point{
  font-size: 1px;
}
button{
  width:50px;
  height: 20px;
  
}
.infoDraw{
  height: 40%;
}
</style>