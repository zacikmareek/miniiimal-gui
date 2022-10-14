<template>
    <span>HUHU</span>
  </template>
  
  <script>
  export default {
    name: 'ProductsScreen',
    head() {
      return {
        title: 'Detail produktu'
      }
    },
    data () {
      return {
        product_id: null,
      }
    },
    created(){
        this.getCurrentProductId();
    },
    methods: {
        getCurrentProductId(){
            const product_id = this.$route.query.id;
            this.product_id = product_id;
        },
    }
  }
  </script>