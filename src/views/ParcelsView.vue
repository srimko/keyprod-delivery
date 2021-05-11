<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="mb-6"> <v-icon large class="mr-2">mdi-package-variant</v-icon>Parcel </h1>

        <v-simple-table>
          <template v-slot:default >
            <thead>
              <tr>
                <th class="text-left">
                  parcel_id
                </th>
                <th class="text-left">
                  order_id
                </th>
                <th class="text-left">
                  Quantity Products
                </th>
                <th class="text-left">
                  deliveryIndicator
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="parcel in parcels"
                :key="parcel.serial"
              >
                <td>{{ parcel.parcel_id }}</td>
                <td>{{ parcel.order_id }}</td>
                <td>{{ parcel.products.length }}</td>
                <td>{{ parcel.deliveryIndicator }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ParcelView',
  computed: {
    parcels () {
      return this.$store.state.parcels
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
