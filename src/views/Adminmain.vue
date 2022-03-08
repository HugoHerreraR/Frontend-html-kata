<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-btn text>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="margen">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          {{ item.title }}
        </v-btn>
        <v-btn text>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <transition>
        <router-view></router-view>
      </transition>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "Adminmain",
  components: {},
  data() {
    return {
      appTitle: "Pasteleria Candy",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/Homepasteles/pastel" },
        { title: "Pedidos", path: "/admin/pedidos" },
        { title: "Inventario", path: "/admin/about" },
      ],
    };
  },
  created() {},
  methods: {
   
  },
  mounted() {},
};
</script>

<style>
.margen {
  margin-bottom: 25px;
}
</style>
