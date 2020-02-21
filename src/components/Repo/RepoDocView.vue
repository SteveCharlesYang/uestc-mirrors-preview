<template>
  <v-card-text>
    <v-skeleton-loader
      :loading="loading"
      transition="fade-transition"
      height="100vh"
      type="article"
    >
      <VueMarkdown class="mdtext" v-if="!docerr">{{ mdtext }}</VueMarkdown>
      <v-layout v-if="docerr">
        <v-row align="center" justify="center">
          <v-btn icon large target="_blank">
            <v-icon large>mdi-selection-off</v-icon> </v-btn
          ><span>哦豁，文档不见了</span>
        </v-row>
      </v-layout>
    </v-skeleton-loader>
  </v-card-text>
</template>
<script>
import VueMarkdown from "vue-markdown";

export default {
  data: () => ({
    loading: true,
    docerr: false,
    mdtext: null
  }),
  props: ["doc"],
  methods: {
    refreshDoc() {
      this.docerr = false;
      this.$ajax
        .get("doc/" + this.doc + ".md")
        .then(response => (this.mdtext = response.data))
        .catch(() => {
          this.docerr = true;
        })
        .finally(() => (this.loading = false));
    }
  },
  watch: {
    doc() {
      this.refreshDoc();
    }
  },
  mounted: function() {
    this.refreshDoc();
  },
  components: { VueMarkdown }
};
</script>
<style lang="scss">
.mdtext code {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  max-width: 100%;
}
.mdtext img {
  max-width: 100%;
  background-color: white;
}
</style>
