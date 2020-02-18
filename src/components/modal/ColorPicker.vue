<template>
  <v-dialog name="color-picker-ui" v-model="show" max-width="290">
    <v-card :dark="false">
      <v-card-title>主题颜色</v-card-title>
      <swatches v-model="color" :colors="colors" inline />
      <v-divider />
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <span>{{ color }} {{ getColorName(color) }}</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import Swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";
export default {
  data() {
    return {
      colors: [
        "#F44336",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#1793D1", //arch
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#34BE5B", //manjaro
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#DD4814", //ubuntu
        "#795548",
        "#9E9E9E",
        "#607D8B",
        "#CC4272", //classic
        "#D77051" //maki
      ]
    };
  },
  computed: {
    color: {
      get() {
        return this.$vuetify.theme.themes.light.primary;
      },
      set(val) {
        localStorage.colortheme = val;
        this.$vuetify.theme.themes.light.primary = val;
        this.$vuetify.theme.themes.dark.primary = val;
      }
    },
    show: {
      get() {
        return this.$store.state.colorShow;
      },
      set(val) {
        return this.$store.commit("updateColor", val);
      }
    }
  },
  methods: {
    getColorName(c) {
      if (c == "#D77051") return "(Maki 红)";
      if (c == "#CC4272") return "(Debian 红) (经典红)";
      if (c == "#1793D1") return "(Arch 蓝)";
      if (c == "#34BE5B") return "(Manjaro 绿)";
      if (c == "#DD4814") return "(Ubuntu 橙)";
      return "";
    }
  },
  components: {
    Swatches
  }
};
</script>
