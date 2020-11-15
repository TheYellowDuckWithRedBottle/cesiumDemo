// import{
//     Cesium3DTile,
//     Cesium3DTileset,
//     HeadingPitchRange
// } from 'cesium'

export function addData(node){
    switch (node.type) {
        case "3DTiles":
            
            break;
        case "Geojson":
            
            break;
        case "type":
            
            break;

        default:
            break;
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
