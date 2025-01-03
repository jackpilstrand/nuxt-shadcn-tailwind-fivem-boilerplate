<template>
  <transition name="fade">
    <div v-if="store.windowShow">
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
          <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">{{ store.Title }}</h1>
          <p class="text-center text-gray-600 mb-6">Click the button below to interact.</p>
          <button 
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            @click="handleClick"
          >
            Click me!
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/stores/store'

const store = useAppStore()

const handleClick = () => {
  store.close();
}

onMounted(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      store.close();
    }
  });

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (store[data.type]) {
      store[data.type](data.data);
    }
  });
});
</script>

<style scoped>
/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
