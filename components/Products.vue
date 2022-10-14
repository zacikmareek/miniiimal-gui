<template>
  <v-layout align-center justify-center fill-height pa-4>
    <v-flex xs12 sm3 md3>
    <v-row>
      <v-col align="center">
        <section v-for="product in products" :key="product.id">
            <v-card @click="showDetails(product)" max-width="480">
                <v-card-title class="justify-center">{{product.name}}</v-card-title>
                <section v-for="image in images" :key="image.id">
                    <v-img :src="`api/v1/${image.fileName}`" />
                </section>
            </v-card>
        </section>
      </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import applications_service from '../services/applications_service';
import colors_service from '../services/colors_service';
import products_service from '../services/products_service';
import product_images_service from '../services/product_images_service';
import sizes_service from '../services/sizes_service';
import { mapGetters } from 'vuex';

export default {
  name: "Products",
  mounted(){
    this.getAllProducts();
    this.getAllProductsColors();
    this.getAllProductsSizes();
    this.getAllProductsApplications();
    this.getAllProductsImages();
  },
  data() {
    return {
      products: [],
      colors: [],
      sizes: [],
      applications: [],
      images: [],
    };
  },
  computed: {
    ...mapGetters(['cart_content']),
  },
  methods: {
    showDetails(product){
      this.$router.push(`/product-details/?id=${product.id}`);
    },
    async getAllProducts(){
      await products_service.index()
      .then((response) => {
          for(let i = 0; i < response.data.products.length; i++){
            this.products.push(response.data.products[i]);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
    async getAllProductsImages(){
      await product_images_service.index(1)
        .then((response) => {
          const data = response.data;
          const images = [];
          for(const id in data){
            images.push({
              id: data[id].id,
              fileName: data[id].fileName,
              mimeType: data[id].mimeType,
              productId: data[id].productId,
              path: data[id].path
            });
          }
          this.images = images[0];
        })
        .catch((error) => {
          console.warn('error', error);
        });
    },
    async getAllProductsColors(){
      await colors_service.index(1)
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
      await sizes_service.index(1)
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
      await applications_service.index(1)
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