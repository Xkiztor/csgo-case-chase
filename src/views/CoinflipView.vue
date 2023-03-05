<script setup lang='ts'>
import { ref } from 'vue';


const chosenSide = ref('')
const winnerSide = ref('')
const youWon = ref(false)

const flip = () => {
  let number = Math.random()
  console.log(number);
  if (number > 0.5) {
    winnerSide.value = 'ct'
    if (winnerSide.value === chosenSide.value) {
      youWon.value = true
    }
  } else {
    winnerSide.value = 't'
  }
}
</script>


<template>
  <div class="coinflip">
    <!-- <h1>Coinflip</h1> -->

    <div v-if="!chosenSide">
      <h1>Chose side</h1>
      <div class="side-choser">
        <button @click="chosenSide = 'ct'">
          <img src="../assets/ct.png" alt="">
        </button>
        <button @click="chosenSide = 't'">
          <img src="../assets/t.png" alt="">
        </button>
      </div>
    </div>
    <div v-else>
      <h1>{{ chosenSide === 'ct' ? 'Counter Terrorrist' : 'Terrorrist' }}</h1>
      <button @click="flip()">Flip</button>
      <div v-if="winnerSide">
        <p>{{ winnerSide === chosenSide ? 'You Won!' : 'You lost' }}</p>
        <button @click="chosenSide = '', winnerSide = '', youWon = false">Play agian</button>
      </div>
    </div>
  </div>
</template>


<style>
.coinflip {}

.coinflip>div {
  display: grid;
  place-items: center;
}

.side-choser {}

.side-choser button {
  border-radius: 1000rem;
}

.side-choser button:hover {
  scale: 105%;
}
</style>