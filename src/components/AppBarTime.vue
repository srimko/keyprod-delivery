<template>
  <div class="time">
    {{currentTime}}
  </div>
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
  .time {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 60px;
    background-color: #222427;
  }
</style>
