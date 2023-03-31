<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form, Field, ErrorMessage } from 'vee-validate'
import axios from '@/config/axios/index.js'
import '@/config/vee-validate/rules.js'
import '@/config/vee-validate/messages.js'

const productType = ref('DVD')
const requestErrors = ref([])
const router = useRouter()

function onSubmit() {
  const form = document.getElementById('product_form')
  const formData = new FormData(form)

  axios
    .post('/product-create.php', formData)
    .then(() => (form.reset(), router.push({ name: 'home' })))
    .catch(
      (err) => (
        (requestErrors.value = err.response.data),
        setTimeout(() => {
          requestErrors.value = []
        }, 5000)
      )
    )
}
</script>

<template>
  <main>
    <Form id="product_form" @submit="onSubmit">
      <div>
        <label for="sku">SKU</label>
        <Field type="text" name="sku" id="sku" rules="required" />
        <ErrorMessage class="error-msg" name="sku" />
      </div>

      <div>
        <label for="name">Name</label>
        <Field type="text" name="name" id="name" rules="required" />
        <ErrorMessage class="error-msg" name="name" />
      </div>

      <div>
        <label for="price">Price ($)</label>
        <Field
          type="number"
          name="price"
          id="price"
          step=".01"
          rules="required|int_decimal|min_value:0"
        />
        <ErrorMessage class="error-msg" name="price" />
      </div>

      <div>
        <label for="productType">Type Switcher</label>
        <Field as="select" v-model="productType" name="productType" id="productType">
          <option value="DVD">DVD</option>
          <option value="Book">Book</option>
          <option value="Furniture">Furniture</option>
        </Field>
      </div>

      <div v-if="productType === 'DVD'">
        <label for="size">Size (MB)</label>
        <Field type="number" name="size" id="size" rules="required|integer|min_value:0" />
        <ErrorMessage class="error-msg" name="size" />
        <p>Please, provide size</p>
      </div>

      <div v-else-if="productType === 'Book'">
        <label for="weight">Weight (KG)</label>
        <Field type="number" name="weight" id="weight" rules="required|integer|min_value:0" />
        <ErrorMessage class="error-msg" name="weight" />
        <p>Please, provide weight</p>
      </div>

      <div id="dimensions" v-else-if="productType === 'Furniture'">
        <div>
          <label for="height">Height (CM)</label>
          <Field type="number" name="height" id="height" rules="required|integer|min_value:0" />
          <ErrorMessage class="error-msg" name="height" />
        </div>

        <div>
          <label for="width">Width (CM)</label>
          <Field type="number" name="width" id="width" rules="required|integer|min_value:0" />
          <ErrorMessage class="error-msg" name="width" />
        </div>

        <div>
          <label for="length">Length (CM)</label>
          <Field type="number" name="length" id="length" rules="required|integer|min_value:0" />
          <ErrorMessage class="error-msg" name="length" />
          <p>Please, provide dimensions</p>
        </div>
      </div>
    </Form>

    <ol v-if="requestErrors.length">
      <li v-for="(item, index) in requestErrors" :key="index" class="request-error">
        {{ item }}
      </li>
    </ol>
  </main>
</template>

<style scoped>
main,
#product_form,
#dimensions {
  display: flex;
}

main {
  margin-top: 2rem;
  padding-bottom: 7rem;
  flex-wrap: wrap;
  gap: 0 7rem;
}

#product_form,
#dimensions {
  flex-direction: column;
}

#product_form div {
  margin-bottom: 1.5rem;
}

#product_form p {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: gray;
}

#product_form label {
  display: inline-block;
  width: 8rem;
}

.request-error,
.error-msg {
  color: red;
}

.request-error {
  margin-bottom: 0.8rem;
}

.error-msg {
  margin-left: 1rem;
}
</style>
