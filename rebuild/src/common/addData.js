// import {Cesium3DTileset} from 'cesium/Source/Cesium'

export function add3DTilesetData(viewer,url){
    let isAdded = get3DTilesData(viewer,url)
    if(isAdded!=undefined){
        console.log("当前数据已加载")
    }
    else {
        console.log("还未加载数据")
    var tileset =new Cesium.Cesium3DTileset({
        url:url
    });
    viewer.scene.primitives.add(tileset)
    viewer.zoomTo(tileset)
    tileset.loadProgress.addEventListener(function(numberOfPendingRequests, numberOfTilesProcessing) {
        if ((numberOfPendingRequests === 0) && (numberOfTilesProcessing === 0)) {
            console.log('Stopped loading');
            return;
        }
          });
    tileset.readyPromise.then(function(tileset) {
        // tile.properties is not defined until readyPromise resolves.
        var properties = tileset.properties;
        if (Cesium.defined(properties)) {
            for (var name in properties) {
                console.log(properties[name]);
            }
        }if (url == XINYI_CLASSIF_MODEL_DOWN_URL) {
            tileset.style = XINYI_CLASSIF_MODEL_STYLE
        }
    });
           
}
}
export function add3DTilesetDataForOsgb(viewer,url){
    let tileset=viewer.scene.primitives.add(
        new Cesium3DTile({
            url:url,
        })
    )
    tileset.readyPromise.then(()=>{
        viewer.zoomTo(tileset,new HeadingPitchRange(0.0,-0.5,tileset.boundingSphere.radius/1.0))
    })
}


export function addGeojsonData(viewer,url){
    let color=new Cesium.Color(0,1,0,0.7)
    let color1=new Cesium.Color(1,0,0,0.7)
    let color2=new Cesium.Color(0,0,1,0.7)

}
export function removeGeojson(viewer,url){
    let dataSource=viewer.dataSources._dataSources;
    if(SUQIAN_JZX_JSONURL.indexOf(url.url1)>-1){
        for(let i=dataSources.length-1;i>0;i--){
            let dataSource=dataSourceS[I]
            if(SUQIAN_JZX_NAME.indexOf(dataSource._name)>-1){
                viewer.dataSources.remove(dataSource);
            }
        }
    }

}
export function addGeojsonJZXItem(viewer,url){
    let geojsonOptions={
        clampToGround:false
    }
     let GeoJsonData=new Cesium.GeoJsonDataSource("data")
    let promise1= GeoJsonData.load(url.url1,geojsonOptions)
    let dataPromise=Cesium.GeoJsonDataSource.load(url.url1,geojsonOptions)
    promise1.then(function(dataSource){
        console.log(dataSource)
        viewer.dataSources.add(dataSource)
        let neigborhoodEntities=dataSource.entities.values;
        for (const item of neigborhoodEntities) {
            if(item.polyline){
                item.polyline.material=new Cesium.Color(0,1,0,0.7)
            }else{
                item.billboard=undefined
                item.point=new Cesium.PointGraphics({
                    color:new Cesium.Color(0,1,0,0.7),
                    pixelSize:5
                })
                let jzdNo=item.properties.JZDNO._value
                 item.label=({
                    text: jzdNo,
                    color : Color.YELLOW,
                    font:'normal 32px MicroSoft YaHei',
                    showBackground : false,
                    scaleByDistance: new NearFarScalar(400, 1, 1800, 0),
                    scale : 0.5,
                    horizontalOrigin : HorizontalOrigin.LEFT_CLICK,
                    verticalOrigin : VerticalOrigin.BOTTOM,
                    distanceDisplayCondition : new DistanceDisplayCondition(0.0, 1000.0),
                    eyeOffset: new Cartesian3(0, 0, -10)
                 })
            }
        }
    })

}
export function remove3DTilesetData(viewer, url) {
   let isAdded = get3DTilesData(viewer,url)
   if(isAdded!=undefined){//说明存在，存在就移除
    var primitives = viewer.scene.primitives
    for (var i = 0; i < primitives.length; i++) {
        if (primitives._primitives[i]._url == url) {
            viewer.scene.primitives.remove(primitives._primitives[i])
        }
    }
   }else{
       console.log("当前场景中不存在此数据")
   }
    
}

//根据Url获取viewer中的imageLayer
export function getImageData(viewer,url){
    let image
    for (let i  = 0; i < viewer.imageryLayer._layer.length; i++) {
        let layer=viewer.imageryLayer._layer[i]
        if(url==layer._imageryProvider.url){
            image=layer
        }
    }
    return image
}
//viewer中的terrainProvider是唯一的，有且只有一个
export function getTerrainData(viewer,url){
    return viewer.terrainProvider
}
export function get3DTilesData(viewer,url){
    let tileset
    let primitives=viewer.scene.primitives
    for (let i = 0; i < primitives.length; i++) {
        if(primitives._primitives[i]._url==url){
            tileset=primitives._primitives[i]
        }
    }
    return tileset
}

export function focusPosition(viewer,nodeData){
    viewer.zoomTo(nodeData)
}