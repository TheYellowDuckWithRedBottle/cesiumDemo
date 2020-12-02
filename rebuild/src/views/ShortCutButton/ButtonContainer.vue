<template>
    <div class="shortContainer">
        <div class="home" @click="backHome"><i class="fa fa-home"></i></div>
        <div class="northArrow" @click="arrowNorth"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></div>
        <div class="scaleMore" @click="scalExpand"><i class="fa fa-expand"></i></div>
        <div class="scaleLess" @click="scalCompress"><i class="fa fa-compress"></i></div>
        <div class="scaleAll" @click="fulllScene"><i class="fa fa-arrows-alt" aria-hidden="true"></i></div>
    </div>
</template>
<script>
export default {
    name:'ButtonContainer',
    methods: {
        getCarmeraHeigth(){
            let viewer=window.cesiumViewer
            let cameraPosition=viewer.camera.position
            let cartographic=viewer.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition)
            let height=cartographic.height
            let cameraLon=cartographic.longitude
            let cameraLat=cartographic.latitude
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
                destination:Cesium.Cartesian3.fromDegrees(position.longtitude,position.latitude,height/2)
            })
        },
        scalCompress(){
            let position=this.getCarmeraHeigth();
            window.cesiumViewer.camera.flyTo({
                destination:Cartesian3.fromDegrees(position.longtitude,position.latitude,height*2)
            })
        },
        fulllScene(){}
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
</style>