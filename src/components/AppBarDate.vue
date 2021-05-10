<template>
  <v-row>
    <v-col class="d-flex justify-end">
      {{currentDate}}
    </v-col>
  </v-row>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'AppBarTime',
  computed: {
    currentDate () {
      return dayjs().format('ddd MM/DD/YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
