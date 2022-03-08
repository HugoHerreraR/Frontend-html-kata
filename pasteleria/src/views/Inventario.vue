<template>
  <v-row ma-1 style="max-width: 100%">
    <v-tabs v-model="tab" centered fixed-tabs show-arrows :center-active="true" background-color="#F8BBD0" color="#880E4F">
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#sabor">Inventario de sabores</v-tab>
      <v-tab href="#adornos">Inventario de adornos</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item id="sabor">
        <v-container> 
          <v-row>
            <v-col>
               <sabores></sabores>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item id="adornos">
        <v-container>
          <v-row>
            <v-col>
                <decoraciones></decoraciones>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-row>
</template>

<script>
import sabores from '../components/sabores.vue'
import decoraciones from '../components/decoraciones.vue'

export default {
    name:'Inventario',
    components:{
        sabores,
        decoraciones
    },
    data() {
        return {
            tab: null
        }
    },
}
</script>