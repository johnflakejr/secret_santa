<template>
  <q-bar>
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </q-bar>
  <router-view/>
</template>

<style lang="scss">

#nav {
  padding: 50px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
