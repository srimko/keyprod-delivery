<template>
  <v-row>
    <v-col>
      {{currentTime}}
    </v-col>
  </v-row>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'AppBarTime',
  data () {
    return {
      currentTime: ''
    }
  },
  mounted () {
    setInterval(this.setCurrentTime, 1000)
  },
  methods: {
    setCurrentTime () {
      this.currentTime  = dayjs().format('hh:mm A')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
