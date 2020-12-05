<template>
  <div class="chartSection">
      <div v-if="this.$store.state.staticModule" class="charts">
         <div class="close" @click="closeCurPage"><i class=" fa fa-close"></i></div> 
          <el-select v-model="selectedVillage" placeholder="请选择"  @change="getDataByVillage(selectedVillage)">
    <el-option
      v-for="(item,index) in village"
      :key="index"
      :label="item"
      :value="item"
     
      >
    </el-option>
  </el-select>
     <div id="main">
        
     </div>
      </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getXZQ ,getStaticByQSXZ,getDataByXZQ,getStaticData} from '@/network/static.js'
export default {
    name:'Static',
    data(){
        return {
            myChart:{},
            village:[],
            selectedVillage:"",
            options:{
                title:{
                    text:'自然资源统计',
                },
                tooltip:{
                    trigger:'item',
                    label:{
                        backgroundColor:'#E933F3'
                    }
                },
                legend:{
                    orient:'vertical',
                    right:10,
                   
                },
                series:[
                    {
                        type:'pie',
                        radius: ['50%', '70%'],
                        center:['50%','50%'],
                        emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
            }
                        
                    }
                ]
            }
            
        }
    },
    created(){
        getXZQ().then(res=>{
            console.log(res)
            this.village=res
        })
        getStaticData().then(res=>{
       
        let legendData=[]
        let seriesData=[]
      
        for(let i of res){
            legendData.push(i.自然资源分类名称)
            seriesData.push({
                name:i.自然资源分类名称,
                value:i.面积
            })      
        }
        this.options.series[0].data=seriesData
        this.options.legend.data=legendData
        })
    },
  mounted(){     
           this.myChart=echarts.init(document.getElementById('main'))
             this.myChart.setOption(this.options)
    },
    methods:{
        getDataByQSXZ(code){
            getStaticByQSXZ(code).then(res=>{

            })
        },
        getDataByVillage(village){
            getDataByXZQ(village).then(res=>{
                console.log(res)
                let legendData=[]
                let seriesData=[]
      
        for(let i of res.cateArea){
            legendData.push(i.cateName)
            seriesData.push({
                name:i.cateName,
                value:i.area
            })      
        }
        this.options.series[0].data=seriesData
        this.options.legend.data=legendData
        this.myChart.setOption(this.options)
            })
        },
        getChartsData(){
            let legendData=[]
            let seriesData=[]
           for(let i in res){
            legendData.push(i.cateName)
            seriesData.push({
                name:i.cateName,
                value:i.area
            })
        }
        return {
            seriesData,
            legendData
        }
        },
        closeCurPage(){
            this.$store.commit('changeStaticShow',false)
        },
        
        
    }
    
}
</script>

<style scoped>
.close{
    float:right;
}
#main{
    width:500px;
    height: 400px;
}
.chartSection{
    z-index: 10px;
    right:0px;
    top:70px;
    position:absolute;
    background-color: white;
}
</style>
