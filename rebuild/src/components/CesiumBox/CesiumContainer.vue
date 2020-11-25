<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script> 
export default {
  name: "", 
  mounted() {
    
     Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZDdmNzAwOC04ZGUxLTQyMjMtYWYxYi0zNWM0MTIzZTIyNWYiLCJpZCI6MTI1NTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjEzNTYxNTh9.vG6rFNYRYvOuRK2OFfn2n4h7hTVzfDaNyDdJSEQZ4hY";
     let imageryProvider=  new Cesium.UrlTemplateImageryProvider({
                url: 'http://localhost:5052/DATA/Img/{z}/{x}/{y}.png', //服务地址
            });
        var terrainProvider = new Cesium.CesiumTerrainProvider({
        url: "http://localhost:5052/DATA/DEM",
        requestWaterMask: true //请求水波纹效果
      })
       
       const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainExaggeration:0.95,
        imageryProvider: imageryProvider,
        terrainProvider: terrainProvider,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        timeline: false,
        animation: false,
        selectionIndicator: false,
        infoBox: false
      })

     
      viewer.camera.setView({
        destination:Cesium.Cartesian3.fromDegrees(99,36.4,18000008),
        orientataion:{}
      })//设置启动时视口在中国
      window.cesiumViewer=viewer//将viewer挂载在window上      
  }
};
</script> 
<style scoped>
  .map-box{
    width: 100%;
    height: 100%;
  }
  #cesiumContainer {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
