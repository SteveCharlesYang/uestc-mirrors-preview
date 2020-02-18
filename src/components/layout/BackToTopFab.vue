<template>
  <v-fab-transition>
    <v-btn
      absolute
      fixed
      dark
      fab
      bottom
      right
      color="primary"
      class="mb-12"
      v-if="scrollVal > 300"
      @click="backToTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>
<script>
export default {
  data: () => ({
    scrollVal: 0
  }),
  methods: {
    onScroll() {
      this.scrollVal = window.pageYOffset;
    },
    backToTop() {
      this.$vuetify.goTo(0);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  }
};
</script>
