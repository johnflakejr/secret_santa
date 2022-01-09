<template>
  <div>
    <form @submit.prevent="register(email, password)">     
    <h2>Login</h2>     
    <q-input       
      type="email"       
      placeholder="Email address..."       
      v-model="email"     
    />     
    <q-input       
      type="password"       
      placeholder="password..."       
      v-model="password"     
    />     
    <q-btn type="submit">
       Register
    </q-btn>   
  </form> 
  </div>
</template>


<script setup>
import { ref } from 'vue';
import {register} from '../api/firebase_auth';

const email = ref("");
const password = ref("");


</script>