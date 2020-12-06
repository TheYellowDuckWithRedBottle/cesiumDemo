<template>
  <div class="imgLayer" @mouseleave="leaveMouse">
      <div class="OnlineBaseMap">
          在线地图
          <div v-for="(item,key) in  ImageIcon" :key="key">
              <i :class="item"></i>
          </div>
          <!-- <ImageItem v-for="(item,key) in  ImageIcon" :key="key" /> -->
      </div>
      <div class="OfflineBaseMap">
          离线底图
      </div>
  </div>
</template>

<script>
import ImageItem from '@/views/Home/ShortCutButton/ImageItem'
export default {
    components:{
          ImageItem     
    },
    props:{
        ImageIcon:{
            type:Array,
            default(){
                return [
            "fa-internet-explorer",
            "fa-chrome",
            "fa fa-line-chart",
            "fa fa-cog fa-fw"
                ]
            }
        }
    },
    methods:{
        leaveMouse(){
            this.$emit("leaveMouse")
        }
    }
}
</script>

<style>
.imgLayer{
    z-index: 4;
    background-color: #fff;
    width:150px;
    height: 150px;
    flex-direction:column ;
    position: absolute;
    border-radius: 4px;
    right:40px;
    border-bottom: 1px solid black;
}
.OnlineBaseMap{
    display: flex;
}
.OfflineBaseMap{

}
</style>