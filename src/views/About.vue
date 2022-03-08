<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" sm="6">
        <v-card class="mx-auto" max-width="600">
          <v-img src="../assets/img/pastel.jpg" height="250px" contain></v-img>

          <v-card-title>Historia</v-card-title>

          <v-card-text class="cardtText">
            Somos una pastelería que tenemos mas de 50 años de experiencia
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange lighten-2" text @click="reveal = true">
              Leer más
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="cardtText">
                Durante estos 50 años que hemos buscado la satisfacción de
                nuestros clientes, nos mantenemos a la moda generando nuevas
                declaraciones y temáticas. Siempre escuchamos a nuestros
                clientes, estamos abiertos a sugerencias y nos gusta que también
                propongan nuevos diseños.
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="reveal = false">
                  Cerrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-card class="mx-auto" max-width="600">
          <v-card-title class="text-h5 mb-4">
            Atención al cliente
          </v-card-title>

          <v-card-subtitle
            >Nos encontramos en Chignahuapan, Puebla</v-card-subtitle
          >
          <v-card-subtitle
            >Colonia centro, calle Francisco I Madero</v-card-subtitle
          >
          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">Días de atención</div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong>
                  </div>
                  <div>{{ message.time }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      reveal: false,
       messages: [
        {
          from: 'De Lunes a Viernes',
          time: '10:00 am a 8:00 pm',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Sabados',
          time: '10:00 am a 7:00 pm',
          color: 'green',
        },
        {
          from: 'You',
          time: '10:00 am a 5:00 pm',
          color: 'deep-purple lighten-1',
        },
      ],
    };
  },
};
</script>

<style>
.cardtText {
  font-family: "Times New Roman", Times, serif;
}
</style>
