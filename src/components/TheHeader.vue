<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header v-if="route.name === 'home'">
    <h1>Product List</h1>

    <ul>
      <li>
        <router-link :to="{ name: 'product.add' }">ADD</router-link>
      </li>
      <li>
        <button id="delete-product-btn">MASS DELETE</button>
      </li>
    </ul>
  </header>

  <header v-else-if="route.name === 'product.add'">
    <h1>Product Add</h1>

    <ul>
      <li>
        <button form="product_form">Save</button>
      </li>
      <li>
        <router-link :to="{ name: 'home' }">Cancel</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header,
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  padding: 2rem 0 0.5rem;
  border-bottom: 3px solid;
}

ul {
  list-style: none;
  gap: 1.5rem;
}

a,
button {
  padding: 0.5rem 1rem;
  border: 2px solid;
  font-size: inherit;
  background: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
