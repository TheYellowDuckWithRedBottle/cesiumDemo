<template>
  <div class="home">
    <NavBar/>
    <SideBar/>
    <CesiumContainer/>
    <ButtonContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/views/NavBar/NavBar'
import SideBar from '@/views/SideBar/SideBar'
import CesiumContainer from '@/components/CesiumBox/CesiumContainer'
import ButtonContainer from '@/views/ShortCutButton/ButtonContainer'
export default {
  name: 'Home',
  components: {
    CesiumContainer,
    SideBar,
    NavBar,
    ButtonContainer
  }
}
</script>
<style scoped>
.home{
  margin:0px;
  padding: 0px;
}
</style>
