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
  <div>
    <h1>Coinflip</h1>

    <div v-if="!chosenSide">
      <h1>Chose side</h1>
      <button @click="chosenSide = 'ct'">CT</button>
      <button @click="chosenSide = 't'">T</button>
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


<style></style>