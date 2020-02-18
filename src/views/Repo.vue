<template>
  <div>
    <ExtendedAppBar :repo="thisrepo">
      <template v-slot:tabcontent>
        <v-tabs
          show-arrows
          align-with-title
          center-active
          background-color="primary"
          v-model="tab"
        >
          <v-tab href="#tab-home">简介</v-tab>
          <v-tab
            :href="'#tab-' + dists.url"
            v-for="dists in thisrepo.dist_url"
            :key="dists.url"
            >{{ dists.name }}</v-tab
          >
        </v-tabs>
        <v-btn
          color="primary"
          dark
          absolute
          v-if="typeof thisrepo.download != 'undefined'"
          bottom
          right
          fab
          :to="'/downloadiso/' + thisrepo.download"
        >
          <v-icon>mdi-download</v-icon>
        </v-btn>
      </template>
    </ExtendedAppBar>
    <v-content>
      <v-container fluid>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-home">
            <v-card>
              <v-card-actions
                class="ml-4"
                v-if="typeof thisrepo.links != 'undefined'"
              >
                <v-row>
                  <v-col
                    v-for="link in thisrepo.links"
                    :key="link.name"
                    class="col-auto"
                  >
                    <v-btn text>
                      <v-icon>mdi-link</v-icon>
                      {{ link.name }}</v-btn
                    ></v-col
                  >
                </v-row>
              </v-card-actions>
              <v-divider />
              <v-row>
                <v-col cols="12">
                  <v-card-text>
                    <RepoDocView :doc="'home-' + thisrepo.id" />
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item
            v-for="tabrepo in thisrepo.dist_url"
            :key="tabrepo.url"
            :value="'tab-' + tabrepo.url"
          >
            <v-card>
              <v-row>
                <v-col cols="12">
                  <v-card-subtitle class="ml-4"
                    ><code>https://mirrors.uestc.cn/{{ tabrepo.url }}</code>
                    <v-btn
                      icon
                      @click="
                        copylink('https://mirrors.uestc.cn/' + tabrepo.url)
                      "
                    >
                      <v-icon>mdi-content-copy</v-icon>
                    </v-btn>
                    <v-snackbar v-model="copyLinkBar">
                      链接已复制
                      <v-btn color="primary" text @click="copyLinkBar = false">
                        关闭
                      </v-btn>
                    </v-snackbar>
                  </v-card-subtitle>
                  <v-divider />
                  <v-card-text>
                    <RepoDocView :doc="tabrepo.url" />
                  </v-card-text>
                </v-col>
              </v-row>
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
  name: "repo",
  data: () => ({
    tab: "tab-home",
    copyLinkBar: false
  }),
  components: { ExtendedAppBar, RepoDocView },
  computed: {
    thisrepo: function() {
      return this.findRepos(this.$route.params.reponame);
    }
  },
  methods: {
    copylink(str) {
      this.$copyText(str);
      this.copyLinkBar = true;
    },
    findRepos(str) {
      return repo.linux.find(obj => {
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
