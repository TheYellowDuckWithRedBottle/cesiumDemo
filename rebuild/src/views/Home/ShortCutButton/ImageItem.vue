<template>
  <div class="">
    <img :src="ImageItem" alt="ImageItem">
  </div>
</template>

<script>
export default {
    name:'',
    props:{
      ImageItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
}
</script>

<style>

</style>