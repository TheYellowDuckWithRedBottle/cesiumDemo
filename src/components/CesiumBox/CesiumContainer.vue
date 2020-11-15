<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZDdmNzAwOC04ZGUxLTQyMjMtYWYxYi0zNWM0MTIzZTIyNWYiLCJpZCI6MTI1NTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjEzNTYxNTh9.vG6rFNYRYvOuRK2OFfn2n4h7hTVzfDaNyDdJSEQZ4hY";

    var viewer = new Cesium.CesiumWidget("cesiumContainer", {
      terrainProvider: terrainProvider,
    });

    console.log(viewer);
    viewer.imageryLayers.addImageryProvider(
      new Cesium.UrlTemplateImageryProvider({
        url: "http://localhost:5051/img/{z}/{x}/{y}.png", //服务地址
      })
    );
     var terrainProvider = new Cesium.CesiumTerrainProvider({
      url: "http://localhost:5051/DEM",
    });
    window.CesiumViewer=viewer;
  },
};
</script> 
<style scoped>
.map-box {
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
