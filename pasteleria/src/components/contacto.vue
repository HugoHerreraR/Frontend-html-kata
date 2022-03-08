<template>
  <v-row justify="end">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#FFF3E0"
          dark
          v-bind="attrs"
          v-on="on"
          class="mr-4 mb-6"
          text
        >
          Comprar
        </v-btn>
      </template>
      <v-card color="#F48FB1" dark>
        <v-card-title>
          <span class="text-h5">Datos para el envio</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nombre*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Dirección" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  name="input-7-1"
                  label="Descripción del pastel"
                  hint="Hint text"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#FFF3E0"  text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="#FFF3E0" text @click="dialog = false">
            Solicitar pedido
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
