<template>
  <v-row>
    <v-col cols="12" md="8" sm="6" class="d-flex flex-column">
      <v-card class="flex d-flex flex-column">
        <v-card-title class="headline justify-center"
          >电子科技大学 开源镜像站</v-card-title
        >

        <v-card-subtitle class="text-center"
          >本站由 电子科技大学 Linux 用户组 及 电子科技大学网管会 共同提供。
          <br />
          本站共收录了 <b>15</b> 个 Linux 发行版镜像和&nbsp;
          <b>7</b> 个软件包镜像。</v-card-subtitle
        >
      </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="6" class="d-flex flex-column">
      <v-card class="flex d-flex flex-column">
        <v-card-actions class="justify-center mt-2">
          <v-btn color="primary" large outlined to="browse"
            ><v-icon>mdi-folder</v-icon>浏览目录</v-btn
          >
          <v-btn color="primary" large outlined to="downloadiso"
            ><v-icon>mdi-album</v-icon>下载镜像</v-btn
          >
        </v-card-actions>
        <v-card-actions class="justify-center">
          <v-btn
            text
            icon
            color="grey"
            @click="openLink('https://github.com/uestclug')"
          >
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          <v-btn
            text
            icon
            color="blue"
            @click="openLink('https://t.me/joinchat/LgGQ2VXKXVu9fJpOlNgSDA')"
          >
            <v-icon>mdi-telegram</v-icon>
          </v-btn>
          <v-btn
            text
            icon
            color="brown"
            @click="openLink('mailto:lug.uestc@gmail.com')"
          >
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn
            text
            icon
            color="purple"
            @click="openLink('https://jq.qq.com/?_wv=1027&k=54iKK8Y')"
          >
            <v-icon>mdi-qqchat</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-row>
        <DistInfo
          v-for="repo_item in dists"
          :key="repo_item.name"
          :dist="repo_item"
          :status="getStatus(repo_item.name)"
        />
      </v-row>
    </v-col>
    <NewsView />
  </v-row>
</template>
<script>
import NewsView from "@/components/Home/NewsView";
import DistInfo from "@/components/Home/DistInfo";

import dists from "@/assets/data/dir.json";

export default {
  components: {
    NewsView,
    DistInfo
  },
  data: () => ({
    dists: dists,
    status: null
  }),
  methods: {
    getStatus: function(dist_name) {
      if (this.status != null) {
        return this.status[dist_name];
      } else {
        return null;
      }
    },
    openLink: function(link) {
      window.location.href = link;
    }
  },
  mounted: function() {
    this.$ajax
      .get("/data/status.json")
      .then(response => (this.status = response.data));
  }
};
</script>
