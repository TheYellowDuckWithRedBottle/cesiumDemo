// import {Cesium3DTileset} from 'cesium/Source/Cesium'

export function add3DTilesetData(viewer,url){
    var tileset = viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
            url: url,
            debugColorizeTiles:true,
            debugShowContentBoundingVolume:true,
            skipLevelOfDetail : true,
            baseScreenSpaceError : 1024,
            skipScreenSpaceErrorFactor : 16,
            skipLevels : 1,
            immediatelyLoadDesiredLevelOfDetail : false,
            loadSiblings : false,
            cullWithChildrenBounds : true
        })
    )
    viewer.scene.primitives.add(tileset);   
    tileset.loadProgress.addEventListener(function(numberOfPendingRequests, numberOfTilesProcessing) {
        if ((numberOfPendingRequests === 0) && (numberOfTilesProcessing === 0)) {
            console.log('Stopped loading');
            return;
        }
    
        console.log('Loading: requests: ' + numberOfPendingRequests + ', processing: ' + numberOfTilesProcessing);
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
export function remove3DTilesetData(viewer, url) {
    var primitives = viewer.scene.primitives
    for (var i = 0; i < primitives.length; i++) {
        if (primitives._primitives[i]._url == url) {
            viewer.scene.primitives.remove(primitives._primitives[i])
        }
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