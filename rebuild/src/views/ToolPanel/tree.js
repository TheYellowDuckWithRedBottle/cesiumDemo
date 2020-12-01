export default  [{
    treeList: [
      {
        id: 1,
        label: '宿迁市',
        children: [
          {
            id: 'osgb_suqian',
            label: '实景三维',
            type: '3DTiles',
            url: 'http://localhost:5052/DATA/SWDJ/QXSY/tileset.json'
          },
          {
            id: 3,
            label: '君玺广场',
            children: [
              {
                id: 'DZ',
                label: '宗地产权',
                children: [
                  {
                    id: 'SuQian_DZ_up',
                    label: '地上宗地',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/ZD/up/tileset.json'
                  },
                  {
                    id: 'SuQian_DZ_down',
                    label: '地下宗地',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/ZD/down/tileset.json'
                  },
                  {
                    id: 'SuQian_JZX',
                    label: '界址线',
                    type: 'Geojson',
                    url: {
                      url1: 'http://localhost:5052/DATA/SWDJ/ZD/JSON/001013GB00858_JZX_up.json',
                      url2: 'http://localhost:5052/DATA/SWDJ/ZD/JSON/001013GB00858_JZX_surface.json',
                      url3: 'http://localhost:5052/DATA/SWDJ/ZD/JSON/001013GB00858_JZX_down.json'
                    }
                  },
                  {
                    id: 'SuQian_JZD',
                    label: '界址点',
                    type: 'Geojson',
                    url: {
                      url1: 'http://localhost:5052/DATA/SWDJ/ZD/JSON/001013GB00858_JZD_up.json',
                      url2: 'http://localhost:5052/DATA/SWDJ/ZD/JSON/001013GB00858_JZD_surface.json',
                      url3: 'http://localhost:5052/DATA/SWDJ/ZD/JSON/001013GB00858_JZD_down.json'
                    }
                  },
                ]
              },
              {
                id: 'SuQian_JXGC_model_4',
                label: '实体模型',
                children: [
                  {
                    id: 'eastSide',
                    label: '0001',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/ST/0001/tileset.json',
                    CQurl: 'http://localhost:5052/DATA/SWDJ/001013GB00858/CQ/0001/tileset.json',
                    floor: 19,
                    queryFloorField: 'Floor',
                    queryCQFloorField: 'IfcSpatialContainer'
                  },
                  {
                    id: 'middle',
                    label: '0002',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/ST/0002/tileset.json',
                    CQurl: 'http://localhost:5052/DATA/SWDJ/001013GB00858/CQ/0002/tileset.json',
                    floor: 17,
                    queryFloorField: 'Floor',
                    queryCQFloorField: 'IfcSpatialContainer'
                  },
  
                  {
                    id: 'westSide',
                    label: '0003',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/ST/0003/tileset.json',
                    CQurl: 'http://localhost:5052/DATA/SWDJ/001013GB00858/CQ/0003/tileset.json',
                    floor: 4,
                    queryFloorField: 'Floor',
                    queryCQFloorField: 'IfcSpatialContainer'
                  },
                  {
                    id: 'underground',
                    label: '0004',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/ST/0004/tileset.json',
                    CQurl: 'http://localhost:5052/DATA/SWDJ/001013GB00858/CQ/0004/tileset.json',
                    floor: 1,
                    queryFloorField: 'Floor',
                    queryCQFloorField: 'IfcSpatialContainer'
                  },
                ]
              },
              {
                id: 'SuQian_JXGC_cq',
                label: '房屋产权',
                type: '3DTiles',
                children: [
                  {
                    id: 'eastSide_cq',
                    label: '0001',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/CQ/0001/tileset.json'
                  },
                  {
                    id: 'middle_cq',
                    label: '0002',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/CQ/0002/tileset.json'
                  },
                  {
                    id: 'westSide_cq',
                    label: '0003',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/CQ/0003/tileset.json'
                  },
                  {
                    id: 'underground_cq',
                    label: '0004',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/CQ/0004/tileset.json'
                  },
                ]
              },
              {
                id: 'SuQian_JXGC_swlpb',
                label: '三维楼盘',
                children: [
                  {
                    id: 'eastSide_swlpb',
                    label: '0001',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/LP/0001/tileset.json',
                  },
                  {
                    id: 'middle_swlpb',
                    label: '0002',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/LP/0002/tileset.json',
                  },
                  {
                    id: 'westSide_swlpb',
                    label: '0003',
                    type: '3DTiles',
                    url: 'http://localhost:5052/DATA/SWDJ/001013GB00858/LP/0003/tileset.json',
                  }
                ]
              },
              
            ]
          },
        ]
      },
    ]
  }]