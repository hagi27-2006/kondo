<template>
  <div class="page-wrapper">
    <div class="container">
      <section class="hero-section">
        <h1 class="page-title">{{ tourInfo[language].title }}</h1>
        <p class="description">{{ tourInfo[language].description }}</p>
        <img src="https://www.plantform.co.jp/wordpress/wp-content/themes/plantform/img/img_tour_03.png" 
             alt="Aquaponics Facility" 
             class="hero-image">
      </section>

      <section class="tour-contents">
        <h2 class="section-title">
          <span class="section-icon">🔍</span>
          {{ tourInfo[language].tourContents.title }}
        </h2>
        <ul class="feature-list">
          <li v-for="(item, index) in tourInfo[language].tourContents.items" 
              :key="index">
              <span class="bullet">•</span> {{ item }}
          </li>
        </ul>
      </section>

      <section class="pricing">
        <h2 class="section-title">
          <span class="section-icon">💰</span>
          {{ tourInfo[language].pricing.title }}
        </h2>
        <div class="pricing-grid">
          <div class="price-card">
            <div class="price-card-header">
              <h3>{{ tourInfo[language].pricing.basicTour.title }}</h3>
              <div class="price">¥33,000<span class="tax">{{ tourInfo[language].pricing.taxIncluded }}</span></div>
            </div>
            <ul class="price-features">
              <li v-for="(feature, index) in tourInfo[language].pricing.basicTour.features" :key="index">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
            <a href="mailto:info@kondo-printing.co.jp" class="price-cta">
              {{ tourInfo[language].pricing.bookNow }}
            </a>
          </div>
          
          <div class="price-card">
            <div class="price-card-header">
              <h3>{{ tourInfo[language].pricing.consultationService.title }}</h3>
              <div class="price">¥33,000<span class="tax">{{ tourInfo[language].pricing.taxIncluded }}</span></div>
            </div>
            <ul class="price-features">
              <li v-for="(feature, index) in tourInfo[language].pricing.consultationService.features" :key="index">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
            <a href="mailto:info@kondo-printing.co.jp" class="price-cta">
              {{ tourInfo[language].pricing.bookNow }}
            </a>
          </div>
          
          <div class="price-card premium">
            <div class="popular-tag">{{ tourInfo[language].pricing.bestValue }}</div>
            <div class="price-card-header">
              <h3>{{ tourInfo[language].pricing.combinedPackage.title }}</h3>
              <div class="price">¥55,000<span class="tax">{{ tourInfo[language].pricing.taxIncluded }}</span></div>
            </div>
            <ul class="price-features">
              <li v-for="(feature, index) in tourInfo[language].pricing.combinedPackage.features" :key="index">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
            <a href="mailto:info@kondo-printing.co.jp" class="price-cta premium-cta">
              {{ tourInfo[language].pricing.bookNow }}
            </a>
          </div>
        </div>
      </section>

      <section class="access-section">
        <h2 class="section-title">
          <span class="section-icon">📍</span>
          {{ tourInfo[language].access.title }}
        </h2>
        <p class="location">{{ tourInfo[language].access.location }}</p>
        <p class="directions" v-html="tourInfo[language].access.directions"></p>
        <div class="map-container">
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=138.83,37.43,138.84,37.44&layer=mapnik&marker=37.435,138.835"
            width="100%"
            height="400"
            frameborder="0"
            style="border: 1px solid var(--border-color); border-radius: 0.5rem;"
            allowfullscreen
          ></iframe>
          <a href="https://www.google.com/maps?q=37.4350,138.8350" 
             target="_blank" 
             class="map-link">
            <i class="fas fa-map-marker-alt"></i>
            {{ language === 'ja' ? 'Google Mapsで見る' : language === 'en' ? 'View on Google Maps' : 'Google Maps-д харах' }}
          </a>
        </div>
      </section>

      <section class="contact-section">
        <h2 class="section-title">
          <span class="section-icon">✉️</span>
          {{ tourInfo[language].contactTitle }}
        </h2>
        <div class="contact-info">
          <p>{{ companyInfo.address }}</p>
          <p>{{ companyInfo.tel }} / {{ companyInfo.fax }}</p>
        </div>
        <a href="mailto:info@kondo-printing.co.jp" class="contact-button">
          <span class="button-icon">✉️</span>
          {{ tourInfo[language].contactButton }}
        </a>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const language = ref('ja');

const companyInfo = {
  address: '〒940-1164 新潟県長岡市南陽2丁目951番地12',
  tel: 'TEL：0258-86-6225',
  fax: 'FAX：0258-86-6259',
};

const tourInfo = {
  ja: {
    title: 'アクアポニックス見学サービス（長岡プラント）のご案内',
    description: '当社が新潟県長岡市で運営する大規模アクアポニックスプラントの見学サービスを開始いたしました。最新の養殖技術と水耕栽培を組み合わせた、環境に優しい次世代型の食料生産システムをご覧いただけます。',
    tourContents: {
      title: '見学内容',
      items: [
        'アクアポニックスシステムの詳細な説明と見学',
        '養殖エリア（キャビアが取れるチョウザメ）の見学と説明',
        'エディブルフラワー(食用花)の見学と説明',
        '生産工程と品質管理システムの説明',
        '質疑応答セッション',
      ]
    },
    pricing: {
      title: '料金案内',
      taxIncluded: '（税込）',
      bookNow: '予約する',
      bestValue: 'おすすめ',
      basicTour: {
        title: 'アクアポニックスプラント見学サービス',
        features: [
          '参加人数 4名まで',
          '追加1名毎に5,500円（税込）',
          'アクアポニックスシステムの詳細説明',
          
          'お土産付き'
        ]
      },
      consultationService: {
        title: 'アクアポニックス参入相談サービス',
        features: [
          '2時間の個別相談',
          '事業計画のアドバイス',
          'コスト試算サポート',
          '市場分析情報の提供',
          '詳細事業計画作成サポート（別途お見積り）'
        ]
      },
      combinedPackage: {
        title: 'プラント見学 ＋ 参入相談サービス',
        features: [
          'プラント見学（4名まで）',
          '2時間の個別相談',
          '事業計画アドバイス',
          'お土産付き',
          '通常価格より11,000円お得'
        ]
      }
    },
    access: {
      title: 'アクセス情報',
      location: '場所: プラントフォーム 長岡プラント（新潟県長岡市南陽2丁目951番地12）',
      directions: '交通手段:<br>・東京駅から新幹線で約2時間<br>・JR長岡駅から車で18分<br>・JR前川駅より徒歩8分<br>・無料駐車場完備（20台）'
    },
    contactTitle: 'お問い合わせ',
    contactButton: 'お問い合わせ・ご予約'
  },
  en: {
    title: 'Aquaponics Tour Service (Nagaoka Plant) Information',
    description: 'We are pleased to announce the launch of our tour service at our large-scale aquaponics plant in Nagaoka City, Niigata Prefecture. Visitors can experience our next-generation sustainable food production system that combines advanced aquaculture with hydroponic farming.',
    tourContents: {
      title: 'Tour Contents',
      items: [
        'Detailed explanation and tour of the aquaponics system',
        'Aquaculture area tour (Sturgeon for Caviar) with explanation',
        'Hydroponic farming area tour (Lettuce, Herbs, etc.)',
        'Production process and quality control system explanation',
        'Q&A Session',
        'Fish-Veg tasting experience',
        'Complimentary Fish-Veg products'
      ]
    },
    pricing: {
      title: 'Pricing Plans',
      taxIncluded: '(tax included)',
      bookNow: 'Book Now',
      bestValue: 'Best Value',
      basicTour: {
        title: 'Aquaponics Plant Tour Service',
        features: [
          'Up to 4 participants',
          '¥5,500 per additional person',
          'Detailed system explanation',
          'Fish-Veg tasting experience',
          'Complimentary gift'
        ]
      },
      consultationService: {
        title: 'Aquaponics Entry Consultation',
        features: [
          '2-hour private consultation',
          'Business plan advice',
          'Cost calculation support',
          'Market analysis information',
          'Detailed planning support (separate quote)'
        ]
      },
      combinedPackage: {
        title: 'Plant Tour + Entry Consultation',
        features: [
          'Plant tour (up to 4 people)',
          '2-hour consultation',
          'Business plan advice',
          'Fish-Veg tasting',
          'Complimentary gift',
          'Save ¥11,000 off regular price'
        ]
      }
    },
    access: {
      title: 'Access Information',
      location: 'Location: Plant Form Nagaoka Plant (951-12 Nanyo 2-chome, Nagaoka City, Niigata)',
      directions: 'Transportation:<br>・About 2 hours by bullet train from Tokyo Station<br>・18 min by car from JR Nagaoka Station<br>・8 min walk from JR Maekawa Station<br>・Free parking available (20 spaces)'
    },
    contactTitle: 'Contact',
    contactButton: 'Contact & Reservation'
  },
  mn: {
    title: 'Аквапоникийн аялал үйлчилгээ (Нагаока үйлдвэр) Мэдээлэл',
    description: 'Ниигата мужийн Нагаока хотод байрлах том хэмжээний аквапоникийн үйлдвэрийн аялал үйлчилгээг эхлүүлж байгаагаа баяртайгаар мэдэгдэж байна. Зочид маань усан аж ахуй болон усан тариалангийн системийг хослуулсан ирээдүйн тогтвортой хүнсний үйлдвэрлэлийн системтэй танилцах боломжтой.',
    tourContents: {
      title: 'Аялалын агуулга',
      items: [
        'Аквапоникийн системийн дэлгэрэнгүй тайлбар, аялал',
        'Загасны аж ахуйн хэсэг (Түрүү загас) тайлбар, аялал',
        'Усан тариалангийн хэсэг (Салат, Хүнсний ногоо) аялал',
        'Үйлдвэрлэлийн процесс, чанарын хяналтын систем',
        'Асуулт хариултын цаг',
        'Загас-Ногооны амталгаа',
        'Загас-Ногоо бэлэг'
      ]
    },
    pricing: {
      title: 'Үнийн санал',
      taxIncluded: '(татвартай)',
      bookNow: 'Захиалах',
      bestValue: 'Хамгийн ашигтай',
      basicTour: {
        title: 'Аквапоникийн үйлдвэр үзэх үйлчилгээ',
        features: [
          '4 хүн хүртэл',
          'Нэмэлт хүн тус бүр ¥5,500',
          'Системийн дэлгэрэнгүй тайлбар',
          'Загас-Ногоо амталгаа',
          'Дурсгалын бэлэг'
        ]
      },
      consultationService: {
        title: 'Аквапоникийн зөвлөгөө',
        features: [
          '2 цагийн хувийн зөвлөгөө',
          'Бизнес төлөвлөгөөний зөвлөгөө',
          'Өртгийн тооцоолол',
          'Зах зээлийн дүн шинжилгээ',
          'Дэлгэрэнгүй төлөвлөлт (тусдаа үнэ)'
        ]
      },
      combinedPackage: {
        title: 'Үйлдвэр үзэх + Зөвлөгөө',
        features: [
          'Үйлдвэр үзэх (4 хүн хүртэл)',
          '2 цагийн зөвлөгөө',
          'Бизнес төлөвлөгөөний зөвлөгөө',
          'Загас-Ногоо амталгаа',
          'Дурсгалын бэлэг',
          'Энгийн үнээс ¥11,000 хэмнэнэ'
        ]
      }
    },
    access: {
      title: 'Хаяг байршил',
      location: 'Байршил: Плант Форм Нагаока үйлдвэр (951-12 Нанёо 2-чёомэ, Нагаока хот, Ниигата)',
      directions: 'Тээвэр:<br>・Токио өртөөнөөс пуужин галт тэргээр 2 цаг<br>・JR Нагаока өртөөнөөс машинаар 18 минут<br>・JR Маэкава өртөөнөөс явган 8 минут<br>・Үнэгүй зогсоол (20 машин)'
    },
    contactTitle: 'Холбоо барих',
    contactButton: 'Холбоо барих ба захиалга'
  }
};
</script>

<style scoped>
.page-wrapper {
  padding-top: 120px;
  min-height: 100vh;
  background: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.hero-image {
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 4px 12px var(--shadow-color);
}

section {
  margin-bottom: 4rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.section-icon {
  font-size: 2rem;
}

.feature-list, .price-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.feature-list li, .price-list li {
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bullet {
  color: var(--primary-color);
  font-size: 1.2rem;
}

.map-container {
  margin-top: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
}

.map-link {
  display: inline-block;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: var(--card-bg);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: all 0.3s ease;
}

.map-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--shadow-color);
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.contact-section {
  text-align: center;
}


.contact-info {
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: var(--bg-color);
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.button-icon {
  font-size: 1.2rem;
}

.price-card {
  background: var(--card-bg);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.price-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--shadow-color);
}

.price-card.premium {
  border: 2px solid var(--primary-color);
  background: linear-gradient(to bottom, var(--card-bg), var(--bg-secondary));
}

.popular-tag {
  position: absolute;
  top: -12px;
  right: 1rem;
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.price-card-header {
  text-align: center;
  margin-bottom: 2rem;
}

.price-card h3 {
  font-size: 1.25rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
}

.tax {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: normal;
}

.price-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex-grow: 1;
}

.price-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0;
  color: var(--text-color);
  font-size: 0.95rem;
  line-height: 1.5;
}

.check-icon {
  color: var(--primary-color);
  font-weight: bold;
}

.price-cta {
  display: block;
  text-align: center;
  padding: 1rem;
  background: var(--bg-secondary);
  color: var(--text-color);
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.price-cta:hover {
  background: var(--primary-color);
  color: white;
}

.premium-cta {
  background: var(--primary-color);
  color: white;
}

.premium-cta:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .container {
    padding: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .feature-list, .price-list {
    grid-template-columns: 1fr;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .price-card h3 {
    min-height: auto;
  }
}
</style>
