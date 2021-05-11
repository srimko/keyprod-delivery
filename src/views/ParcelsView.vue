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
                <th class="text-left">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(parcel, index) in parcels"
                :key="parcel.serial"
              >
                <td>{{ parcel.parcel_id }}</td>
                <td>{{ parcel.order_id }}</td>
                <td>{{ parcel.products.length }}</td>
                <td>{{ parcel.deliveryIndicator }}</td>
                <td><v-btn @click="seeMore(index)">
                  <v-icon>mdi-eye</v-icon></v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row v-if="parcelTemp !== null">
      <v-col>
        <v-card>
          <v-card-title>{{parcelTemp.parcel_id}}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <v-text-field
                  label="order_id"
                  disabled
                  v-model="parcelTemp.order_id"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  label="deliveryIndicator"
                  disabled
                  v-model="parcelTemp.deliveryIndicator"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  label="weight"
                  disabled
                  v-model="parcelTemp.weight"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          Name
                        </th>
                        <th class="text-left">
                          Serial
                        </th>
                        <th class="text-left">
                          State
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="product in parcelTemp.products"
                        :key="product.serial"
                      >
                        <td>{{ product.product_name }}</td>
                        <td>{{ product.product_serial }}</td>
                        <td>{{ product.product_state }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ParcelView',
  data () {
    return {
      parcelTemp: null,
      products: []
    }
  },
  computed: {
    parcels () {
      return this.$store.state.parcels
    },
    
  },
  methods: {
    seeMore (index) {
      this.parcelTemp = this.parcels[index]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
