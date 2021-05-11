<template>
  <div>
    <p>{{currentDate}}</p>
  </div>
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

<style lang="scss">
  .v-toolbar__extension {
    justify-content: flex-end;
    p {
      font-size: 0.8em;
      margin: 0 !important;
      padding-right: 30px;
    }
  }
</style>
