<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <v-img
        alt="Keyprod Logo"
        contain
        src="./assets/logo-keyprod.png"
        width="280"
        class="mt-15"
      />

      <v-spacer></v-spacer>

      <v-btn 
        width="175"
        height="100%"
        text
        class="mr-2"
        color="#222427"
        >
        <v-icon>mdi-comment-processing-outline</v-icon>
      </v-btn>
      <v-btn 
        width="175"
        height="100%"
        text
        class="mr-2"
        color="#222427"
        >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-btn 
        width="175"
        height="100%"
        text
        class="mr-2"
        color="#222427"
        >
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>
      <AppBarProfil />
      <AppBarTime />


      <template v-slot:extension>
        <AppBarDate />
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

      <v-bottom-navigation v-model="value">
        <v-btn value="recent">
          <span>Planning</span>

          <v-icon>mdi-calendar-text</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <span>Dashboard</span>

          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Alert</span>

          <v-icon>mdi-alert</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Event</span>

          <v-icon>mdi-information</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Quality</span>

          <v-icon>mdi-check-all</v-icon>
        </v-btn>
      </v-bottom-navigation>
  </v-app>
</template>

<script>
import AppBarProfil from '@/components/AppBarProfil.vue'
import AppBarTime from '@/components/AppBarTime.vue'
import AppBarDate from '@/components/AppBarDate.vue'


export default {
  name: 'App',

  data: () => ({
    value: false
  }),
  components: {
    AppBarProfil,
    AppBarTime,
    AppBarDate
  }
};
</script>
