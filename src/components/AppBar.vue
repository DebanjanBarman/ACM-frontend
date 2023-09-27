<template>
  <v-app id="inspire" style="height: 5rem;width: 100%">
    <v-app-bar elevation="3">
      <router-link to="/" class="text-decoration-none"
                   style="color:indigo; margin-left: 1rem;font-size: 2rem; font-weight:300;font-family: 'Roboto Condensed Medium','sans-serif'">
        ACM Store
      </router-link>
      <!--      <div><a href="/" style="text-decoration: none;color: indigo;font-weight: bold;font-size:larger;margin-left: 1rem">ACM-->
      <!--        Store</a>-->
      <!--      </div>-->
      <v-spacer></v-spacer>
      <router-link to="/login" v-if="!loggedIn">
        <v-btn ripple variant="outlined" style="margin-right: 1rem;color: indigo">Login</v-btn>
      </router-link>

      <div class="text-center">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          location="end"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              icon="mdi-account"
              v-bind="props"
              ripple
              v-if="loggedIn"
              style="margin-right: 1rem"
              variant="outlined"
              size="small"
              color="indigo"
            ></v-btn>
          </template>

          <v-card min-width="300">
            <v-list>
              <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                :title="name"
                :subtitle="email"
              >
                <template v-slot:prepend>
                  <v-icon icon="mdi-account-outline"></v-icon>
                </template>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <router-link to="/profile" style="text-decoration: none;color: #2f2c2c">
                <v-list-item
                  value="profile"
                  color="indigo"
                >
                  <template v-slot:prepend>
                    <v-icon icon="mdi-account"></v-icon>
                  </template>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
              </router-link>
              <v-list-item value="logout" color="indigo">
                <template v-slot:prepend>
                  <v-icon icon="mdi-logout"></v-icon>
                </template>

                <v-list-item-title @click="logout">Logout</v-list-item-title>
              </v-list-item>
            </v-list>

          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
  </v-app>
</template>

<script setup>
import {ref} from "vue";

let menu = ref(false)

let name = localStorage.getItem('name');
let id = localStorage.getItem('id');
let email = localStorage.getItem('email');
let loggedIn = localStorage.getItem('authorized');

async function logout() {
  localStorage.clear();
  menu = false;
  loggedIn = false;
  window.location = "/login"
}
</script>


