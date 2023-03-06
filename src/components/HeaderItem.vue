
<template>
  <div class="header d-flex justify-content-between align-items-center">
     <div>
         <ul class="d-flex">
             <li class="ms-3"><router-link to="/">پروفایل کاربر</router-link></li>
         </ul>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 
 html {

     direction: rtl !important;
 }

  
.header {

   width: 100%;

   height: 70px;

   background-color: #f8f9fa;
}


li a {

    text-decoration: none;
    color: black;
}


ul {

    list-style-type: none;
}


.router-link-active {

     border-bottom: 2px solid black !important;
     
}






</style>