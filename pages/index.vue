<script setup>
import { ref } from 'vue';

definePageMeta({
  name: 'index',
  hideNavbar: false
});

const selectedNews = ref(null);
const newsItems = [
  {
    ja: '2025-02-10 「SECURITY ACTION – セキュリティ対策自己宣言 」の二つ星 を宣言しました。',
    en: '2025-02-10 Declared two-star "SECURITY ACTION - Security Measure Declaration"',
    mn: '2025-02-10 "SECURITY ACTION - Аюулгүй байдлын арга хэмжээний тунхаглал" хоёр одтой зарлав'
  },
  {
    ja: '2024-03-15 アクアポニックス見学サービス（長岡プラント）のご案内',
    en: '2024-03-15 Aquaponics Tour Service (Nagaoka Plant) Information',
    mn: '2024-03-15 Аквапоникийн аялал үйлчилгээ (Нагаока үйлдвэр) Мэдээлэл'
  },
  {
    ja: '2024-03-20 モンゴル企業との協力関係構築のお知らせ',
    en: '2024-03-20 Announcement of Collaboration with Mongolian Company',
    mn: '2024-03-20 Монгол компанитай хамтран ажиллах тухай зарлал'
  }
];

const language = ref('ja');

const showNewsDetail = (index) => {
  selectedNews.value = selectedNews.value === index ? null : index;
};
</script>

<template>

</template>

<style scoped>
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  background: var(--bg-color);
  text-align: center;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: var(--text-color);
}

.hero-subtitle {
  display: block;
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-top: 0.5rem;
}

.hero-text {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero-button {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.hero-button.primary {
  background: var(--primary-color);
  color: white;
}

.hero-button.primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.hero-button.secondary {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.hero-button.secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

/* News Section Styles */
.news-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.title-icon {
  font-size: 2.5rem;
}

.news-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

.news-list-wrapper {
  background: var(--card-bg);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px var(--shadow-color);
  border: 1px solid var(--border-color);
}

.news-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
}

.news-item:hover {
  background: var(--news-hover);
}

.news-item.active {
  background: var(--news-active);
}

.news-date {
  font-size: 0.875rem;
  color: var(--primary-color);
  font-weight: 600;
}

.news-title {
  font-size: 1rem;
  line-height: 1.5;
}

.news-detail {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
}

.news-detail h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.news-content {
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-text {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .news-container {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .title-icon {
    font-size: 2rem;
  }
}
</style> 