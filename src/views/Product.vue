<template>
  <SystemBar/>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel class="border-0">
          <v-carousel-item
            :src="product.image"
            cover="true"
          ></v-carousel-item>

        </v-carousel>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="100%"
          height="100%"
          flat
        >
          <v-card-item>
            <v-card-title>{{ product.title }}</v-card-title>

            <v-card-subtitle style="color: black;font-weight: bold" class="mb-2 mt-2">
              {{ product.price }} $
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :model-value="product.rating.rate"
                color="amber"
                density="compact"
                half-increments
                readonly="true"
                size="small"
              ></v-rating>

              <div class="text-grey ms-4">
                {{ product.rating.rate }} ({{ product.rating.count }} reviews)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-chip
                class="mt-2"
                color="indigo"
                text-color="white"
                variant="outlined"
              >
                {{ product.category }}
              </v-chip>

            </div>

            <div class="mt-10 mb-10">{{ product.description }}</div>
          </v-card-text>
          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-actions>
            <v-btn
              variant="flat"
              @click="purchase"
              style="width: 200px;"
              size="large"
              color="indigo"
            >
              Buy Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
<script setup>

import SystemBar from "@/components/AppBar.vue";
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
import apiRoute from "../../api";

const route = useRoute()
const router = useRouter()

const id = route.params.id;

let product = ref({
  "rating": {
    "rate": 0, "count": 0
  }, "title": "", "image": "", "category": "", "description": "", "price": 0, "id": "0"
})

async function getProduct() {
  const response = await axios.get(`${apiRoute.getProducts}/${id}`);
  product.value = response.data.product;
}

onMounted(() => {
  getProduct();
})

const purchase = () => {

}
</script>

<style scoped>

</style>
