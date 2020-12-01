<template>
  <div class="drawPanel">
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
            
              <button>清除标绘结果</button>
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

.drawPanel{
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin:5px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.drawItem{
  display:flex;
  justify-content: space-around;
  align-items: center;
}

.clearItem{
  display:flex;
   justify-content: space-around;
  
}
.point{
  font-size: 10px;
}
button{
  width:50px;
  height: 18px;
  
}
.graphDraw{
 
}
.infoDraw{
  
}
</style>