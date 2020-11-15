<template>
  <div id="nav">
 
    <router-view/>
  </div>

</template>

<style lang="scss">
.cesium-widget-credits {
display: none!important;
visibility: hidden!important;
}
canvas{
  width:100%;
  height: 100%;
}
[class^="el-icon-fa"], [class*=" el-icon-fa"] {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome!important;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }
 @import '../node_modules/font-awesome/css/font-awesome.css';
 $fa-css-prefix: el-icon-fa;
</style>
