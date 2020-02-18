<template>
  <div>
    <MainAppBar />
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-list subheader class="mx-auto" dense>
              <v-subheader inset>镜像列表</v-subheader>

              <v-list-item
                v-for="item in dir"
                :key="item.name"
                @click="gotoDir('/' + item.name)"
              >
                <v-list-item-avatar>
                  <v-icon>mdi-folder</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action v-if="typeof item.info != 'undefined'">
                  <v-btn icon :to="'/' + item.info">
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>

              <v-divider inset></v-divider>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import MainAppBar from "@/components/layout/MainAppBar";
import dir from "@/assets/data/dir.json";

export default {
  name: "browse",
  components: { MainAppBar },
  data: () => ({
    dir: dir
  }),
  methods: {
    gotoDir: function(dir) {
      window.location.href = process.env.VUE_APP_MIRROR_URL + dir;
    }
  }
};
</script>
<style lang="scss" scoped></style>
