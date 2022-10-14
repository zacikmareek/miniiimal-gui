<template>
  <v-app>
	<HomeScreen />
	<Products />
  </v-app>
</template>

<script>
import HomeScreen from '../components/HomeScreen.vue';
import Products from '../components/Products.vue';
export default {
  name: 'IndexPage',
  components: {
	  HomeScreen,
    Products
  },
}
</script>