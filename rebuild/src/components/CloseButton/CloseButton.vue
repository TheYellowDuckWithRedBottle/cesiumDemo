<template>
  <div>
    <div class="close" @click="closeCurrPage"><i class="fa-close"></i></div> 
      </div>
  </div>
</template>

<script>

export default {
    name:'CloseButton',
    data(){
        return {
            options:{

            }
        }
    },
    methods:{
        closeCurrPage(){
            this.$emit('colse')
        }
    },
    mounted(){
       
    }
    
}
</script>

<style scoped>
.close{
    width:3px;
    height: 3px;
}
</style>
