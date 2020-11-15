<template>
  <div class="home">
    <SideBar/>
    <CesiumContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/views/SideBar/SideBar'
import CesiumContainer from '@/components/CesiumBox/CesiumContainer'
export default {
  name: 'Home',
  components: {
    CesiumContainer,
    SideBar
  }
}
</script>
