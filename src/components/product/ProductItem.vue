<template>
    <tr>
      <td>{{ product.product.name }}</td>
      <td>{{ product.product.price }}</td>
      <td>{{ product.product.description }}</td>
      <td><button @click="deleteProduct">DELETE</button></td>
      <td><button @click="updateProduct">UPDATE</button></td>
    </tr>
  </template>
  
  <script>
  export default {
    props: ['product'],
    methods: {
      deleteProduct() {
        // Logic to delete the product
        console.log("Product deleted");
      },
      updateProduct() {
        // Logic to update the product
        console.log("Product updated");
      }
    }
  };
  </script>
  