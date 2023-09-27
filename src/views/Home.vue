<template>
  <SystemBar/>
  <v-container>
    <v-row>
      <v-col
        v-for="product in productArray"
        :key="product.id"
        cols="16"
        xs="16"
        sm="8"
        md="6"
        lg="4"
        xl="4"
        xxl="3"
      >
        <v-sheet class="ma-2 pa-2bg-indigo">
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="300"
            variant="flat"
            elevation="5"
            rounded
          >
            <v-img
              cover
              height="250"
              :src="product.image"
            ></v-img>

            <v-card-item>
              <router-link :to="`product/${product.id}`" style="text-decoration: none;color: #232121">
                <v-card-title>{{ product.title }}</v-card-title>
              </router-link>

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
                  {{ product.rating.rate }}({{ product.rating.count }})
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

              <!--              <div>{{ product.description }}-->
              <!--              </div>-->
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
import SystemBar from "@/components/AppBar.vue";
import {onMounted, ref} from "vue";
import axios from 'axios';
import apiRoute from '../../api/index'

let productArray = ref([])

async function getProducts() {
  const response = await axios.get(apiRoute.getProducts);
  productArray.value = response.data.products;
}

onMounted(() => {
  getProducts();
  console.log(productArray.value)

})

</script>
