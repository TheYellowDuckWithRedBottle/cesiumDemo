<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index"
    @click.stop="itemClick(index)"
   
    :class="{active:currentIndex===index}">
      <i :class="item"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return [
            "fa fa-server",
            "fa fa-pencil",
            "fa fa-line-chart",
            "fa fa-cog fa-fw"
          ]
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        console.log(index)
        this.$emit("tabClick",index);
      }
    }
  }
</script>

<style scoped>
 .tab-control{
   height: 100%;
   border-right:gray solid 0.5px;

    margin-left: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 }
 .tab-control-item{
   flex:1;
   line-height: 50px;
 }
 .active{
   color:pink;
 }
 .active i{  
      border-bottom: pink 2px solid;
 }
</style>
