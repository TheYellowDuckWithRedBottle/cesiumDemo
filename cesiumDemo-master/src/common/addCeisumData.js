import {UrlTemplateImageryProvider,
WebMercatorTilingScheme,
CesiumTerrainProvider,
Cesium3DTileset,
EllipsoidTerrainProvider,
ClassificationType,

Transforms,
Matrix4,
Matrix3,
Color,
Cartesian3,
GeoJsonDataSource,
PointGraphics,
HorizontalOrigin,
VerticalOrigin,
DistanceDisplayCondition,
NearFarScalar,
HeadingPitchRange,
Cesium3DTile,
Math,
ClockRange,
Viewer,
} from 'cesium'

import {
    XINYI_CLASSIF_MODEL_UP_URL,
    XINYI_CLASSIF_MODEL_DOWN_URL,
    XINYI_CLASSIF_MODEL_STYLE,
    KUNSHAN_CLASSIF_MODEL_URLS,
    KUNSHAN_CLASSIF_MODEL_STYLE,
    DEFAULT_CLASSIF_MODEL_STYLE,
    SUQIAN_JZX_JSONURL,
    SUQIAN_JZD_JSONURL,
    SUQIAN_JZD_NAME,
    SUQIAN_JZX_NAME,
    SUQIAN_JZD_HTMLURL
} from '@/components/commonJS/config'
import { onUpdated, markRaw } from 'vue'

export function addWMTSServerData(viewer,url){
    let imageryProvider=new UrlTemplateImageryProvider({
        url:url,
        tilingScheme:new WebMercatorTilingScheme(),
        fileExtension:'png',
    })
    viewer.imageryLayers.addImageryProvider(imageryProvider)
}

export function addTerrainData(viewer,url){
    let terrainProvider=new CesiumTerrainProvider({
        url:url,
        requestWaterMask:true
    })
    viewer.terrainProvider=terrainProvider
}

export function add3DTilessetData_for_OSGB(viewer,url){
    let tileset=viewer.scene.primitives.add({
        url:url,
        
    })
    tileset.readyPromise.then(()=>{
        viewer.zoomTo(tileset,new HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius / 1.0))
    })
}

export function add3DTilesData(viewer,url){
    let tileset=viewer.scene.primitives.add(
        new Cesium3DTile({
            url:url
        })
    )
    tileset.readyPromise.then(()=>{
        if(url==XINYI_CLASSIF_MODEL_DOWN_URL){
            tileset.style=XINYI_CLASSIF_MODEL_STYLE
        }
    })
   
}
export function addClassification3Dtiles(viewer,url){
    let tilset=new Cesium3DTileset({
        url:url,
        classificationType:ClassificationType.CESIUM_3D_TILE
    })
    if(url==XINYI_CLASSIF_MODEL_UP_URL){
        tileset.style=XINYI_CLASSIF_MODEL_STYLE
    }
    viewer.scene.primitives.add(tilset)
}

export function addGeojsonData(viewer,url){
    let color=new Color(0,1,0,0.7);
    let color1=new Color(1,0,0,0.7);
    let color2=new Color(0,0,1,0.7);
    if(SUQIAN_JZD_JSONURL.indexOf(url.url1)>-1){
        color=new Color(0,1,0,1);
        color1=new Color(1,0,0,1);
        color2=new Color(0,0,1,1);
        window.open(SUQIAN_JZD_HTMLURL,'','scrollbars=0,resizable=0,width=700,height=400,top=200,left=350,location=no')
    }
   
}

export function addGeojsonJZX_item(viewer,url,color){
    let geojsonOptions={
        clampToGround:false
    };
    let dataPromise=GeoJsonDataSource.load(url,geojsonOptions);
    dataPromise.then((dataSource)=>{
        viewer.dataSource.add(dataSource)
        let neighborhoodEntities=dataSource.entities.values;
        for(let i=0;i<neighborhoodEntities.length;i++){
            let entity=neighborhoodEntities[i];
            if(entity.polyline){
                entity.polyline.material=color
            }else{
                entity.billboard=undefined
                entity.point=new PointGraphics({
                    color:color,
                    pixelSize:5
                })
                let jzdNo=entity.properties.JZDNO._value
                    entity.label=({
                        text:jzdNo,
                        color:Color.YELLOW,
                        font:'normal 32px MicroSoft YaHei',
                        showBackground:false,
                        scaleByDistance:new NearFarScalar(400,1,1800,0),
                        scale:0.5,
                        horizontalOrigin:HorizontalOrigin.LEFT_CLICK,
                        verticalOrigin:VerticalOrigin.BOTTOM,
                        distanceDisplayCondition:new DistanceDisplayCondition(0.0,1000.0),
                        eyeOffset:new Cartesian3(0,0,-100)
                    })
            }
        }
    })
}

export function add3DTilesetLaserPoiCld(viewer,url){
    let params={
        tx:118.91071,
        ty=32.1174074,
        tz=200,
        rx:0,
        ry:0,
        rz:17036
    }
    let tileset=viewer.scene.primitives.add(new Cesium3DTileset({
        url:url
    }))
    tileset.readyPromise.then(()=>{
        tileset._root.transform=update3dtilesMaxtrix(params);
    })
}
export function update3dtilesMaxtrix(params){
    var mx = Matrix3.fromRotationX(CesiumMath.toRadians(params.rx));
    var my = Matrix3.fromRotationY(CesiumMath.toRadians(params.ry));
    var mz = Matrix3.fromRotationZ(CesiumMath.toRadians(params.rz));
    //缩放
    //var scale = Matrix4.fromUniformScale(10);

    var rotationX = Matrix4.fromRotationTranslation(mx);
    var rotationY = Matrix4.fromRotationTranslation(my);
    var rotationZ = Matrix4.fromRotationTranslation(mz);
    //平移
    var position = Cartesian3.fromDegrees(params.tx, params.ty, params.tz);
    var m = Transforms.eastNorthUpToFixedFrame(position);
    //旋转、平移矩阵相乘
    Matrix4.multiply(m, rotationX, m);
    Matrix4.multiply(m, rotationY, m);
    Matrix4.multiply(m, rotationZ, m);
    //赋值给tileset
    return m;
}

export function removeGeojsonData(viewer,url){
    let dataSource=viewer.dataSource._dataSource
    if(SUQIAN_JZX_JSONURL.indexOf(url,url1)>-1){
        for(let i=dataSource.length-1;i>-1;i--){
            if(SUQIAN_JZX_NAME.indexOf(dataSource._name)>-1){
                viewer.dataSource.remove(dataSource)
            }
        }
    }else if(SUQIAN_JZD_JSONURL.indexOf(url,url1)>-1){
        for(let i=dataSource.length-1;i>-1;i--){
            if(SUQIAN_JZX_NAME.indexOf(dataSource._name)>-1){
                viewer.dataSource.remove(dataSource)
            }
        }
    }
}

export function removeServerData(viewer,url){
    for(let i=0;i<viewer.imageryLayers._layer.length;i++){
        let layer=viewer.imageryLayers._layers[i]
        if(url==layer._imageryProvider.url){
            viewer.imageryLayers.remove(layer)
        }
    }
}
export function removeTerrainData(viewer,url){
    viewer.terrainProvier=new EllipsoidTerrainProvider({})
}

export function remove3DTilesetData(viewer,url){
    let primitives=viewer.scene.primitives
    for(let i=0;i<primitives.length;i++){
        if(primitives._primitives[i]._url==url){
            viewer.scene.primitives.remove(primitives._primitives[i])
        }
    }
}

export function getSelDataFromNode(viewer,selNode){
    let data
    if(selNode.type){
        switch(selNode.type){
            case 'Image':
                data=getImageData(viewer,selNode.url)
                break
            case 'Terrain':
                break
                data=getTerrainData(viewer,selNode.url)
            case '3DTiles_osgb':
                data=get3DTilesData(viewer,selNode.url)
                break
            case '3DTiles':
                data=get3DTilesData(viewer,selNode.url)
                break
            case '3DTiles_for_PoiCld':
                data=get3DTilesData(viewer,selNode.url)
                break
            case '3DTiles_Classification':
                data=get3DTilesData(viewer,selNode.url)
                break
        }
    }
}

export function getImageData(viewer,url){
    let ImageData
    for(let i=0;i<viewer.imageryLayers._layers.length;i++){
        let layer=viewer.imageryLayers._layers[i]
        if(url==layer._imageryProvider.url){
            imageData=layer
        }
    }
    return ImageData
}

export function getTerrainData(viewer,url){
    return viewer.terrainProvider
}

export function get3DTilesData(viewer,url){
    let tiles
    let primitives=viewer.scene.primitives
    for(let i=0;i<primitives.length;i++){
        if(primitives._primitives[i]._url==url){
            tiles=primitives._primitives[i]
        }
    }
    return tiles
}
export function focusPosition(viewer,nodeData){
    viewer.zoomTo(nodeData)
}