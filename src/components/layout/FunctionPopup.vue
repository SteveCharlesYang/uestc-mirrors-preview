<template>
  <v-menu :close-on-content-click="false" offset-y :nudge-width="200">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col
            class="ms-1 me-1"
            v-for="app in apps"
            :key="app.name"
            cols="3"
            @click="redirectTo(app.url)"
            v-ripple="{ class: 'primary--text' }"
          >
            <v-img :src="app.logo" width="72px" />
            <v-row align="center" justify="center">
              {{ app.name }}
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
<script>
import lug_logo from "@/assets/logo.png";
import git_logo from "@/assets/logo_git.png";
import mirrors_logo from "@/assets/logo_mirrors.png";

export default {
  data: () => ({
    apps: [
      {
        name: "主页",
        logo: lug_logo,
        url: "https://lug.uestc.dev"
      },
      {
        name: "镜像站",
        logo: mirrors_logo,
        url: "https://mirrors.uestc.cn"
      },
      {
        name: "Git",
        logo: git_logo,
        url: "https://git.uestclug.org"
      }
    ]
  }),
  methods: {
    redirectTo: function(url) {
      window.location.href = url;
    }
  }
};
</script>
