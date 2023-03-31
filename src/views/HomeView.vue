<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/config/axios/index.js'

const productList = ref([])

onMounted(() => {
  getProducts()
})

function getProducts() {
  axios
    .get('/')
    .then((res) => (productList.value = res.data))
    .catch((err) => alert(err.response.data))
}

document.getElementById('delete-product-btn').addEventListener('click', () => {
  const arr = []
  const list = document.querySelectorAll('.delete-checkbox')
  list.forEach((el) => el.checked && arr.push(el.value))

  /**
   * since 000webhost free hosting does not allow
   * any other HTTP method except GET, POST, and HEAD,
   * we use GET method here, instead of DELETE.
   */
  arr.length &&
    axios
      .get(`/product-delete.php?ids=${arr}`)
      .then(() => getProducts())
      .catch((err) => alert(err.response.data))
})
</script>

<template>
  <main>
    <ul>
      <li v-for="item in productList" :key="item.id">
        <input type="checkbox" class="delete-checkbox" name="product" :value="item.id" />
        <p>{{ item.sku }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.price }} $</p>
        <p v-if="item.productType.toLowerCase() === 'book'">Weight: {{ item.weight }} KG</p>
        <p v-else-if="item.productType.toLowerCase() === 'dvd'">Size: {{ item.size }} MB</p>
        <p v-else-if="item.productType.toLowerCase() === 'furniture'">
          Dimensions: {{ item.height }}x{{ item.width }}x{{ item.length }}
        </p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  margin-top: 2rem;
  padding-bottom: 7rem;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
}

li {
  position: relative;
  border: 2px solid;
  padding: 3rem;
  text-align: center;
}

.delete-checkbox {
  position: absolute;
  top: 10%;
  left: 10%;
  cursor: pointer;
}
</style>
