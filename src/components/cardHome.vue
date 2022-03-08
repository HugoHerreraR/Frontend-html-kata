<template>
  <v-card class="mx-auto" max-width="344" color="#F48FB1" dark>
    <v-card-title> Pasteleria Candy </v-card-title>

    <v-card-subtitle> Encuantrarás una gran variedad de sabores y decoraciones </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="color" v-on:click="cargar"> Ver más </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "cardHome",
  methods: {
    cargar() {
      this.$router.push({ path: "/Homepasteles/pastel" });
    },
  },
};
</script>
<style></style>
