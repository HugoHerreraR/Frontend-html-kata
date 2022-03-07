<template>
  <v-carousel align="center" justify="center" cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
       
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "carrusel",
  data() {
    return {
      items: [
        {
          src: require("../assets/img/pastel.jpg"),
           width: "60%",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
