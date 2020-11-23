<template>
  <div class="layerPanel">
      <div class="graphDraw">
        <div class="title">
         <span>图形标绘</span>
        </div>
         <div class="drawItem">
            <button class="point">标记点</button>
            <button class="polyline">标记线</button>
            <button class="polygon">标记面</button>
            
          </div>
          <div class="clearItem">
            
              <small>清除标绘结果</small>
          </div>
      </div>
      <div class="infoDraw">
        <div class="title">
         <span>信息标绘</span>
        </div>
         <div class="drawItem">

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