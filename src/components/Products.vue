<template>
<b-container class="bv-example-row bv-example-row-flex-cols">
    <div class="container-fluid mt-5"></div>
  
  <b-row align-v="stretch">
      <b-col><img src="../image/img2.png" alt="200" height="250">
        <div>
          <b-button @click="modalShow = !modalShow" variant="warning">Producto Uno</b-button>
          <b-modal v-model="modalShow">Esto es una prueba de este producto</b-modal>
        </div>
      </b-col>
    <b-col><img src="../image/img3.png" alt="20" height="250"></b-col>
    <b-col><img src="../image/img1.png" alt="200" height="250"></b-col>
  </b-row>

  <div class="container-fluid mt-4"></div>
  <b-row align-v="stretch">
    <b-col><img src="../image/img2.png" alt="200" height="250"></b-col>
    <b-col><img src="../image/img3.png" alt="20" height="250"></b-col>



    <b-col><img src="../image/img1.png" alt="200" height="250">
      <div>
        <b-button v-b-modal.modal-center variant="warning">Producto 2 (Probando Estilo)</b-button>

        <b-modal id="modal-center" centered title="Segundo Producto">
        <p class="my-4">Ventana central con detalles del produto</p>
      </b-modal>
      </div>

    </b-col>



  </b-row>

  <b-row align-v="baseline">
    
  </b-row>

</b-container>
</template>

<script>
  export default {
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>