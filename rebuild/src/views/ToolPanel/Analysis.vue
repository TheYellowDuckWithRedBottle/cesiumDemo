<template>
  <div class="Analysis">
     
  </div>
</template>

<script>
export default {
    name:'Analysis',
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
    mounted(){
      
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
      
      
    }
}
</script>

<style scoped>
.layerPanel{

}
</style>