<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar"> </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
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
  name: "HomeView",
  components: {
  },
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      menuItems: [
        { title: "Pasteles", path: "/Homepasteles/pastel"},
        { title: "Crea", path: "/Homepasteles/form",},
        { title: "Sign In", path: "/signin"},
      ],
    };
  },
  created() {
    console.log(this.tab);
  },
};
</script>
