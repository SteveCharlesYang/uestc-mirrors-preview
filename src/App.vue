<template>
  <v-app>
    <NavigationDrawer app />
    <router-view></router-view>
    <ColorPicker app />
    <BackToTopFab />
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/layout/NavigationDrawer";
import ColorPicker from "@/components/modal/ColorPicker";
import BackToTopFab from "@/components/layout/BackToTopFab";

export default {
  name: "App",

  components: {
    NavigationDrawer,
    ColorPicker,
    BackToTopFab
  },
  mounted() {
    if (localStorage.colortheme) {
      this.$vuetify.theme.themes.light.primary = localStorage.colortheme;
      this.$vuetify.theme.themes.dark.primary = localStorage.colortheme;
    }
    if (typeof localStorage.dark != "undefined") {
      this.$vuetify.theme.dark = localStorage.dark;
    }
  }
};
</script>
<style>
html {
  overflow-y: auto;
}
</style>
