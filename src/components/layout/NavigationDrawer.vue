<template>
  <v-navigation-drawer v-model="drawerState" app>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            UESTC 镜像站
          </v-list-item-title>
          <v-list-item-subtitle>
            UESTC Mirror
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>主页</v-list-item-title>
      </v-list-item>

      <v-list-group
        prepend-icon="mdi-linux"
        v-if="typeof repo.linux != 'undefined'"
      >
        <template v-slot:activator>
          <v-list-item-title> Linux 发行版 </v-list-item-title>
        </template>

        <v-list-item
          v-for="(dist, i) in repo.linux"
          :key="i"
          :to="'/repo/' + dist['id']"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="'mdi-' + checkicon(dist['icon'])"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="dist['name']"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-application"
        v-if="typeof repo.app != 'undefined'"
      >
        <template v-slot:activator>
          <v-list-item-title>
            程序
          </v-list-item-title>
        </template>

        <v-list-item
          v-for="(dist, i) in repo.app"
          :key="i"
          :to="'/app/' + dist['id']"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="'mdi-' + checkicon(dist['icon'])"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="dist['name']"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
    <template v-slot:append>
      <v-list-group prepend-icon="mdi-dots-horizontal">
        <template v-slot:activator>
          <v-list-item-title>
            其他
          </v-list-item-title>
        </template>

        <v-list-item to="/status">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-title>状态</v-list-item-title>
        </v-list-item>
        <v-list-item to="/downloadiso">
          <v-list-item-icon>
            <v-icon>mdi-album</v-icon>
          </v-list-item-icon>
          <v-list-item-title>下载 ISO</v-list-item-title>
        </v-list-item>
        <v-list-item to="/browse">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>浏览目录</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-divider />
      <v-footer>
        <span class="font-weight-light">Insider Preview v{{ version }}</span>
        <v-spacer />
        <AboutView />
      </v-footer>
    </template>
  </v-navigation-drawer>
</template>
<script>
import repo from "@/assets/data/doc.json";
import AboutView from "@/components/modal/AboutView";

export default {
  components: {
    AboutView
  },
  data: () => ({
    repo: repo,
    version: process.env.VUE_APP_VERSION_CODE
  }),
  methods: {
    checkicon: function(icon) {
      if (typeof icon != "undefined") {
        return icon;
      } else {
        return "package-variant-closed";
      }
    }
  },
  computed: {
    drawerState: {
      get() {
        return this.$store.state.drawerShow;
      },
      set(val) {
        return this.$store.commit("updateDrawer", val);
      }
    }
  }
};
</script>
