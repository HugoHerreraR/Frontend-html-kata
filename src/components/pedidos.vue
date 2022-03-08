<template>
  <v-container grid-list-xs>
    <v-card color="#F48FB1">
      <v-card-title>
        Lista de pedidos
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
          text: "Nombre de cliente",
          align: "start",
          value: "name",
        },
        { text: "Pastel", value: "pastel" },
        { text: "Decoración", value: "decoracion" },
      ],
      desserts: [
        {
          name: "Hugo Herrera",
          pastel: "Pastel napolitano",
          decoracion: "Sin decoración"
        },
        {
          name: "Juan Ramirez",
          pastel: "Pastel de cholate con fresas",
          decoracion: "Pastel en forma de corazón"
        },
        {
          name: "Juan Piedad",
          pastel: "Pastel de Rompope",
          decoracion: "Pastel con tematica de cumpleaños"
        },
        {
          name: "Rosa Hernandéz",
          pastel: "Pastel de vainilla",
          decoracion: "Pastel en forma de gato"
        },
        {
          name: "Maribel",
          pastel: "Pastel de Moka",
          decoracion: "Decoración sencilla"
        },
        {
          name: "Juan",
          pastel: "Pastel de cholate con fresas",
          decoracion: "Pastel en forma de corazón"
        },
        {
          name: "Juan Jose",
          pastel: "Pastel de Rompope",
          decoracion: "Pastel con tematica de cumpleaños"
        },
        {
          name: "Rosa",
          pastel: "Pastel de vainilla",
          decoracion: "Pastel en forma de gato"
        },
      ],
    };
  },
};
</script>
