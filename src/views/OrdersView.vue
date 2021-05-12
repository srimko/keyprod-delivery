<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="8" >
         <h1 class="mb-6"> <v-icon large class="mr-2">mdi-archive-arrow-down</v-icon> Orders</h1>
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="orders"
              :search="search"
            >
            <template v-slot:item.status="{item}">
              <v-chip
                :color="getColor(item.order_status)"
              >
                {{ item.order_status.label }}
              </v-chip>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
                v-if="(item.order_status.label !== 'Livré' && item.order_status.label !== 'Expédiée' && item.order_status.label !== 'Préparé')"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>

            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                More info about {{ item.name }}
              </td>
            </template>
          </v-data-table>
        </v-card>

        <OrderDialog 
          :dialog="dialog" 
          :productsFromOrder="productsFromOrder" 
          :editedItem="editedItem" 
          v-on:toggleDialog="dialog=false" 
          v-on:editItem="editItem" 
          :editedIndex="editedIndex"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import OrderDialog from '../components/OrderDialog'

  export default {
    name: 'Orders',
    components: { OrderDialog },
    data () {
      return {
        search: '',
        dialog: false,
        editedIndex: -1,
        result: '',
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        productsFromOrder: [],
        headers: [
          { text: 'ID', value: 'order_id' },
          { text: 'Customer', value: 'customer' },
          { text: 'Pack', value: 'qty_to_pack' },
          { text: 'Packed', value: 'qty_packed' },
          { text: 'Package', value: 'qty_package' },
          { text: 'Status', align: 'start', value: 'status' },
          { text: 'Actions', align: 'start', value: 'actions' },
          { text: '', value: 'data-table-expand' },
        ],
        headers2: [
          { text: 'ID', value: 'order_id' },
          { text: 'Customer', value: 'customer' },
          { text: 'Pack', value: 'qty_to_pack' },
          { text: 'Packed', value: 'qty_packed' },
          { text: 'Package', value: 'qty_package' },
          { text: '', value: 'data-table-expand' },
        ],
        ordersFiltered: []
      }
    },
    computed: {
      orders () {
        return this.$store.state.orders
      },
      products () {
        return this.$store.state.products
      }
    },
    methods: {
      getColor (status) {
        return status.color
      },
      ordersFilter (filter) {
        let orders = this.orders.filter(order => {
          if(order.order_status.label === filter) {
            return true
          }
        })
        this.ordersFiltered = orders
      },
      editItem (item) {
        this.editedIndex = this.orders.indexOf(item)
        this.editedItem = Object.assign({}, item)

        this.productsFromOrder = this.products.filter(product => {
          if(product.order_id === this.orders[this.editedIndex].order_id) {
            return true
          }
        })
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.orders.indexOf(item)
        this.$store.dispatch('deleteOrder', {
          index
        })
      },
      getProductFromOrder (item) {
        const productsFromOrder = this.products.filter(product => {
          if(product.order_id === item.order_id) {
            return true
          }
        })
        return productsFromOrder
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
