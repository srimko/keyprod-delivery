<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <h1 class="mb-6"> <v-icon large class="mr-2">mdi-view-list</v-icon>Order: {{order.order_id}} </h1>

        <v-card>
          <v-card-title>
            {{order.customer}}
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>order_id</th>
                    <th>customer</th>
                    <th>qty_to_pack</th>
                    <th>qty_packed</th>
                    <th>qty_package</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{order.order_id}}</td>
                    <td>{{order.customer}}</td>
                    <td>{{order.qty_to_pack}}</td>
                    <td>{{order.qty_packed}}</td>
                    <td>{{order.qty_package}}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'OrderView',
  computed: {
    order () {
      return this.$store.getters.getOrderById(this.$route.params.id)
    },
    products () {
      return this.$store.getters.getProductsFromOrder(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
