<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" sm="6">
        <carrusel></carrusel>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <cardHome></cardHome>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import carrusel from "../components/carrusel.vue";
import cardHome from "../components/cardHome.vue";

export default {
  components: {
    carrusel,
    cardHome,
  },
  name: "Home",
};
</script>

<style></style>
