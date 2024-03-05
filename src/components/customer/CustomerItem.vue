<template>
    <tr>
      <td>{{ customer.customer.lastname }}</td>
      <td>{{ customer.customer.firstname }}</td>
      <td>{{ customer.customer.orders.length }}</td>
      <td>{{ customer.customer.status }}</td>
      <td><button @click="deleteProduct">DELETE</button></td>
      <td><button @click="updateProduct">UPDATE</button></td>
    </tr>
  </template>
  
  <script>
  export default {
    name:'CustomerItem',
    props: ['customer'],
    methods: {
      deleteProduct() {
        console.log("Product deleted");
      },
      updateProduct() {
        console.log("Product updated");
      }
    }
  };
  </script>
  