<template>
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo-container">
            <NuxtLink to="/" class="logo-link">
              <h2>アクアフロニックス株式会社</h2>
            </NuxtLink>
          </div>
          <nav class="nav-menu">    
            <ul class="nav-links">
              <li v-for="(label, key) in currentTranslations" :key="key">
                <NuxtLink
                  :to="getPageUrl(key)"
                  class="nav-link"
                  :class="{ 'japanese': language === 'ja' }"
                >
                  {{ label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const language = ref('ja');
  const translations = {
    ja: {
      home: 'トップページ',
      about: '会社案内',
      philosophy: '社是',
      visit: '見学サービス',
    },
    en: {
      home: 'Home',
      about: 'About Us',
      philosophy: 'Message',
      visit: 'Visit Service',
    },
    mn: {
      home: 'Нүүр хуудас',
      about: 'Бидний тухай',
      philosophy: 'Мэндчилгээ',
      visit: 'Үзлэл',
    },
  };
  
  const currentTranslations = computed(() => translations[language.value]);
  
  const getPageUrl = (key) => {
    const urls = {
      home: '/',
      about: '/company-info',
      philosophy: '/philosophy',
      visit: '/visit',
    };
    return urls[key] || '#';
  };
  </script>
  
  <style scoped>
  :root {
    --primary-color: #2563eb;
    --primary-dark: #1d4ed8;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --navbar-bg: rgba(255, 255, 255, 0.95);
    --shadow-color: rgba(0, 0, 0, 0.1);
  }
  
  [data-theme="dark"] {
    --primary-color: #60a5fa;
    --primary-dark: #3b82f6;
    --text-color: #f3f4f6;
    --bg-color: #111827;
    --navbar-bg: rgba(17, 24, 39, 0.95);
    --shadow-color: rgba(0, 0, 0, 0.3);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--navbar-bg);
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 10px var(--shadow-color);
    z-index: 1000;
  }
  
  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  
  .logo-link {
    text-decoration: none;
    color: var(--text-color);
    transition: color 0.3s ease;
  }
  
  .logo-link:hover {
    color: var(--primary-color);
  }
  
  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-link {
    color: var(--text-color);
    font-size: 0.9rem;
    transition: all 0.3s ease;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
  }
  
  .nav-link:hover {
    color: var(--primary-color);
    background: var(--bg-secondary);
  }
  
  .nav-link.japanese {
    font-family: 'Noto Sans JP', sans-serif;
  }
  
  @media (max-width: 768px) {
    .navbar-content {
      flex-direction: column;
      padding: 1rem;
    }
  
    .nav-links {
      flex-direction: column;
      text-align: center;
      margin-top: 1rem;
    }
  }
  </style>