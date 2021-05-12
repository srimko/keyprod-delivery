<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <h1 class="mb-6"> <v-icon large class="mr-2">mdi-view-list</v-icon>Product: {{product.product_name}} </h1>

        <v-card>
          <v-card-title> 
            {{product.product_serial}} 
            <v-chip 
              class="ml-4"
              :color="product.product_state ? 'green' :'red'"
            >
              {{product.product_state ? 'OK' :'Waiting...'}}
            </v-chip>
          </v-card-title>

          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>product_name</th>
                    <th>product_serial</th>
                    <th>product_package</th>
                    <th>weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{product.product_name}}</td>
                    <td>{{product.product_serial}}</td>
                    <td>{{product.product_package}}</td>
                    <td>{{product.weight}}g</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            See in <a :href="orderLink">{{order.order_id}}</a>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductsView',
  computed: {
    product () {
      const productSerial = this.$route.params.id
      return this.$store.getters.getProductById(productSerial)
    },
    order () {
      return this.$store.getters.getOrderById(this.product.order_id)
    },
    orderLink () {
      return `/order/${this.product.order_id}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
