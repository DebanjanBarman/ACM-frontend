<template>
  <SystemBar/>
  <v-container>
    <v-card rounded variant="outlined" max-width="500">
      <v-card-title>Name: {{ name }}</v-card-title>
      <v-card-subtitle>Email: {{ email }}</v-card-subtitle>
      <v-card-text>Id: {{ id }}</v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
import SystemBar from "@/components/AppBar.vue";

let name = localStorage.getItem('name');
let id = localStorage.getItem('userId');
let email = localStorage.getItem('email');
let loggedIn = localStorage.getItem('authorized');
</script>
<style scoped>

</style>
