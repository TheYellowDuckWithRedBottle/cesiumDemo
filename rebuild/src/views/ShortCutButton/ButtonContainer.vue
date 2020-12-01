<template>
    <div class="shortContainer">
        <div class="home" @click="backHome"><i class="fa fa-home"></i></div>
        <div class="northArrow" @click="arrowNorth"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></div>
        <div class="scaleMore" @click="scalExpand"><i class="fa fa-expand"></i></div>
        <div class="scaleLess" @click="scalCompress"><i class="fa fa-compress"></i></div>
        <div class="scaleAll" @click="fulllScene"><i class="fa fa-arrows-alt" aria-hidden="true"></i></div>
    </div>
</template>
<script>
export default {
    name:'ButtonContainer',
    methods: {
        backHome(){},
        arrowNorth(){},
        scalExpand(){},
        scalCompress(){},
        fulllScene(){}
    },
}
</script>
<style scoped>
i{
    margin-bottom:5px;
    background-color: #fff;
    border-radius: 50px;
    padding:5px;
    cursor: pointer;
}
.shortContainer{
    margin: 5px;
    position: absolute;;
    width:30px;
    right:0px;
    
    display: flex;
    flex-direction: column;
    z-index: 3;
    
}
</style>