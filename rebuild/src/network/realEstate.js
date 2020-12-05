import {request} from './request';
export function getRealEstatedata(Params){
    return request({
        method:'get',
        url:'RealEstate/GetBuildings',
        params:{
            PageIndex:Params.pageIndex,
            PageSize:Params.pageSize,
            OrderBy:Params.order
        }
    })
}
export function addRealEstateData(EstateModel)
{
    return request({
        method:'put',
        url:'RealEstate​',
        data:{
            EstateModel
        }
    })
}
export function deleteRealEstateData(EstateUnitNo){
    return request({
        method:'delete',
        url:'RealEstate​',
        params:{
            EstateUnitNo
        }
    })
}
export function postExcelData(){
    return request({
        method:'post',
        url:'Home/ImportExcel',
        headers: {
            "Content-type": "multipart/form-data"
          }
    })
}
export function getAttribute(){
    return request({
        url:'savedAttr',
        params:{

        }
    })
}
export function updateAttribute(id,name,cname,isShow){
    return request({
        method:'put',
        url:'savedAttr',
        data:{
            id,name,cname,isShow
        }
    })
}
export function addAttribute(){
    return request({
        url:'savedAttr',
        data:{
            name
        }
    })
}

export function deleteAttribute(name){
    return request({
        method:'delete',
        url:'savedAttr',
        params:{
            name
        }
    })
}

