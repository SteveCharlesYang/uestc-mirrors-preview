<template>
  <v-col cols="12" md="4">
    <v-card class="mx-auto">
      <v-list two-line subheader>
        <v-skeleton-loader
          :loading="loading"
          transition-group="fade-transition"
          type="list-item-two-line"
        >
          <v-subheader>镜像站公告</v-subheader>

          <v-list-item
            two-line
            v-for="(news_item, index) in newslist"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="news_item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="news_item.desc"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text
                v-text="news_item.time"
              ></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-skeleton-loader>
      </v-list>
      <v-divider />
      <v-card-actions>
        <v-btn to="/status" text color="primary">镜像站状态</v-btn>
        <v-spacer />
        <v-btn text color="primary">建议新增</v-btn>
        <v-btn text color="primary">问题反馈</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    newslist: null,
    loaderr: false
  }),
  mounted: function() {
    this.$ajax
      .get("data/news.json")
      .then(response => (this.newslist = response.data))
      .catch(() => {
        this.loaderr = true;
      })
      .then(() => (this.loading = false));
  }
};
</script>
