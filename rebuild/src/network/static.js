import {request} from './request'
//根据行政区名称获取自然资源类型
export function getDataByXZQ(villageName){
    return request({
        method:'get',
        url:'LandSpace/getStaticFromLoaction',
        params:{
            village:villageName
        }
    })
}
//获取各个行政区名称
export function getXZQ(){
    return request({
        method:'get',
        url:'LandSpace/getXZQ'
        
    })
}
//根据权属性质获取统计数据
export function getStaticByQSXZ(){
    return request({
        method:'get',
        url:'LandSpace/getStaticByQSXZ'
    })
}
export function getStaticData(){
    return request({
        method:'get',
        url:'LandSpace/getStaticByLocation'
    })
}