<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-card>
        <v-card-title primary-title>
          Selcciona el/los sabor(es) de tu pastel
        </v-card-title>
        <div class="mx-8">
          <v-row>
            <v-col cols="12" md="4">
              <v-select
                v-model="select1"
                :items="sabor1"
                :rules="[(v) => !!v || 'Item is required']"
                label="Sabor 1"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="select2"
                :items="sabor2"
                :rules="[(v) => !!v || 'Item is required']"
                label="Sabor 2"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="select3"
                :items="sabor3"
                :rules="[(v) => !!v || 'Item is required']"
                label="Sabor 3"
                required
              ></v-select>
            </v-col>
          </v-row>
          <!-- <v-divider class="ma-6"></v-divider> -->
          <v-card-title primary-title>
            Decoracion de Pastel
          </v-card-title>
          <v-row>
            <v-col cols="12" md="4">
              <v-select
                v-model="selectsabor"
                :items="decoracion"
                :rules="[(v) => !!v || 'Item is required']"
                label="Decoración"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="Nombre"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-textarea
                name="input-7-1"
                label="Descripción del pastel"
                hint="Hint text"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-spacer></v-spacer>
            <!-- <v-btn
              right
              :disabled="!valid"
              color="success"
              class="mr-4 mb-3"
              @click="validate"
            >
              Validate
            </v-btn> -->
            <contacto></contacto>
            <!-- <v-btn right color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn> -->
          </v-row>
        </div>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import contacto from '../components/contacto.vue'
export default {
  components:{
    contacto
  },
    data() {
        return {
            valid: true,
            name: '',
            select1: null,
            select3: null,
            select2: null,
            selectsabor: null,
            sabor1: [
              'Moka',
              'Chocolate',
              'Rompope',
              'Cajeta',
              'Fresa',
              'Durazno',
              'Trufa',
              'Xocolaa',
              'Oreo'
            ],
            sabor2:[
              'Queso con zarzamora',
              'Napolitano',
              'Cafe',
              'Piña',
              'Tres leches',
              'Cajeta',
              'Piña'	
            ],
            sabor3: [
              'Moka',
              'Chocolate',
              'Rompope',
              'Cajeta',
              'Fresa',
              'Durazno',
              'Trufa',
              'Xocolaa',
              'Oreo'
            ],
            decoracion: [
              'Parque jurasico',
              'Corazon',
              'Tematica de cumpleaños',
              'Mickey Mause',
              'Decoración sencilla'
            ]
        }
    },
    methods: {
        validate(){

        }
    },
}
</script>
