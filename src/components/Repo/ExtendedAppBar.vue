<template>
  <v-app-bar
    shrink-on-scroll
    prominent
    elevate-on-scroll
    color="primary"
    :dark="true"
    app
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title class="ml-0 pl-4 mr-8">
      <v-icon>mdi-{{ repo.icon }}</v-icon> &nbsp;
      <span>{{ repo.name }}</span>
    </v-toolbar-title>
    <Search />
    <v-spacer />
    <FunctionPopup />
    <v-btn @click="toggleDark" icon>
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
    <v-btn @click="toggleColorShow" icon>
      <v-icon>mdi-palette</v-icon>
    </v-btn>
    <template v-slot:extension>
      <slot name="tabcontent" />
    </template>
  </v-app-bar>
</template>
<script>
import FunctionPopup from "@/components/layout/FunctionPopup";
import Search from "@/components/layout/Search";
export default {
  name: "AppBar",
  components: {
    Search,
    FunctionPopup
  },
  data() {
    return {
      color: "#1CA085"
    };
  },
  props: ["repo"],
  computed: {
    thisrepo: function() {
      if (this.$route.params.reponame != undefined) {
        return this.findRepos(this.$route.params.reponame);
      }
      return [];
    },
    thisapp: function() {
      if (this.$route.params.appname != undefined) {
        return this.findApp(this.$route.params.reponame);
      }
      return [];
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    toggleDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.dark = this.$vuetify.theme.dark;
    },
    toggleColorShow() {
      this.$store.commit("updateColor", !this.$store.state.colorShow);
    }
  }
};
</script>
<style lang="scss" scoped>
swatches {
  max-height: 24px;
  max-width: 24px;
}
</style>
