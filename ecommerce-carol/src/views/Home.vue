<template>
  <div class="home">
    <navbar />
    <carousel />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import carousel from '@/components/Carousel.vue'

export default {
  name: 'home',
  components: {
    navbar,
    carousel
  }
}
</script>

