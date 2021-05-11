<template>
  <v-app>
    <v-app-bar
      app
      color="kp-main"
      height="50"
      extension-height="18"
    >
      <v-img
        alt="Keyprod Logo"
        contain
        src="./assets/logo-keyprod.png"
        class="mt-12 logo"
      />

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


      <template 
        v-slot:extension
      >
        <AppBarDate />
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-bottom-navigation 
      v-model="value"
      height="60"
    >
      <v-btn 
        value="dashboard"
        width="175"
        link
        href="/"
      >
        <span>Dashboard</span>

        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <v-btn 
        value="alert"
        width="175"
        link
        href="/orders"
      >
        <span>Order</span>

        <v-icon>mdi-archive-arrow-down</v-icon>
      </v-btn>

      <v-btn 
        value="planning"
        width="175"
        link
        href="/products"
      >
        <span>Product</span>

        <v-icon>mdi-view-list</v-icon>
      </v-btn>

      <v-btn 
        value="event"
        width="175"
        link
        href="/parcels"
      >
        <span>Parcel</span>

        <v-icon>mdi-package-variant</v-icon>
      </v-btn>

      <v-btn 
        value="quality"
        width="175"
      >
        <span>Quality</span>

        <v-icon>mdi-check-all</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
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
    AppBarDate
  }
};
</script>


<style lang="scss">
  .v-main {
    background-color: #343A40;
  }

  .logo {
    max-width: 280px !important;
  }

  .v-app-bar {
    color: #D5D6D7 !important;
  }

  .v-toolbar__extension {
    background-color: #3C4348;
    color: #D5D6D7 !important;
  }

  .v-toolbar__content {
    z-index: 50 !important;
    padding: 0 16px !important;
    .v-btn {
      padding: 0 3px !important;
      .v-btn__content {
        height: 100%;
        background-color: #222427;
        color: #D3D3D4;
      }
    }
  }

  .v-bottom-navigation {
    background-color: #23282C !important;
    .v-btn {
      padding: 0 3px !important;
      .v-btn__content {
        height: 100%;
        background-color: #2B2F35;
        color: #D3D3D4;
      }
    }
  }
</style>