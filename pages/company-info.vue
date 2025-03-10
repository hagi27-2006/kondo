<script setup>
definePageMeta({
  name: 'company-info',
  hideNavbar: false,
  layout: true
})
</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <h1 class="page-title">会社案内</h1>
      
      <section class="aquaponics-intro">
        <h2 class="section-title">アクアポニックス事業について</h2>
        <div class="intro-content">
          <p class="highlight-text">
            現在、試験農場は国内に複数存在しますが、植物工場の規模で野菜の生産から出荷まで通年通した稼働を実現しているアクアポニックスプラントは当社が手掛けるプラント以外にありません。<span class="note">※2022年1月現在当社調べ</span>
          </p>
          <p>
            当社は植物工場としてのアクアポニックスに特化し、企画設計から運用サポートまで様々な導入支援サービスを展開しております。
          </p>
        </div>
      </section>

      <section class="tour-info">
        <h2 class="section-title">見学サービスについて</h2>
        <div class="tour-content">
          <p>
            当ツアーはアクアポニックス事業への参入を検討されている企業様へ向けた内容となっております。見学後には質疑応答の時間と、長岡プラントで生産した当社ブランド野菜「フィッシュベジ」を味わっていただく機会を設けております。
            <span class="note">※栽培状況よっては見学時にご試食いただけないこともございますので、予めご了承ください。</span>
          </p>
          
          <div class="tour-features">
            <h3>見学内容</h3>
            <ul>
              <li>アクアポニックスシステムの見学</li>
              <li>養殖エリア（キャビアが取れるチョウザメ）の見学</li>
              <li>質疑応答</li>
              <li>フィッシュベジの試食体験</li>
              <li>お土産付き（フィッシュベジ）</li>
            </ul>
          </div>

          <div class="tour-times">
            <h3>見学時間</h3>
            <div class="time-slots">
              <div class="time-slot">
                <h4>午前の部</h4>
                <p>9：00 ～</p>
              </div>
              <div class="time-slot">
                <h4>午後の部</h4>
                <p>13：00 ～</p>
              </div>
            </div>
            <p class="time-note">見学時間は約1時間半を予定しております。</p>
          </div>
        </div>
      </section>

      <section class="pricing">
        <h2 class="section-title">料金案内</h2>
        <div class="pricing-grid">
          <div class="price-card">
            <h3>アクアポニックスプラント見学サービス</h3>
            <div class="price">33,000円<span class="tax">（税込）</span></div>
            <ul>
              <li>参加人数 4名まで</li>
              <li>追加1名毎に5,500円（税込）</li>
            </ul>
          </div>
          
          <div class="price-card">
            <h3>アクアポニックス参入相談サービス</h3>
            <div class="price">33,000円<span class="tax">（税込）</span></div>
            <ul>
              <li>考えられている事業についてコンサルタントがアドバイス</li>
              <li>詳細事業計画の作成までサポート可能（別途お見積り）</li>
            </ul>
          </div>
          
          <div class="price-card special">
            <h3>プラント見学 ＋ 参入相談サービス</h3>
            <div class="price">55,000円<span class="tax">（税込）</span></div>
            <p class="highlight">合わせてお申込みいただくと大変お得です！</p>
          </div>
        </div>
      </section>

      <section class="access">
        <h2 class="section-title">アクセス</h2>
        <div class="access-content">
          <div class="location">
            <h3>場所</h3>
            <p>プラントフォーム 長岡プラント</p>
            <p>〒940-1164 新潟県長岡市南陽2丁目951番地12</p>
          </div>
          
          <div class="transportation">
            <h3>交通</h3>
            <ul>
              <li>東京駅から新幹線で約２時間</li>
              <li>JR長岡駅から車で18分</li>
              <li>JR前川駅より徒歩8分</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="contact">
        <h2 class="section-title">お問い合わせ</h2>
        <div class="contact-content">
          <p class="note-text">
            ※アクアポニックスプラントの見学は参入を検討されている企業、農家、自治体様向けのサービスになっております。
            一般の方の見学は現在行っておりませんので、ご了承ください。
          </p>
          <div class="contact-info">
            <p>見学、相談を希望される方は下記よりお問い合わせください。</p>
            <div class="contact-buttons">
              <a href="tel:0258-86-6225" class="contact-button">
                <span class="icon">📞</span> 0258-86-6225
              </a>
              <a href="mailto:info@kondo-printing.co.jp" class="contact-button">
                <span class="icon">✉️</span> info@kondo-printing.co.jp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  padding-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-color);
}

section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
}

.highlight-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.note {
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: block;
  margin-top: 0.5rem;
}

.tour-features {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  border: 1px solid var(--border-color);
}

.tour-features h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.tour-features ul {
  list-style: none;
  padding: 0;
}

.tour-features li {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: var(--bg-secondary);
  border-radius: 0.25rem;
}

.tour-times {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
}

.time-slots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 1rem 0;
}

.time-slot {
  text-align: center;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.price-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.price-card:hover {
  transform: translateY(-5px);
}

.price-card.special {
  border: 2px solid var(--primary-color);
}

.price {
  font-size: 2rem;
  color: var(--primary-color);
  margin: 1rem 0;
}

.tax {
  font-size: 1rem;
  color: var(--text-secondary);
}

.highlight {
  color: var(--primary-color);
  font-weight: bold;
  margin-top: 1rem;
}

.access-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.location, .transportation {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
}

.contact-content {
  text-align: center;
}

.note-text {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .contact-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style> 