<template>
    <nav class="navbar navbar-expand-sm bg-light">
    
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" >Products </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/customers"  class="nav-link" href="#">Customers</router-link>
          </li>
        </ul>
      </div>
    
    </nav>
</template>

<script>
export default {
    name: "navbar-component",
    data(){
        return{
            msg:"navbar !!!!!!"
        }
    }
}
</script>

<style>

</style>