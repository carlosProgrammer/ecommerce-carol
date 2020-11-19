<template>
  <div class="home">
    <navbar />
    <carousel />
    <products />
    <specialp />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import carousel from '@/components/Carousel.vue'
import products from '@/components/Products.vue'
import specialp from '@/components/SpecialP.vue'

export default {
  name: 'home',
  components: {
    navbar,
    carousel,
    products,
    specialp
  }
}
</script>

