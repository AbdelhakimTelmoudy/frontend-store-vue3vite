<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field v-model="keyword" label="Keyword" outlined ></v-text-field>
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
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Lastname</th>
          <th class="text-left">firstname</th>
          <th class="text-left">orders</th>
          <th class="text-left">status</th>
          <th class="text-left text-center" colspan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <CustomerItem
          v-for="customer in filteredItems"
          :key="customer.id"
          :customer="{ customer }"
        />
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import CustomerItem from "./CustomerItem.vue";
import CustomersFilter from "./CustomersFilter.vue";
export default {
  name: "CustomersTable",
  components: { CustomerItem, CustomersFilter },
  data() {
    return {
      keyword: "",
      minOrders: null,
      maxOrders: null,
      customersfilter:[],
      customers: [
        {
          id: 1,
          lastname: "Doe",
          firstname: "John",
          orders: ["order1", "order2"],
          status: "active",
        },
        {
          id: 2,
          lastname: "Smith",
          firstname: "Jane",
          orders: ["order3"],
          status: "inactive",
        },
        {
          id: 3,
          lastname: "Johnson",
          firstname: "Bob",
          orders: ["order4", "order5", "order6"],
          status: "active",
        },
        {
          id: 1,
          lastname: "Doe",
          firstname: "John",
          orders: ["order1", "order2"],
          status: "active",
        },
        {
          id: 2,
          lastname: "Smith",
          firstname: "Jane",
          orders: ["order3"],
          status: "inactive",
        },
        {
          id: 3,
          lastname: "Johnson",
          firstname: "Bob",
          orders: ["order4", "order5", "order6"],
          status: "active",
        },
        {
          id: 1,
          lastname: "Doe",
          firstname: "John",
          orders: ["order1", "order2"],
          status: "active",
        },
        {
          id: 2,
          lastname: "Smith",
          firstname: "Jane",
          orders: ["order3"],
          status: "inactive",
        },
        {
          id: 3,
          lastname: "Johnson",
          firstname: "Bob",
          orders: ["order4", "order5", "order6"],
          status: "active",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
  if (this.keyword === "") {
    return this.customers;
  } else {
    const filtered = [];
    const keywordLowerCase = this.keyword.toLowerCase();
    this.customers.forEach((item) => {
      const lastnameLowerCase = item.lastname.toLowerCase();
      if (!keywordLowerCase || lastnameLowerCase.includes(keywordLowerCase)) {
        if (!filtered.some((filteredItem) => filteredItem.id === item.id)) {
          filtered.push(item);
        }
      }
    });
    return filtered;
  }
},

  },
};
</script>
