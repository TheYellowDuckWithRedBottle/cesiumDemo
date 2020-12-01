<template>
  <div class="Analysis">
      <el-button
         type="warning"
         size="mini"
         style="position:absolute;z-index:10;" @click="drawGeometry('polygon')">绘制面    
      </el-button>
      <el-button
          type="warning"
          size="mini"
          style="position:absolute;z-index:10;margin-left:120px;"                     
          @click="drawGeometry('polyline')" >绘制线
       </el-button>
  </div>
</template>

<script>
export default {
    name:'Analysis',
    data(){
      return{
        viewer:null,
       handler:null,
        positions:[], //leftclick记录的点
         moveposition:[],// mouse move记录的点，总是比leftclick多一个点
         GeometryShape:null,
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
    mounted(){
      this.viewer=window.cesiumViewer
      var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
        handler.setInputAction(function (event) {
            if (!Cesium.Entity.supportsPolylinesOnTerrain(viewer.scene)) {
                console.log('This browser does not support polylines on terrain.');
                return;
            }
            // 使用viewer.scene.pickPosition` 来代替`viewer.camera.pickEllipsoid` 这样当鼠标掠过terrain能得到正确的坐标
            var earthPosition = viewer.scene.pickPosition(event.position);
            if (Cesium.defined(earthPosition)) {
                if (activeShapePoints.length === 0) {
                    floatingPoint = createPoint(earthPosition);
                    activeShapePoints.push(earthPosition);
                    var dynamicPositions = new Cesium.CallbackProperty(function () {
                        return activeShapePoints;
                    }, false);
                    activeShape = drawShape(dynamicPositions);
                }
                activeShapePoints.push(earthPosition);
                createPoint(earthPosition);
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        handler.setInputAction(function (event) {
            if (Cesium.defined(floatingPoint)) {
                var newPosition = viewer.scene.pickPosition(event.endPosition);
                if (Cesium.defined(newPosition)) {
                    floatingPoint.position.setValue(newPosition);
                    activeShapePoints.pop();
                    activeShapePoints.push(newPosition);
                }
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        handler.setInputAction(function (event) {
            terminateShape();
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    },
    methods:{
      createPoint(worldPosition){
        var point = viewer.entities.add({
                position: worldPosition,
                point: {
                    pixelSize: 10,
                    color: Cesium.Color.YELLOW,
                    //disableDepthTestDistance: Number.POSITIVE_INFINITY,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                },
            });
            points = point;
            return point;
      },
      drawGeometry(drawMode){
        let self=this;
        self.handler=new Cesium.ScreenSpaceEventHandler(self.viewer.scene.canvas)
        let activePostion;
        self.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
        self.handler.setInputAction((e)=>{
          self.moveposition.pop()
          self.drawShape(self.moveposition,{
            drawMode:drawMode,
            color:Cesium.Color.RED,
            width:3
          })
          self.viewer.entities.remove(self.GeometryShape)
          self.GeometryShape=undefined
          self.moveposition=[]
          self.positions=[]
          self.handler.destroy()
        },Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
        self.handler.setInputAction((e)=>{
          let positions=self.viewer.scene.pickPosition(e.position)
          if(self.positions.length==0){
            activePostion=new Cesium.CallbackProperty(()=>{
              if(drawMode=="polygon"){
                return new Cesium.PolygonHierarchy(self.moveposition)
              }
              return self.moveposition
            },false)
            self.GeometryShape=this.drawShape(activePostion,{
              drawMode:drawMode,
              color:Cesium.Color.RED,
              width:3,
            })
          }
          self.positions.push(positions);
          self.moveposition.push(positions);
          self.viewer.entities.add({
            positions:positions,
            point:{
              pixelSize:5,
              color:Cesium.Color.BLUE,
              outlineColor:Cesium.Color.WHITE,
              outlineWidth:1
            },
          })
        },Cesium.ScreenSpaceEventType.LEFT_CLICK);
        self.handler.setInputAction(function(e){
          var mousemovecartesian= self.viewer.scene.pickPosition(e.endPosition);
                    // let mousemovecartesian= self.viewer.camera.pickEllipsoid(e.endPosition, self.viewer.scene.globe.ellipsoid);
                    //两个if条件控制，保证当moveposition的长度与positions的长度一致时，moveposition push 鼠标移动的点
                    if(self.moveposition.length===self.positions.length+1){
                        //当moveposition的长度比positions大1时，一直更新最新的动点
                        self.moveposition[self.moveposition.length-1]=mousemovecartesian;
                        // console.log("this.moveposition",self.moveposition);
                    }
                    else if(self.moveposition.length===self.positions.length){
                        //长度一样添加鼠标动点坐标
                        self.moveposition.push(mousemovecartesian);
                        // console.log("this.moveposition",self.moveposition.length);
                        // console.log("this.positions",self.positions.length);
                    }

        },Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      },
      terminateShape() {
            activeShapePoints.pop();
             entityPolygon = drawShape(activeShapePoints);
            if (entityPolygon.polygon!=null) {

                thisWidget.drawOk(entityPolygon);
            }            
            viewer.entities.remove(floatingPoint);
            viewer.entities.remove(activeShape); 
            entityPolygon = null;
            floatingPoint = undefined;
            activeShape = undefined;
            activeShapePoints = [];
        },
       drawShape(positions, config) {
            var config = config ? config : {};             
            var shape
            if(config.drawMode=="polygon"){                         
                shape = this.viewer.entities.add({                
                    polygon: {                                          
                        hierarchy: positions,//new Cesium.PolygonHierarchy(positions),                     
                        material: config.color ? config.color: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7)),
                        width:  config.width ? config.width : 2,                               
                    }             
                });
            }else if(config.drawMode=="polyline"){
                 shape = this.viewer.entities.add({           
                    polyline: {
                        clampToGround : true,                     
                        positions: positions,                     
                        material: config.color ? config.color : new Cesium.Color.fromCssColorString("#FFD700").withAlpha(.2),                     
                        width:  config.width ? config.width: 3,                 
                    }             
                });          
            }             
            return shape;  
        }
    }
}
</script>

<style scoped>
.layerPanel{

}
</style>