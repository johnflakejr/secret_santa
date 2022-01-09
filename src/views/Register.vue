<template>
  <div>
    <form @submit.prevent="registerNewUser()">
    <h2>Register</h2>     
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
import {useRouter} from 'vue-router';
import { ref } from 'vue';
import {register} from '../api/firebase_auth';

const router = useRouter();
const email = ref("");
const password = ref("");

function registerNewUser(){
  console.log("Registering " + email.value + ", " + password.value);
  const res = register(email.value, password.value)
  console.log(res);
  if (res) {
    router.push('Home');
  }else{
    console.log("error registering user.");
  }
}

</script>