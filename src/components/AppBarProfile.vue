<template>
  <div class="profile mx-1">
    <v-col class="content-normal">
      <v-avatar
        height="40"
        width="40"
      >
        <img
          src="../assets/avatar.png"
          alt="John Doe"
        >
      </v-avatar>
    </v-col>
    <v-col
      class="col d-flex flex-column profile-info"
    >
      <p class="mb-0">Welcome</p>
      <p class="mb-0">John DOE</p>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'AppBarProfile'
}
</script>

<style lang="scss" scoped>
  .profile {
    height: 100%;
    display: flex;
    padding: 0 85px 0 55px;
    background-color: #222427;
  }

  .content-normal {
    max-width: max-content;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .profile-info {
    justify-content: center;
    p:nth-child(1) {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
</style>
