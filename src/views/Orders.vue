<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Orders
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

        <v-dialog
          v-model="dialog"
          max-width="700px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">Order: {{editedItem.order_id}}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.order_id"
                      label="order_id"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.customer"
                      label="customer"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.qty_to_pack"
                      label="qty_to_pack"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.qty_packed"
                      label="qty_packed"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.qty_package"
                      label="qty_package"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <span class="headline">Product from: {{editedItem.order_id}}</span>
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
                            <th class="text-left">
                              actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="product in productsFromOrder"
                            :key="product.serial"
                          >
                            <td>{{ product.product_name }}</td>
                            <td>{{ product.product_serial }}</td>
                            <td>{{ product.product_state }}</td>
                            <td>
                              <v-btn 
                                @click="addToParcel(product)"
                                small
                                v-if="product.product_state"
                              >Add to parcel</v-btn>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <h3>
                      <v-icon>mdi-package-variant</v-icon>
                      Parcel <v-btn @click="scanCode = !scanCode">{{scanCode ? 'Close' : 'Scan'}}</v-btn>
                    </h3>
                    <ul>
                      <li v-for="item in tempParcel" :key="item.product_serial">{{item.product_serial}} - {{item.weight}}Kg</li>
                    </ul>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-alert
                      type="warning"
                      dense
                      dismissible
                      :value=this.alert
                    >
                      Le produit scanner n'est pas lié à la commande {{editedItem.order_id}}.
                    </v-alert>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <qrcode-stream @decode="onDecode" @init="onInit" v-if="this.scanCode"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Orders',
    data () {
      return {
        search: '',
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
        dialog: false,
        scanCode: false,
        alert: false,
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
        tempParcel: [],
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
      close () {
        this.scanCode = false
        this.dialog = false
        this.parcel = false
      },
      save () {
        this.close()
      },
      onDecode (serialCode) {
        this.result = serialCode
        const isConform = this.isConform(serialCode)
        if(isConform) {
          const code = serialCode.split('.')
          const serialCodeSplited = code[0].split('_')

          console.log({code,serialCodeSplited})
          if (this.orders[this.editedIndex].order_id === code[1]) {
            this.products.push({
              order_id: this.orders[this.editedIndex].order_id,
              product_state: false,
              product_name: serialCodeSplited[0],
              product_serial: code[0],
              product_package: 0,
            })
            this.orders[this.editedIndex].qty_to_pack++
          } else {
            console.log('EROOR')
            this.alert = true
          }
        }
        this.editItem(this.orders[this.editedIndex])
        // this.dialog = false
      },
      getProductFromOrder (item) {
        console.log(item)
        const productsFromOrder = this.products.filter(product => {
          if(product.order_id === item.order_id) {
            return true
          }
        })
        return productsFromOrder
      },

      addToParcel (product) {
        let isExist = false
        this.tempParcel.map(item => {
          if(item.product_serial === product.product_serial) {
            isExist = true
          }
        })
        if (!isExist)
          this.tempParcel.push(product)
      },

      isConform (serial) {
        let serialCode = serial.split('.')[0]
        serialCode = serialCode.split('_')
        console.log(serialCode)
        if(serialCode[0] !== 'KeyNetic' && serialCode[0] !== 'KeyVibe') {
          console.log('#1')
          return false
        } else if (serialCode[1] === undefined) {
          console.log('#2')
          return false
        } else if (serialCode[2].split('').length !== 6) {
          console.log('#3', serialCode[2].split(''))
          return false
        }
        return true
      },

      async onInit (promise) {
        try {
          await promise
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            this.error = "ERROR: you need to grant camera access permisson"
          } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: no camera on this device"
          } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: secure context required (HTTPS, localhost)"
          } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: is the camera already in use?"
          } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: installed cameras are not suitable"
          } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Stream API is not supported in this browser"
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
