<template>
  <div>
    <h1>Welcome to the Lake Secret Santa Page!</h1>
    <h2 v-if="user !== null">{{user}} is logged in!</h2>
    <h2 v-else>You need to log in!</h2>
    <h3> Your list: </h3>
    <List/>
  </div>
</template>

<script setup lang="ts">
import List from "../components/List.vue";
import {getCurrentUser} from "../api/firebase_auth";

const user = getCurrentUser();
</script>
