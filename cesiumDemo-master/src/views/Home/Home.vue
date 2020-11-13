<template>
  <div>
      <SideBar/>
      <CesiumContainer/>
  </div>
</template>

<script>
import CesiumContainer from '@/components/CesiumBox/CesiumContainer'
import SideBar from '@/views/sideBar/SideBar'
export default {
    components:{
        CesiumContainer,
        SideBar
    }
}
</script>

<style>

</style>