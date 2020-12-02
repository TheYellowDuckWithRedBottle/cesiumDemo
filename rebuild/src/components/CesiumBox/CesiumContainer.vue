<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script> 
export default {
  name: "", 
  data(){
    return{
      params :{
            tx: 120.257, //模型中心X轴坐标（经度，单位：十进制度）
            ty: 31.226, //模型中心Y轴坐标（纬度，单位：十进制度）
            tz: 2800, //模型中心Z轴坐标（高程，单位：米）
            rx: 0, //X轴（经度）方向旋转角度（单位：度）
            ry: 0, //Y轴（纬度）方向旋转角度（单位：度）
            rz: -1 //Z轴（高程）方向旋转角度（单位：度）
        }
    }
  },
  methods: {
     add3DTilesetDataTrans(viewer,url) {
            //viewer1.scene.globe.depthTestAgainstTerrain = true;//地形遮挡
            //viewer1.scene.globe.depthTestAgainstTerrain = false;//去掉地形遮挡
           let tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
                url: url,
                //maximumScreenSpaceError: 20,        //最大的屏幕空间误差
                //maximumNumberOfLoadedTiles: 10,  //最大加载瓦片个数
            }));
            tileset.readyPromise.then(function () {
                viewer.zoomTo(tileset);
            }).then(function () {
                if (tileset._root.transform == undefined) {
                    console.log("瓦片未变换");
                }
                tileset._root.transform = update3dtilesMaxtrix(params);
                viewer.zoomTo(tileset);
            });
        },

         remove3DTilesetData(dataConfig) {
            var url = dataConfig;
            var primitives = viewer.scene.primitives;
            for (var i = 0; i < primitives.length; i++) {
                if (primitives._primitives[i]._url == url) {
                    viewer.scene.primitives.remove(primitives._primitives[i]);
                }
            }
         
        },

         add3DTilesetData(dataConfig) {
            //viewer1.scene.globe.depthTestAgainstTerrain = true;//地形遮挡
            //viewer1.scene.globe.depthTestAgainstTerrain = false;//去掉地形遮挡
            var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
                url: dataConfig,
                //maximumScreenSpaceError: 20,        //最大的屏幕空间误差
                //maximumNumberOfLoadedTiles: 10,  //最大加载瓦片个数
            }));
            tileset.readyPromise.then(function () {

            });
        },
        
       update3dtilesMaxtrix(params) {
            //旋转

            let mx = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(params.rx));
            let my = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(params.ry));
            let mz = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(params.rz));
            let rotationX = Cesium.Matrix4.fromRotationTranslation(mx);
            let rotationY = Cesium.Matrix4.fromRotationTranslation(my);
            let rotationZ = Cesium.Matrix4.fromRotationTranslation(mz);
            //平移
            let position = Cesium.Cartesian3.fromDegrees(params.tx, params.ty, params.tz);
            let m = Cesium.Transforms.eastNorthUpToFixedFrame(position);

            let scale = Cesium.Matrix4.fromUniformScale(0.85);
            // //缩放
            Cesium.Matrix4.multiply(m, scale, m);
            //旋转、平移矩阵相乘
            Cesium.Matrix4.multiply(m, rotationX, m);
            Cesium.Matrix4.multiply(m, rotationY, m);
            Cesium.Matrix4.multiply(m, rotationZ, m);
            //赋值给tileset
            return m;
        }
  },
  mounted() {
    
     Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZDdmNzAwOC04ZGUxLTQyMjMtYWYxYi0zNWM0MTIzZTIyNWYiLCJpZCI6MTI1NTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjEzNTYxNTh9.vG6rFNYRYvOuRK2OFfn2n4h7hTVzfDaNyDdJSEQZ4hY";
     let imageryProvider=  new Cesium.UrlTemplateImageryProvider({
                url: 'http://localhost:5052/DATA/Img/{z}/{x}/{y}.png', //服务地址
               //url: 'http://localhost:5052/Img/{z}/{x}/{y}.png', //服务地址
              //  url: 'http://localhost:5050/Tile/{x}/{y}/{z}', //服务地址
            });
        var terrainProvider = new Cesium.CesiumTerrainProvider({
        url: "http://localhost:5053/DATA/DEM",
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
      //this.add3DTilesetDataTrans(viewer,"http://localhost:5053/DATA/jjsw/tileset.json")
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
