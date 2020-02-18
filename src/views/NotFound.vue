<template>
  <div>
    <MainAppBar />
    <v-content>
      <v-container fluid>
        <v-card>
          <v-card-text>
            <v-layout>
              <v-row align="center" justify="center">
                <v-btn icon large>
                  <v-icon large>mdi-selection-off</v-icon> </v-btn
                ><span>您来到了没有文件的荒原</span>
              </v-row>
            </v-layout>
          </v-card-text>
          <v-divider />
          <v-footer>
            <v-col class="text-center">
              UESTC Mirrors &copy; {{ new Date().getFullYear() }}
            </v-col>
          </v-footer>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import MainAppBar from "@/components/layout/MainAppBar";
export default {
  components: {
    MainAppBar
  }
};
</script>
