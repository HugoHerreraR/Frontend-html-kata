<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title> Top western road trips </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="color" v-on:click="cargar"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "cardHome",
  methods: {
    cargar() {
      this.$router.push({ path: "/Homepasteles/pastel" });
      location.reload();
    },
  },
};
</script>
<style></style>
