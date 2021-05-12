<template>
  <v-app>
    <TopBar />

    <v-main>
      <router-view/>
    </v-main>

    <BottomBar />
  </v-app>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import BottomBar from '@/components/BottomBar.vue'


export default {
  name: 'App',

  data: () => ({
    value: false
  }),
  components: {
    TopBar,
    BottomBar
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