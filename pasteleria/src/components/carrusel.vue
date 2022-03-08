<template>
  <v-carousel align="center" justify="center" cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      contain
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
          src: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/06/pastelnapolitano.jpg",
        },
        {
          src: "https://images.aws.nestle.recipes/resized/060873dde58cacbd4bfa2a46451fbb26_flan_1200_600.jpg",
        },
        {
          src: "https://cdn.kiwilimon.com/recetaimagen/29903/th5-640x640-31783.jpg",
        },
      ],
    };
  },
};
</script>
