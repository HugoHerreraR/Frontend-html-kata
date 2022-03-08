<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto card" color="#F48FB1" dark>
          <v-img
            class="white--text imagen"
            src="https://dam.cocinafacil.com.mx/wp-content/uploads/2021/04/pastel-de-cuatro-chocolates.jpg"
          >
          </v-img>
          <v-card-title class="cardtTitle">Pastel de chocolotale</v-card-title>

          <v-card-subtitle class="cardSubtitle"
            >Precio: $250.00</v-card-subtitle
          >

          <v-card-actions>
            <v-spacer></v-spacer>
            <formcontacto></formcontacto>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto card" color="#F48FB1" dark>
          <v-img
            class="white--text imagen"
            src="https://d2j6dbq0eux0bg.cloudfront.net/images/63116104/2427684165.jpg"
            contain
          >
          </v-img>

          <v-card-title class="cardtTitle">Pastel de rompope</v-card-title>

          <v-card-subtitle class="cardSubtitle"
            >Precio: $370.00</v-card-subtitle
          >

          <v-card-actions>
            <v-spacer></v-spacer>
            <formcontacto></formcontacto>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto card" color="#F48FB1" dark>
          <v-img
            class="white--text align-end imagen"
            src="https://suspirospastelerias.com/files/files/700/products/pastel-napolitano/pastel-napolitano-closed.png"
            contain
          >
          </v-img>
          <v-card-title class="cardtTitle">Pastel de napolitano</v-card-title>

          <v-card-subtitle class="cardSubtitle"
            >Precio: $450.00</v-card-subtitle
          >

          <v-card-actions>
            <v-spacer></v-spacer>
            <formcontacto></formcontacto>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto card" color="#F48FB1" dark>
          <v-img
            class="white--text align-end imagen"
            src="https://i.blogs.es/72e704/650_1000_como-decorar-pasteles-7/450_1000.jpg"
          >
          </v-img>
          <v-card-title class="cardtTitle">Pastel de vanilla</v-card-title>

          <v-card-subtitle class="cardSubtitle"
            >Precio: $540.00</v-card-subtitle
          >
          <v-card-text class="cardText">
            <span>Pastel con decoración de gato</span>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <formcontacto></formcontacto>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto card" color="#F48FB1" dark>
          <v-img
            class="white--text align-end imagen"
            src="https://i.pinimg.com/736x/9f/1a/8e/9f1a8ef6f38bd5aeb908bb60a1fb54ac.jpg"
          >
          </v-img>
          <v-card-title class="cardtTitle">Pastel de chocolota con fresa</v-card-title>

          <v-card-subtitle class="cardSubtitle"
            >Precio: $720.00</v-card-subtitle
          >
          <v-card-text class="cardText">
            <span>Pastel con decoración de gato</span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <formcontacto></formcontacto>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto card" color="#F48FB1" dark>
          <v-img
            class="white--text align-end imagen"
            src="https://www.sacher.com.mx/media/catalog/product/cache/1/image/1100x/476200980e121fe52a3acaaa755c45c2/m/i/mickeys_magic.jpg"
            contain
          >
          </v-img>
          <v-card-title class="cardtTitle">Pastel de moka</v-card-title>

          <v-card-subtitle class="cardSubtitle"
            >Precio: $799.00</v-card-subtitle
          >
          <v-card-text class="cardText">
            <span>Pastel con decoración de Mickey Mouse</span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <formcontacto></formcontacto>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- formulario -->
  </div>
</template>

<script>
import formcontacto from '../components/formcontacto.vue'
export default {
  components:{
    formcontacto
  }
}
</script>

<style>
.card {
  max-width: 350px;
  max-height: 350px;
  width: 90%;
}
.imagen {
  height: 190px;
}
.cardtTitle {
  font-family: "Times New Roman", Times, serif;
  font-size: 23px;
  margin-bottom: 15px;
}
.cardSubtitle {
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  margin-bottom: -19px;
}
.cardText {
  margin-bottom: -20px;
}
</style>
