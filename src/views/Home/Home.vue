<template>
  <div class="Home">
    <SideBar/>
     <CesiumContainer/>
  </div>
</template>

<script>
import SideBar from '@/views/SideBar/SideBar'
import CesiumContainer from '@/components/CesiumBox/CesiumContainer'
export default {
    name:'Home',
    components:{
      CesiumContainer,
      SideBar
    }
    
}
</script>

<style>

</style>