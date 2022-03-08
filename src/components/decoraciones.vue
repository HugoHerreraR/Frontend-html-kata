<template>
  <v-container grid-list-xs>
    <v-card color="#F48FB1">
      <v-card-title>
        Lista de decoraciones
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          dark
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        item-key="name"
        class="elevation-1"
        :search="search"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
        }"
      ></v-data-table>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
        search: '',
      headers: [
        {
          text: "Decoración",
          align: "start",
          value: "decoracion",
        },
        { text: "Cantidad", value: "numero" },
 
      ],
      desserts: [
        {
          decoracion: "Tematica de cumpleaños",
          numero: 51
        },
                {
          decoracion: "Decoración de gato",
          numero: 290
        },
        {
          decoracion: "Decoración de Mickey Mouse",
          numero: 10
        },
        {
          decoracion: "Decoración de corazón",
          numero: 21
        },
        {
          decoracion: "Tematiza de parque jurasico",
          numero: 67
        },
        
      ],
    };
  },
};
</script>
