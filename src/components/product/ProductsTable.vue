<template>
     <v-container >
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field v-model="keyword" label="Keyword" outlined></v-text-field>
      </v-col>
      <v-col cols="6" md="4">
        <v-text-field
          v-model="minPrice"
          label="Min Price"
          outlined
          type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="6" md="4">
        <v-text-field
          v-model="maxPrice"
          label="Max Price"
          outlined
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
      <v-table >
        <thead>
          <tr>
            <th class="text-left" >Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Description</th>
            <th class="text-left text-center" colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <ProductItem 
          v-for="product in filteredItems" 
          :key="product.id" 
          :product={product} />

        </tbody>
      </v-table>
  </v-container>
</template>

<script>

import ProductItem from './ProductItem.vue'
import ProductsFilter from './ProductsFilter.vue';
export default {
  name: "ProductsTable",
  components:{ProductItem,ProductsFilter},
  data() {
    return {
      keyword: "",
      minPrice: null,
      maxPrice: null,
      items: [
        {
          id: 1,
          name: "Item 1",
          price: 10,
          description: "Description of Item 1",
        },
        {
          id: 2,
          name: "Item 2",
          price: 20,
          description: "Description of Item 2",
        },
        {
          id: 3,
          name: "Item 3",
          price: 30,
          description: "Description of Item 3",
        },
        {
          id: 1,
          name: "Item 1",
          price: 10,
          description: "Description of Item 1",
        },
        {
          id: 2,
          name: "Item 2",
          price: 20,
          description: "Description of Item 2",
        },
        {
          id: 3,
          name: "Item 3",
          price: 30,
          description: "Description of Item 3",
        },
        
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        const keywordFilter =
          !this.keyword ||
          item.name.toLowerCase().includes(this.keyword.toLowerCase());
        const minPriceFilter =
          !this.minPrice || item.price >= parseFloat(this.minPrice);
        const maxPriceFilter =
          !this.maxPrice || item.price <= parseFloat(this.maxPrice);
        return keywordFilter && minPriceFilter && maxPriceFilter;
      });
    },
  },

};
</script>
