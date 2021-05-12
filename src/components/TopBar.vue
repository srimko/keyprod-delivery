<template>
  <v-app-bar
    app
    color="kp-main"
    height="50"
    extension-height="18"
  >
    <router-link to="/">
      <v-img
      alt="Keyprod Logo"
      contain
      src="../assets/logo-keyprod.png"
      class="mt-12 logo"
    />
    </router-link>

    <v-spacer></v-spacer>

    <v-btn 
      width="175"
      height="100%"
      text
      color="#222427"
      class="mx-0"
      >
      <v-icon>mdi-comment-processing-outline</v-icon>
    </v-btn>
    <v-btn 
      width="175"
      height="100%"
      text
      color="#222427"
      class="mx-0"
      >
      <v-icon>mdi-cog</v-icon>
    </v-btn>
    <v-btn 
      width="175"
      height="100%"
      text
      color="#222427"
      class="mx-0"
      >
      <v-icon>mdi-help-circle</v-icon>
    </v-btn>
    <AppBarProfile />
    <AppBarTime />


    <template v-slot:extension >
      <AppBarDate />
    </template>
  </v-app-bar>
</template>

<script>
import AppBarProfile from '@/components/AppBarProfile.vue'
import AppBarTime from '@/components/AppBarTime.vue'
import AppBarDate from '@/components/AppBarDate.vue'


export default {
  name: 'App',

  data: () => ({
    value: false
  }),
  components: {
    AppBarProfile,
    AppBarTime,
    AppBarDate,
  }
};
</script>
