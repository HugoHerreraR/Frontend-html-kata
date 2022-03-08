<template>
  <v-container grid-list-xs>
    <v-card>
      <v-card-title>
        Lista de sabores
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
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
          text: "Sabor",
          align: "start",
          value: "sabor",
        },
        { text: "Cantidad", value: "numero" },
 
      ],
      desserts: [
        {
          sabor: "Moka",
          numero: 51
        },
                {
          sabor: "Chocolate con menta",
          numero: 290
        },
                {
          sabor: "Trufa",
          numero: 10
        },
                {
          sabor: "Rompope",
          numero: 21
        },
                {
          sabor: "Marmoleado",
          numero: 67
        },
        
      ],
    };
  },
};
</script>
