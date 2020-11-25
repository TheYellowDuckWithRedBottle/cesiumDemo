<template>
  <div class="home">
    <NavBar/>
    <SideBar/>
    <CesiumContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/views/NavBar/NavBar'
import SideBar from '@/views/SideBar/SideBar'
import CesiumContainer from '@/components/CesiumBox/CesiumContainer'
export default {
  name: 'Home',
  components: {
    CesiumContainer,
    SideBar,
    NavBar
  }
}
</script>
<style scoped>
.home{
  margin:0px;
  padding: 0px;
}
</style>
