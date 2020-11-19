<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="360"
      style="text-shadow: 1px 1px 2px #77C8AB;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide
        caption="First slide"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        img-src="https://picsum.photos/1024/360/?image=52">
        <h1>Foto Principal</h1>
        </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/360/?image=54">
        <h1>Nueva Coleccion!</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/360/?image=58">OFERTAS</b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="240"
            src="https://picsum.photos/1024/360/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          SI QUIERES VER MAS! 
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      
    }
  }
</script>