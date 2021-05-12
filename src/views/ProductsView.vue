<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="8">
        <h1 class="mb-6"> <v-icon large class="mr-2">mdi-view-list</v-icon>Products </h1>

        <v-simple-table>
          <template v-slot:default >
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
                <th class="text-left">
                  Order id
                </th>
                <th>weight</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="product in products"
                :key="product.serial"
              >
                <td>{{ product.product_name }}</td>
                <td>
                  <a :href="productLink(product.product_serial)">{{product.product_serial}}</a></td>
                <td>{{ product.product_state }}</td>
                <td>{{ product.order_id }}</td>
                <td>{{product.weight}}g</td>
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
  name: 'ProductsView',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    productLink (serial) {
      return `/product/${serial}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
