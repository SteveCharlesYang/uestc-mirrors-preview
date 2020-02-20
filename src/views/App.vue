<template>
  <div>
    <ExtendedAppBar :repo="thisapp">
      <template v-slot:tabcontent>
        <v-tabs
          show-arrows
          align-with-title
          center-active
          background-color="primary"
          v-model="tab"
        >
          <v-tab href="#tab-home">简介</v-tab>
          <v-tab href="#tab-download">下载</v-tab>
        </v-tabs>
      </template>
    </ExtendedAppBar>
    <v-content>
      <v-container fluid>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-home">
            <v-card>
              <v-card-text v-if="typeof thisapp.links != 'undefined'">
                <v-row>
                  <v-col
                    v-for="link in thisapp.links"
                    :key="link.name"
                    class="col-auto"
                  >
                    <v-btn text>
                      <v-icon>mdi-link</v-icon>
                      {{ link.name }}</v-btn
                    ></v-col
                  >
                </v-row>
              </v-card-text>
              <v-card-text> <RepoDocView :doc="thisapp.id"/></v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-download">
            <v-card>
              <RepoDocView :doc="thisapp.id + '-download'" />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import ExtendedAppBar from "@/components/Repo/ExtendedAppBar";
import RepoDocView from "@/components/Repo/RepoDocView";
import repo from "@/assets/data/doc.json";

export default {
  name: "app",
  data: () => ({
    tab: "tab-home",
    copyLinkBar: false
  }),
  components: { ExtendedAppBar, RepoDocView },
  computed: {
    thisapp: function() {
      return this.findApp(this.$route.params.appname);
    }
  },
  methods: {
    copylink(str) {
      this.$copyText(str);
      this.copyLinkBar = true;
    },
    findApp(str) {
      return repo.app.find(obj => {
        return obj.id === str;
      });
    }
  },
  mounted: function() {
    if (typeof this.$route.params.tab != "undefined") {
      this.tab = "tab-" + this.$route.params.tab;
    }
  }
};
</script>
<style lang="scss" scoped></style>
