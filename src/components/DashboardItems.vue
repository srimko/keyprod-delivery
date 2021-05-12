<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <Carousel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from './Carousel'

export default {
  name: 'DashboardItems',
  components: {
    Carousel
  },
  computed: {
    dashboardMenuSlide () {
      return this.$store.state.dashboardMenuSlide
    }
  }
}
</script>