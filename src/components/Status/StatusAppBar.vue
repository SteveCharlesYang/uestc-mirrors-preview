<template>
  <v-app-bar elevate-on-scroll color="primary" :dark="true" app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <span>UESTC Mirrors</span>
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
      <slot name="tab" />
    </template>
  </v-app-bar>
</template>
<script>
import Search from "@/components/layout/Search";
import FunctionPopup from "@/components/layout/FunctionPopup";
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
