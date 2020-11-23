<template>
<b-container class="bv-example-row bv-example-row-flex-cols">

<div class="container">
    <div class="container-fluid mt-4"></div>
    <div class="d-flex justify-content-center">
        <a href="#">Exclusive Products</a> 
    </div>
</div>
<div class="container">
    <div class="d-flex justify-content-center">
        <h3>SPECIAL PRODUCTS</h3>
    </div>
</div>

<div class="container2">
    <div class="d-flex justify-content-around hover">
        <a href="#">NEW PRODUCTS</a>
        <a href="#">FEATURED PRODUCTS</a>
        <a href="#">BEST SELLERS</a>
    </div>
</div>
<div class="container-fluid mt-4"></div>

 <b-row align-v="start">
    <b-col><img src="../image/321.png" alt="200" height="350"></b-col>
    <b-col><img src="../image/456.png" alt="200" height="350"></b-col>
    <b-col><img src="../image/789.png" alt="200" height="350"></b-col>
    <b-col><img src="../image/321.png" alt="200" height="350"></b-col>
</b-row>
<div class="container-fluid mt-4"></div>
</b-container>
</template>

<script>
export default {
    name: 'Specialp'
}
</script>

<style>
    a {
    color: #F06686!important;
    text-decoration: none;
    background-color: transparent;
}
</style>