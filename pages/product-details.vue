<template>
    <v-layout align-center justify-center fill-height>
      <v-flex xs12 sm12 md12 xl12>
        <v-row class="mt-12">
            <v-col xs="12" sm="12" md="6" xl="6" align="center">
                Photo
            </v-col>
            <v-col xs="12" sm="12" md="6" xl="6" align="center">
                <div>{{product_data.name}}</div>
                <div>{{product_data.price}}€</div>
                <v-select :items="colors" item-text="color" item-value="color" placeholder="Farba"></v-select>
                <v-select :items="sizes" item-text="size" item-value="size" placeholder="Veľkosť"></v-select>
                <v-row>
                    <v-btn icon><v-icon>mdi-minus</v-icon></v-btn>
                    <v-text-field label="Množstvo"></v-text-field>
                    <v-btn icon><v-icon>mdi-plus</v-icon></v-btn>
                </v-row>
                <v-select :items="applications" item-text="application" item-value="application" placeholder="Aplikácia"></v-select>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" class="blue white--text" block>Pridať do košíka<v-icon>mdi-cart</v-icon></v-btn>
                </template>
            </v-col>
        </v-row>
      </v-flex>

      <template>
        <v-row justify="center">
            <v-dialog
            v-model="dialog"
            persistent
            width="unset"
            >
            <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" class="black white--text" block>Pridať do košíka<v-icon class="ml-4">mdi-cart</v-icon></v-btn>
                </template>
            <v-card>
                <v-card-title class="black white--text justify-center text-h5">
                Produkt {{product_data.name}} bol úspešne pridaný do košíka
                </v-card-title>
                <v-card-text class="text-center text-h6 mt-8">Prajete si pokračovať v nákupe alebo prejsť do košíka?</v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="text-h5 pb-4">
                <v-btn
                    class="white black--text mt-2"
                    @click="dialog = false"
                >
                    Pokračovať v nákupe
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    class="black white--text mt-2"
                    to="/cart"
                >
                    Do košíka <v-icon class="ml-4">mdi-cart</v-icon>
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
        </template>
    </v-layout>
  </template>
  
  <script>
  import applications_service from '../services/applications_service';
  import colors_service from '../services/colors_service';
  import products_service from '../services/products_service';
  import product_images_service from '../services/product_images_service';
  import sizes_service from '../services/sizes_service';
  
  
  export default {
    name: "ProductDetails",
    mounted(){
        this.getProductId();
        this.getAllProductsImages();
        this.getAllProductsColors();
        this.getAllProductsSizes();
        this.getAllProductsApplications();
        this.getActualProduct();
    },
    data() {
      return {
        dialog: false,
        product: [],
        colors: [],
        sizes: [],
        applications: [],
        images: [],
        product_id: null,
        product_data: {},
      };
    },
    methods: {
        getProductId(){
            const product_id = this.$route.query.id;
            this.product_id = product_id;
        },
        async getActualProduct(){
            await products_service.getProductByID(this.product_id)
                .then((response) => {
                    this.product_data = response.data.products
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        async getAllProductsImages(){
            await product_images_service.index(this.product_id)
            .then((response) => {
                for(let i = 0; i < response.data.length; i++){
                    this.images.push(response.data[i]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        },
        async getAllProductsColors(){
            await colors_service.index(this.product_id)
            .then((response) => {
                for(let i = 0; i < response.data.length; i++){
                this.colors.push(response.data[i]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        },
        async getAllProductsSizes(){
            await sizes_service.index(this.product_id)
            .then((response) => {
                for(let i = 0; i < response.data.length; i++){
                this.sizes.push(response.data[i]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        },
        async getAllProductsApplications(){
            await applications_service.index(this.product_id)
            .then((response) => {
                for(let i = 0; i < response.data.length; i++){
                this.applications.push(response.data[i]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
  }
  
  </script>