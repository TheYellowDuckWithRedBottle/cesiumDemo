<template>
  <div class="navBar">
      <div class="TitleContainer">三维地籍系统</div>
      <div class="UserInfo">用户名</div>
  </div>
</template>

<script>
export default {
    name:'navBar',
    
}
</script>

<style scoped>
.navBar{
    z-index: 100;
    position: relative;
    display:flex;
    height: 50px;
    width:100%;
    justify-content: space-between;
    background-color:rgba(255,255,255,0.8);
}
.TitleContainer{
    text-align: center;
    font-size: 20px;

}
.UserInfo{

}
</style>

