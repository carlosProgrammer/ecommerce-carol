<template>
<b-container class="bv-example-row bv-example-row-flex-cols">

<div class="container">
    <div class="d-flex justify-content-center">
        <a href="#">Exclusive Products</a> 
    </div>
</div>
<div class="container">
    <div class="d-flex justify-content-center">
        <h3>SPECIAL PRODUCTS</h3>
    </div>
</div>

<div class="container">
    <div class="d-flex justify-content-around hover">
        <a href="#">NEW PRODUCTS</a>
        <a href="#">FEATURED PRODUCTS</a>
        <a href="#">BEST SELLERS</a>
    </div>
</div>

   
 <b-row align-v="start">
    <b-col><img src="../image/321.png" alt="200" height="350"></b-col>
    <b-col><img src="../image/456.png" alt="200" height="350"></b-col>
    <b-col><img src="../image/789.png" alt="200" height="350"></b-col>
</b-row>

</b-container>
</template>

<script>
export default {
    name: 'Specialp'
}
</script>

<style>
    .container {color: #f06686}
</style>