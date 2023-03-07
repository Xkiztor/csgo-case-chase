<script setup>
import { onClickOutside, useScroll, useWindowSize } from '@vueuse/core';
import { computed, ref, watch, watchEffect } from 'vue';
// import Case from './components/case.vue';



</script>

<template>
  <div class="page">
    <nav>
      <div class="left">
        <router-link to="/">Home</router-link>
        <router-link to="/inventory">Inventory</router-link>
        <router-link to="/deposit">Deposit</router-link>
        <router-link to="/coinflip">Coinflip</router-link>
      </div>
      <div class="right">

        <button>Log in</button>
      </div>
    </nav>
    <router-view></router-view>

  </div>
</template>

<style>
* {
  transition: all 100ms;
}

.page {
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: repeat(auto-fill, 15rem); */
  /* grid-auto-flow: column; */
  place-items: center;
  display: grid;
  grid-template-rows: min-content 1fr;
  /* display: flex; */
  /* flex-direction: column; */
  gap: 1rem;
  width: 100vw;
  min-height: 100vh;
}

.page section {
  width: 100%;
}

nav {
  background: rgb(30, 30, 30);
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  transition: all 500ms;
}

nav>div {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.router-link-active {
  border-bottom: 3px solid gray;
}

nav a {
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
}

button,
input,
select {
  background: rgb(51, 51, 51);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0.5rem;
}

input {
  background: rgb(51, 51, 51);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0.5rem;
}

button:hover {
  background: rgb(59, 59, 59);
}

h1 {
  font-size: 2rem;
  text-align: center;
}
</style>
