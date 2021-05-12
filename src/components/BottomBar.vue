<template>
  <v-bottom-navigation 
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
    </v-bottom-navigation>
</template>