<template>
  <div>
    <form @submit.prevent="loginUser()">
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
       Login
    </q-btn>   
  </form> 
  </div>
</template>


<script setup>
import {useRouter} from 'vue-router';
import { ref } from 'vue';
import {login} from '../api/firebase_auth';

const router = useRouter();
const email = ref("");
const password = ref("");

function loginUser(){
  const res = login(email.value, password.value)
  console.log(res);
  if (res) {
    router.push('Home');
  }else{
    console.log("error logging in.");
  }
}

</script>