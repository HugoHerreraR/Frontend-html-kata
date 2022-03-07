<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>  
      <v-spacer></v-spacer>
      <v-btn
        class="color"
        :to="{name: 'HomeView'}"
      >
        Explore
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name:'cardHome'
}
</script>
<style>

</style>