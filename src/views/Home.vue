<template>
  <div class="home">
    <navbar />
    <div class="container-fluid mt-2"></div>
    <carousel />
    <products />
    <specialp />
    <Footer />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import carousel from '@/components/Carousel.vue'
import products from '@/components/Products.vue'
import specialp from '@/components/SpecialP.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    navbar,
    carousel,
    products,
    specialp,
    Footer
  }
}
</script>

