<template>
  <div class="imgLayer">
      <div class="OnlineBaseMap">
          在线底图
      </div>
      <div class="OfflineBaseMap">
          离线底图
      </div>
  </div>
</template>

<script>
export default {
    components:{
               
    }
}
</script>

<style>
.imgLayer{
    z-index: 3;
    background-color: #fff;
    width:300px;
    height: 200px;
    flex-direction:column ;
}
.OnlineBaseMap{
    border-bottom: 1px solid black;;
}
.OfflineBaseMap{

}
</style>