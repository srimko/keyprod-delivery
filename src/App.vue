<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
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

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
