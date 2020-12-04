import request from './request'

export function getDataByXZQ(villageName){
    return request({
        method:'get',
        url:'/LandSpace/getStaticByLocation',
        params:{
            village:villageName
        }
    })
}
export function getXZQ(){
    return request({
        method:'get',
        url:'LandSpace/getXZQ'
        
    })
}