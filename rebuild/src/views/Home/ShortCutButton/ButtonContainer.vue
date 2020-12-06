<template>
    <div>
    <div class="shortContainer">
        <div class="ShortTool">
            <div @mouseover="isImageLayerShow=true"><i class="fa fa-bars"></i></div>
            <div><i class="fa fa-table"></i></div>
            <div><i class="fa fa-area-chart"></i></div>
            <div><i class="fa fa-window-restore"></i></div>
        </div>
        <div class="viewPortTool">
        <div class="home" @click="backHome"><i class="fa fa-home"></i></div>
        <div class="northArrow" @click="arrowNorth"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></div>
        <div class="scaleMore" @click="scalExpand"><i class="fa fa-expand"></i></div>
        <div class="scaleLess" @click="scalCompress"><i class="fa fa-compress"></i></div>
        <div class="scaleAll" @click="fulllScene"><i class="fa fa-arrows-alt" aria-hidden="true"></i></div>
        </div>
        </div>
    <ImagerLayer v-show="isImageLayerShow" @leaveMouse="leaveImage"/>
    </div>
</template>
<script>
import ImagerLayer from '@/views/Home/ShortCutButton/ImageLayer'
import ImageLayer from './ImageLayer.vue'
export default {
    name:'ButtonContainer',
    data() {
        return {
            isImageLayerShow:false
        }
    },
    components:{
        ImagerLayer

    },
    methods: {
        leaveImage(){
            console.log("good")
            this.isImageLayerShow=false
        },
        getCarmeraHeigth(){
            let viewer=window.cesiumViewer
            let cameraPosition=viewer.camera.position
            let cartographic=viewer.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition)
            let height=cartographic.height
            let longtitude=Cesium.Math.toDegrees(cartographic.longitude)
            let latitude=Cesium.Math.toDegrees(cartographic.latitude)
            return {longtitude,latitude,height}
        },
        backHome(){
            window.cesiumViewer.camera.flyTo({
                destination:Cesium.Cartesian3.fromDegrees(119,36,2000),
              //   Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result)
                orientation:{
                    
                }
            })
        },
        arrowNorth(){},
        scalExpand(){
            let position=this.getCarmeraHeigth();
            window.cesiumViewer.camera.flyTo({
                destination:Cesium.Cartesian3.fromDegrees(position.longtitude,position.latitude,position.height/2),
                duration:0.5
            })
        },
        scalCompress(){
            let position=this.getCarmeraHeigth();
            window.cesiumViewer.camera.flyTo({
                destination:Cesium.Cartesian3.fromDegrees(position.longtitude,position.latitude,position.height*2),
                duration:0.5
            })
        },
        fulllScene(){


        }
    },
}
</script>
<style scoped>
i{
    margin-bottom:5px;
    background-color: #fff;
    border-radius: 50px;
    padding:5px;
    cursor: pointer;
}
.shortContainer{
    margin: 5px;
    position: absolute;;
    width:30px;
    right:0px;
    
    display: flex;
    flex-direction: column;
    z-index: 3;
}
.ShortTool{
margin-bottom: 30px;
}
</style>