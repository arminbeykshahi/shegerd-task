<template>
    

     <HeaderItem />
    
    <router-view></router-view>
    
</template>

<script>

import HeaderItem from './components/HeaderItem.vue'
export default {
  
   components : {
    
    HeaderItem
    
   },

}
</script>

<style>

</style>
