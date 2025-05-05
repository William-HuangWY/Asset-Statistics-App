<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0);
const pingResult = ref('');

const pingBackend = async () => {
  try {
    const result = await fetch('/api/ping');
    const data = await result.json();
    pingResult.value = data.message;
  } catch (error) {
    pingResult.value = 'Error fetching ping';
    console.error('*** Error fetching ping:', error);
  }
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <button @click="pingBackend">Ping Backend</button>
      <p>{{ pingResult }}</p>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        >Vue Docs Scaling up Guide</a
      >.
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
