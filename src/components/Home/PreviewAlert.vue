<template>
  <v-alert
    v-model="alert"
    border="left"
    close-text="关闭"
    colored-border
    color="warning"
    icon="mdi-alert"
    prominent
    elevation="2"
    transition="scale-transition"
    dismissible
  >
    <div class="title">检测到测试模式</div>
    此站点是测试站点，不具备任何能用的镜像功能。 <br />若需使用镜像，请前往
    <a :href="formal_mirrors_url">正式镜像</a> 站点。
  </v-alert>
</template>
<script>
export default {
  data: () => ({
    alert: false,
    formal_mirrors_url: process.env.VUE_APP_MIRROR_URL
  }),
  mounted() {
    var release_domains = /mirrors[4,6]{0,1}\.(uestc\.edu\.cn|uestc\.cn|uestclug\.org)/g;
    if (!localStorage.testenv_warned)
      this.alert = !release_domains.test(window.location.href);
  },
  watch: {
    alert(n, o) {
      if (n == false && o == true)
        if (!localStorage.testenv_warned) localStorage.testenv_warned = true;
    }
  }
};
</script>
