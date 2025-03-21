<script setup>
import Header from './components/Header.vue';
import { useRoute } from '#app';

const route = useRoute();
</script>

<template>
  <div class="app-wrapper">
    <NuxtPage />
    <Navbar />
  </div>
</template>

<style>
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --text-color: #1f2937;
  --text-secondary: #4b5563;
  --bg-color: #ffffff;
  --bg-secondary: #f3f4f6;
  --border-color: #e5e7eb;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --card-bg: #ffffff;
  --navbar-bg: rgba(255, 255, 255, 0.95);
  --news-hover: #f3f4f6;
  --news-active: #e5e7eb;
}

[data-theme="dark"] {
  --primary-color: #60a5fa;
  --primary-dark: #3b82f6;
  --text-color: #f3f4f6;
  --text-secondary: #d1d5db;
  --bg-color: #111827;
  --bg-secondary: #1f2937;
  --border-color: #374151;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --card-bg: #1f2937;
  --navbar-bg: rgba(17, 24, 39, 0.95);
  --news-hover: #2d3748;
  --news-active: #374151;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans JP', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

.page-wrapper {
  padding-top: 80px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>