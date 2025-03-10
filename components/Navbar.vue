  <template>
    <div class="page-wrapper">
      <!-- Navbar -->
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
                  <a 
                    :href="getPageUrl(key)"
                    class="nav-link"
                    :class="{ 'japanese': language === 'ja' }"
                  >
                    {{ label }}
                  </a>
                </li>
              </ul>
            </nav>
            <div class="contact-buttons">
              <div class="visit-notice" @click="showNotice = true">
                <span class="icon">ℹ️</span>
                {{ visitNotice[language].button }}
              </div>
             
              <a href="mailto:info@kondo-printing.co.jp" class="contact-button">
                <span class="icon">✉️</span> info@kondo-printing.co.jp
              </a>
            </div>
          </div>
        </div>
      </header>

      <!-- Visit Notice Modal -->
      <div v-if="showNotice" class="notice-modal" @click.self="showNotice = false">
        <div class="notice-content">
          <button class="close-button" @click="showNotice = false">×</button>
          <h3>{{ visitNotice[language].title }}</h3>
          <p>{{ visitNotice[language].message }}</p>
          <div class="notice-footer">
            <a href="mailto:info@kondo-printing.co.jp" class="contact-button">
              <span class="icon">✉️</span>
              {{ visitNotice[language].contact }}
            </a>
          </div>
        </div>
      </div>

      <!-- Hero Images -->
      <section class="hero-section">
        <div class="image-slideshow">
          <img 
            v-for="(image, index) in images" 
            :key="index"
            :src="image.src" 
            :alt="image.alt"
            class="hero-image"
            :class="{ 
              'active': currentImage === index,
              'inactive': currentImage !== index 
            }"
          />
        </div>
      </section>
      <section class="news-section">
        <div class="container">
          <h2 class="section-title">
            <span class="title-icon">📰</span>
            お知らせ / NEWS & TOPICS
          </h2>
          <div class="news-container">
            <div class="news-list-wrapper">
              <ul class="news-list">
                <li v-for="(news, index) in displayedNews" 
                  :key="index" 
                  class="news-item"
                  @click="showNewsDetail(index)"
                  :class="{ 'active': selectedNews === index }"
                >
                  <div class="news-date">{{ news[language].split(' ')[0] }}</div>
                  <div class="news-title">{{ news[language].split(' ').slice(1).join(' ') }}</div>
                </li>
              </ul>
              <div v-if="newsItems.length > 5" class="see-more-wrapper">
                <button @click="toggleShowMore" class="see-more-button">
                  {{ showAllNews ? 
                    (language === 'ja' ? '閉じる' : language === 'en' ? 'Close' : 'Хаах') : 
                    (language === 'ja' ? 'もっと見る' : language === 'en' ? 'See More' : 'Дэлгэрэнгүй') 
                  }}
                </button>
              </div>
            </div>
            <div v-if="selectedNews !== null" class="news-detail">
              <h3>{{ newsDetails[selectedNews]?.[language]?.title }}</h3>
              <div class="news-content" v-if="newsDetails[selectedNews]">
                <img :src="newsDetails[selectedNews][language].image" 
                     :alt="newsDetails[selectedNews][language].title" 
                     class="news-image">
                <p class="news-description">{{ newsDetails[selectedNews][language].description }}</p>
                <div class="news-content-text">
                  <p>{{ newsDetails[selectedNews][language].content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="company-section">
        <div class="container">
          <h2 class="section-title">
            <span class="title-icon">🏢</span>
            会社を知る / COMPANY
          </h2>
          <div class="company-grid">
            <div class="company-info">
              <p class="company-description">
                アクアポニックス見学サービス（長岡プラント）
当社が新潟県長岡市で運営する大規模アクアポニックスプラントを見学いただけるツアーです。
              </p>
              <a href="http://localhost:3000/company-info" class="view-button">
                <span>VIEW MORE</span>
                <span class="arrow">→</span>
              </a>
            </div>
            <div class="company-images">
              <img src="C:\Users\anna\Downloads\nagaoka\my-project\public\20240705112017814.jpeg" 
                   alt="Company Facility" 
                   class="company-image">
              <img src="C:\Users\anna\Downloads\nagaoka\my-project\public\202407051119578313.jpeg" 
                   alt="Company Products" 
                   class="company-image">
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="language-controls">
            <button v-for="lang in languages" 
              :key="lang.code"
              @click="setLanguage(lang.code)"
              class="lang-button"
              :class="{ 'active': language === lang.code }"
            >
              {{ lang.label }}
            </button>
          </div>
          <div class="footer-bottom">
            <div class="contact-info">
              <p>〒940-1164 新潟県長岡市南陽2丁目951番地12</p>
              <p>TEL：0258-86-6225  FAX：0258-86-6259</p>
            </div>
            <p class="copyright">Copyright©コンドウ印刷株式会社 All Rights Reserved.</p>
            <div class="footer-actions">
              <a href="https://www.instagram.com/entry.kondo/" target="_blank" class="social-link">
                <i class="fab fa-instagram"></i> Instagram
              </a>
              <div class="controls">
                <button @click="toggleTheme" class="theme-button" :class="{ 'active': theme === 'dark' }">
                  <span class="theme-icon">{{ theme === 'light' ? '🌞' : '🌙' }}</span>
                  <span class="theme-text">{{ theme === 'light' ? 'Light Mode' : 'Dark Mode' }}</span>
                  <span class="active-indicator">(ON)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>

  <script>
  export default {
    name: 'CompanyWebsite',
    data() {
      return {
        showNotice: false,
        currentImage: 0,
        theme: 'light',
        language: 'ja',
        images: [
          { 
            src: '/hana.png',
            alt: 'Company Image 1' 
          },
          { 
            src: '/same.png',
            alt: 'Company Image 2' 
          },
        ],
        newsItems: [
          {
            ja: '2025-02-20 「跡継ぎNIIGATA交流会 」で登壇しました。',
            en: '2025-02-20 Presented at the "Successor NIIGATA Exchange Meeting"',
            mn: '2025-02-20 "Залгамжлагч NIIGATA солилцооны уулзалт"-д илтгэл тавив'
          },
          {
            ja: '2025-02-10 「SECURITY ACTION – セキュリティ対策自己宣言 」の二つ星 を宣言しました。',
            en: '2025-02-10 Declared two-star "SECURITY ACTION - Security Measure Declaration"',
            mn: '2025-02-10 "SECURITY ACTION - Аюулгүй байдлын арга хэмжээний тунхаглал" хоёр одтой зарлав'
          },
          {
            ja: '2025-02-06 令和6年度「高校生のための企業フェスinアオーレ」に参加しました。',
            en: '2025-02-06 Participated in "Corporate Festival at Aore for High School Students" for Reiwa 6',
            mn: '2025-02-06 Рэйва 6-р жилийн "Ахлах сургуулийн сурагчдад зориулсан Аорэ дахь компанийн наадам"-д оролцов'
          },
          {
            ja: '2025-01-30 「にいがた健康経営推進企業マスター2025」認定を受けました。（3年連続認定）',
            en: '2025-01-30 Certified as "Niigata Health Management Promotion Company Master 2025" (3rd consecutive year)',
            mn: '2025-01-30 "Ниигата эрүүл мэндийн менежментийг дэмжигч компани мастер 2025" гэрчилгээ авав (3 дахь жилдээ)'
          },
          {
            ja: '2025-01-22 Canva研修を行いました。',
            en: '2025-01-22 Conducted Canva training',
            mn: '2025-01-22 Canva сургалт явуулав'
          },
          {
            ja: '2025-01-21 ～セルフ・キャリアドッグ～　第３回キャリア研修（全社研修）を行いました。',
            en: '2025-01-21 Conducted 3rd Career Training (Company-wide Training) ~Self Career Dog~',
            mn: '2025-01-21 3-р удаагийн карьер сургалт (компанийн хэмжээний) ~Өөрийн карьерын нохой~ явуулав'
          },
          {
            ja: '2025-01-14 リスクアセスメント研修を行いました。',
            en: '2025-01-14 Conducted Risk Assessment Training',
            mn: '2025-01-14 Эрсдэлийн үнэлгээний сургалт явуулав'
          },
          {
            ja: '2024-12-09 『テック・ビズブリュー拡大版　IT戦略セミナー＆交流会』にて登壇いたしました。',
            en: '2024-12-09 Presented at "Tech Biz Blue Extended Edition - IT Strategy Seminar & Networking Event"',
            mn: '2024-12-09 "Tech Biz Blue өргөтгөсөн хэвлэл - МТ-ийн стратегийн семинар ба нэтворкинг арга хэмжээ"-д илтгэл тавив'
          },
          {
            ja: '2024-11-29 長岡市より 『令和6年度 はたプラチナ賞』を、受賞いたしました。',
            en: '2024-11-29 Received "Reiwa 6 Hata Platinum Award" from Nagaoka City',
            mn: '2024-11-29 Нагаока хотоос "Рэйва 6 Хата Платинум шагнал" хүртэв'
          },
          {
            ja: '2024-11-15 当社は、『一般社団法人地域創生プラットフォームSDGｓにいがた』に入会いたしました。',
            en: '2024-11-15 Joined "Regional Creation Platform SDGs Niigata General Incorporated Association"',
            mn: '2024-11-15 "Бүс нутгийн бүтээх платформ SDGs Ниигата Ерөнхий нэгдсэн холбоо"-нд нэгдэв'
          }
        ],
        newsDetails: {
          0: {
            ja: {
              title: '「跡継ぎNIIGATA交流会 」で登壇しました。',
              description: '当社代表が新潟県の次世代経営者向けの交流会にて、アクアポニックス事業と持続可能な農業の未来についての講演を行いました。',
              image: '/news/successor-niigata.jpg',
              content: '2025年2月20日、新潟県内の若手経営者や後継者が集まる「跡継ぎNIIGATA交流会」において、当社の革新的なアクアポニックスシステムと、持続可能な食料生産の取り組みについて発表させていただきました。多くの参加者との有意義な意見交換を通じて、地域の未来について考える貴重な機会となりました。'
            },
            en: {
              title: 'Presented at the "Successor NIIGATA Exchange Meeting"',
              description: 'Our representative gave a presentation on aquaponics business and the future of sustainable agriculture at a networking event for next-generation business leaders in Niigata Prefecture.',
              image: '/news/successor-niigata.jpg',
              content: 'On February 20, 2025, at the "Successor NIIGATA Exchange Meeting" for young business leaders and successors in Niigata Prefecture, we presented our innovative aquaponics system and sustainable food production initiatives. Through meaningful exchanges with many participants, it became a valuable opportunity to think about the future of our region.'
            },
            mn: {
              title: '"Залгамжлагч NIIGATA солилцооны уулзалт"-д илтгэл тавив',
              description: 'Манай төлөөлөгч Ниигата мужийн ирээдүйн удирдагчдын уулзалт дээр аквапоник бизнес болон тогтвортой хөдөө аж ахуйн ирээдүйн талаар илтгэл тавилаа.',
              image: '/news/successor-niigata.jpg',
              content: '2025 оны 2-р сарын 20-нд Ниигата мужийн залуу бизнес эрхлэгчид, залгамжлагчдын "Залгамжлагч NIIGATA солилцооны уулзалт" дээр бид өөрсдийн шинэлэг аквапоникийн систем болон тогтвортой хүнсний үйлдвэрлэлийн санаачлагуудыг танилцууллаа. Олон оролцогчидтой утга учиртай харилцаа солилцсоноор бүс нутгийнхаа ирээдүйн талаар бодох үнэ цэнэтэй боломж болсон.'
            }
          },
          1: {
            ja: {
              title: '「SECURITY ACTION – セキュリティ対策自己宣言 」の二つ星 を宣言しました。',
              description: '情報セキュリティ対策の自己宣言制度「SECURITY ACTION」において、二つ星を取得しました。',
              image: '/news/security-action.jpg',
              content: '当社は情報セキュリティ対策の強化に取り組み、IPAが推進する中小企業向け情報セキュリティ制度「SECURITY ACTION」において二つ星を宣言しました。これは、情報セキュリティマネジメントシステム（ISMS）の基本的な考え方を導入し、セキュリティ対策に積極的に取り組んでいることを示しています。'
            },
            en: {
              title: 'Declared two-star "SECURITY ACTION - Security Measure Declaration"',
              description: 'We have obtained two stars in "SECURITY ACTION", a self-declaration system for information security measures.',
              image: '/news/security-action.jpg',
              content: 'We have strengthened our information security measures and declared two stars in "SECURITY ACTION", an information security system for SMEs promoted by IPA. This indicates that we have introduced the basic concept of Information Security Management System (ISMS) and are actively working on security measures.'
            },
            mn: {
              title: '"SECURITY ACTION - Аюулгүй байдлын арга хэмжээний тунхаглал" хоёр одтой зарлав',
              description: 'Бид мэдээллийн аюулгүй байдлын арга хэмжээний өөрийн тунхаглалын систем "SECURITY ACTION"-д хоёр од авлаа.',
              image: '/news/security-action.jpg',
              content: 'Бид мэдээллийн аюулгүй байдлын арга хэмжээгээ сайжруулж, IPA-гийн дэмждэг ЖДҮ-д зориулсан мэдээллийн аюулгүй байдлын систем "SECURITY ACTION"-д хоёр од зарласан. Энэ нь бид Мэдээллийн аюулгүй байдлын менежментийн системийн (ISMS) үндсэн ойлголтыг нэвтрүүлж, аюулгүй байдлын арга хэмжээг идэвхтэй хэрэгжүүлж байгааг харуулж байна.'
            }
          },
          2: {
            ja: {
              title: '令和6年度「高校生のための企業フェスinアオーレ」に参加しました。',
              description: '長岡市のアオーレで開催された高校生向け企業フェスに参加し、当社の事業や職場環境について紹介しました。',
              image: '/news/aore-fest.jpg',
              content: '2025年2月6日、アオーレ長岡で開催された「高校生のための企業フェス」に参加しました。当社ブースでは、アクアポニックスシステムのミニチュアモデルを展示し、持続可能な農業の未来について高校生たちと活発な意見交換を行いました。多くの生徒さんが環境に配慮した食料生産システムに興味を示してくれました。'
            },
            en: {
              title: 'Participated in "Corporate Festival at Aore for High School Students" for Reiwa 6',
              description: 'We participated in a corporate festival for high school students held at Aore in Nagaoka City, introducing our business and work environment.',
              image: '/news/aore-fest.jpg',
              content: 'On February 6, 2025, we participated in the "Corporate Festival for High School Students" held at Aore Nagaoka. At our booth, we displayed a miniature model of our aquaponics system and had active discussions with high school students about the future of sustainable agriculture. Many students showed interest in our environmentally conscious food production system.'
            },
            mn: {
              title: 'Рэйва 6-р жилийн "Ахлах сургуулийн сурагчдад зориулсан Аорэ дахь компанийн наадам"-д оролцов',
              description: 'Нагаока хотын Аорэд зохиогдсон ахлах сургуулийн сурагчдад зориулсан компанийн наадамд оролцож, бизнес болон ажлын орчноо танилцууллаа.',
              image: '/news/aore-fest.jpg',
              content: '2025 оны 2-р сарын 6-нд Аорэ Нагаокад зохиогдсон "Ахлах сургуулийн сурагчдад зориулсан компанийн наадам"-д оролцлоо. Манай үзэсгэлэнгийн танхимд аквапоникийн системийн жижиг загварыг танилцуулж, тогтвортой хөдөө аж ахуйн ирээдүйн талаар ахлах сургуулийн сурагчидтай идэвхтэй ярилцлага өрнүүллээ. Олон сурагчид байгаль орчинд ээлтэй хүнсний үйлдвэрлэлийн системд сонирхол хүрэв.'
            }
          },
          3: {
            ja: {
              title: '「にいがた健康経営推進企業マスター2025」認定を受けました。（3年連続認定）',
              description: '従業員の健康管理と働きやすい職場環境づくりが評価され、3年連続で認定を受けました。',
              image: '/news/health-management.jpg',
              content: '当社は従業員の健康増進と働き方改革に積極的に取り組んでおり、この度「にいがた健康経営推進企業マスター2025」の認定を3年連続で受けました。健康経営の取り組みとして、定期的な健康診断の実施、メンタルヘルスケアの充実、働き方改革の推進などを行っています。'
            },
            en: {
              title: 'Certified as "Niigata Health Management Promotion Company Master 2025" (3rd consecutive year)',
              description: 'We have been certified for the third consecutive year in recognition of our employee health management and creation of a comfortable workplace environment.',
              image: '/news/health-management.jpg',
              content: 'We actively promote employee health and work style reform, and have received the "Niigata Health Management Promotion Company Master 2025" certification for the third consecutive year. Our health management initiatives include regular health checkups, enhanced mental healthcare, and promotion of work style reforms.'
            },
            mn: {
              title: '"Ниигата эрүүл мэндийн менежментийг дэмжигч компани мастер 2025" гэрчилгээ авав (3 дахь жилдээ)',
              description: 'Ажилчдын эрүүл мэндийн менежмент болон тухтай ажлын орчин бүрдүүлсэн үйл ажиллагааг үнэлж 3 дахь жилдээ гэрчилгээ авлаа.',
              image: '/news/health-management.jpg',
              content: 'Бид ажилчдын эрүүл мэнд, ажлын хэв маягийн шинэчлэлийг идэвхтэй дэмжиж, "Ниигата эрүүл мэндийн менежментийг дэмжигч компани мастер 2025" гэрчилгээг 3 дахь жилдээ хүлээн авлаа. Эрүүл мэндийн менежментийн санаачлагад тогтмол эрүүл мэндийн үзлэг, сэтгэцийн эрүүл мэндийн тусламж үйлчилгээг сайжруулах, ажлын хэв маягийн шинэчлэлийг дэмжих зэрэг багтана.'
            }
          },
          4: {
            ja: {
              title: 'Canva研修を行いました。',
              description: 'デジタルデザインツール「Canva」の社内研修を実施し、効果的な視覚コミュニケーションスキルの向上を図りました。',
              image: '/news/canva-training.jpg',
              content: '社内のデジタルスキル向上の一環として、Canvaを活用したビジュアルデザイン研修を実施しました。プレゼンテーション資料や販促物の作成スキル向上を通じて、より効果的な情報発信を目指します。'
            },
            en: {
              title: 'Conducted Canva Training',
              description: 'We conducted internal training on the digital design tool "Canva" to improve effective visual communication skills.',
              image: '/news/canva-training.jpg',
              content: 'As part of our digital skills enhancement initiative, we conducted visual design training using Canva. Through improving skills in creating presentation materials and promotional materials, we aim for more effective information dissemination.'
            },
            mn: {
              title: 'Canva сургалт явуулав',
              description: 'Үр дүнтэй визуал харилцааны ур чадварыг сайжруулах зорилгоор "Canva" тоон дизайны хэрэгслийн дотоод сургалт зохион байгууллаа.',
              image: '/news/canva-training.jpg',
              content: 'Тоон ур чадварыг сайжруулах санаачлагын хүрээнд Canva ашиглан визуал дизайны сургалт явууллаа. Танилцуулга болон сурталчилгааны материал бэлтгэх ур чадварыг сайжруулснаар мэдээллийг илүү үр дүнтэй түгээх зорилготой.'
            }
          }
        },
        languages: [
          { code: 'ja', label: '日本語' },
          { code: 'en', label: 'English' },
          { code: 'mn', label: 'Mongolia' },
        ],
        translations: {
          ja: {
            home: 'トップページ',
            about: '会社案内',
            visit: '見学サービス',
            
            
          },
          en: {
            home: 'Home',
            about: 'About Us',
            visit: 'visit',
            
            
          },
          mn: {
            home: 'Нүүр хуудас',
            about: 'Бидний тухай',
            visit: 'Үзлэл',
            
            
          }
        },
        selectedNews: null,
        showAllNews: false,
        visitNotice: {
          ja: {
            button: '見学について',
            title: '見学サービスに関する重要なお知らせ',
            message: '※アクアポニックスプラントの見学は参入を検討されている企業、農家、自治体様向けのサービスになっております。一般の方の見学は現在行っておりませんので、ご了承ください。',
            contact: 'お問い合わせ・ご予約'
          },
          en: {
            button: 'About Visits',
            title: 'Important Notice Regarding Plant Tours',
            message: 'Please note that our aquaponics plant tours are exclusively available for businesses, farmers, and government organizations considering entry into aquaponics. We currently do not offer tours to the general public.',
            contact: 'Contact & Reservation'
          },
          mn: {
            button: 'Үзлэгийн тухай',
            title: 'Үйлдвэр үзэх үйлчилгээний чухал мэдэгдэл',
            message: 'Аквапоникийн үйлдвэр үзэх үйлчилгээ нь зөвхөн аквапоникт хамрагдахыг хүсч буй компани, фермер, засгийн газрын байгууллагуудад зориулагдсан болохыг анхаарна уу. Одоогоор нийтийн үзлэг хийхгүй байгаа.',
            contact: 'Холбоо барих ба захиалга'
          }
        },
      }
    },
    computed: {
      currentTranslations() {
        return this.translations[this.language]
      },
      displayedNews() {
        return this.showAllNews ? this.newsItems : this.newsItems.slice(0, 5)
      }
    },
    methods: {
      toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.theme = newTheme;
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme-preference', newTheme);
        
        // Apply transition class to body
        document.body.classList.add('theme-transition');
        setTimeout(() => {
          document.body.classList.remove('theme-transition');
        }, 300);
      },
      setLanguage(lang) {
        this.language = lang
      },
      nextImage() {
        this.currentImage = (this.currentImage + 1) % this.images.length
      },
      showNewsDetail(index) {
        this.selectedNews = this.selectedNews === index ? null : index;
      },
      toggleShowMore() {
        this.showAllNews = !this.showAllNews
      },
      getPageUrl(key) {
        const urls = {
          home: '/',
          about: '/company-info',
          
          visit: '/visit',
        }
        return urls[key] || '#'
      },
      initTheme() {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme-preference');
        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Set theme based on saved preference or system preference
        this.theme = savedTheme || (systemDarkMode ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', this.theme);
      }
    },
    mounted() {
      this.initTheme();
      setInterval(this.nextImage, 5000);

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme-preference')) {
          this.theme = e.matches ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', this.theme);
        }
      });
    }
  }
  </script>

  <style scoped>
  /* Base Styles */
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

  /* Layout */
  .page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Navbar */
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

  .logo {
    height: 3rem;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.05);
  }

  .nav-menu {
    display: flex;
    align-items: center;
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
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: var(--primary-color);
  }

  .nav-link.japanese {
    font-family: 'Noto Sans JP', sans-serif;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .hero-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
  }

  .hero-image.active {
    opacity: 1;
  }

  .hero-image.inactive {
    opacity: 0;
  }

  /* Footer */
  .footer {
    background: var(--bg-secondary);
    color: var(--text-color);
    padding: 2rem 0;
    border-top: 1px solid var(--border-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  [data-theme="dark"] .footer {
    background: var(--bg-color);
    border-top-color: var(--border-color);
  }

  .language-controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
  }

  .lang-button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    background: var(--bg-secondary);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    font-size: 1rem;
    transition: all 0.3s ease;
    min-width: 120px;
    text-align: center;
  }

  .lang-button.active {
    background: var(--primary-color);
    color: var(--bg-color);
    border-color: var(--primary-color);
  }

  .lang-button:hover {
    background: var(--primary-color);
    color: var(--bg-color);
    transform: translateY(-2px);
    box-shadow: 0 2px 6px var(--shadow-color);
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 1rem;
    align-items: center;
  }

  .contact-info {
    text-align: center;
    color: var(--text-secondary);
  }

  .copyright {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .footer-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .theme-button, .lang-button {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    background: var(--primary-color);
    color: var(--bg-color);
    transition: all 0.3s ease;
  }

  .theme-button:hover, .lang-button:hover {
    background: var(--primary-dark);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .navbar-content {
      flex-direction: column;
      padding: 1rem;
    }

    .nav-menu {
      flex-direction: column;
      width: 100%;
    }

    .nav-links {
      flex-direction: column;
      text-align: center;
      margin-top: 1rem;
    }

    .footer-content {
      grid-template-columns: 1fr;
    }

    .language-controls {
      margin-bottom: 1.5rem;
      padding: 0.5rem 0;
    }

    .lang-button {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      min-width: 100px;
    }
  }

  .news-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
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

  .news-detail h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1.5rem 0 0.5rem;
  }

  .news-content {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .price-list {
    list-style: none;
    padding: 0;
  }

  .price-list li {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background: var(--bg-secondary);
    border-radius: 0.25rem;
    border: 1px solid var(--border-color);
  }

  .contact-button {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--primary-color);
    color: var(--bg-color);
    border-radius: 0.375rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .contact-button:hover {
    background: var(--primary-dark);
  }

  @media (max-width: 768px) {
    .news-container {
      grid-template-columns: 1fr;
    }
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

  .news-list-wrapper {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: var(--shadow-md);
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

  .news-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  .feature-list {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    background: var(--bg-secondary);
    border-radius: 0.75rem;
    border: 1px solid var(--border-color);
  }

  .bullet {
    color: var(--primary-color);
    margin-right: 0.5rem;
  }

  .map-container {
    margin-top: 1.5rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    border: 1px solid var(--border-color);
  }

  .map-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .map-link {
    display: inline-block;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: var(--card-bg);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-size: 0.875rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .map-link:hover {
    background: var(--bg-secondary);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  /* Company Section Styles */
  .company-section {
    padding: 6rem 0;
    background: var(--bg-color);
  }

  .company-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .company-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .company-description {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }

  .view-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: var(--bg-color);
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .view-button:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .view-button:hover .arrow {
    transform: translateX(5px);
  }

  .company-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .company-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .company-image:hover {
    transform: scale(1.05);
  }

  /* Instagram Icon */
  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: white;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  .fab.fa-instagram {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    .company-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .company-images {
      grid-template-columns: 1fr;
    }

    .news-image {
      height: 200px;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .title-icon {
      font-size: 2rem;
    }
  }

  .theme-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    background: var(--bg-secondary);
    color: var(--text-color);
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    font-weight: 500;
    position: relative;
    min-width: 140px;
  }

  .theme-button .theme-icon {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  .theme-button .theme-text {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .theme-button .active-indicator {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--primary-color);
    color: var(--bg-color);
    padding: 0.2rem 0.4rem;
    border-radius: 1rem;
    font-size: 0.7rem;
    font-weight: 600;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
  }

  .theme-button.active .active-indicator {
    opacity: 1;
    transform: scale(1);
  }

  .theme-button:hover {
    background: var(--primary-color);
    color: var(--bg-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  }

  .theme-button:hover .theme-icon {
    transform: rotate(360deg);
  }

  /* Dark mode specific styles */
  [data-theme="dark"] .theme-button {
    background: var(--bg-secondary);
    border-color: var(--border-color);
  }

  [data-theme="dark"] .theme-button:hover {
    background: var(--primary-color);
    border-color: var(--primary-color);
  }

  /* Theme transition */
  .theme-transition {
    transition: background-color 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }

  /* Logo adjustments for dark mode */
  [data-theme="dark"] .logo {
    filter: brightness(0) invert(1);
  }

  /* Image adjustments for dark mode */
  [data-theme="dark"] .hero-image,
  [data-theme="dark"] .news-image,
  [data-theme="dark"] .company-image {
    filter: brightness(0.9) contrast(1.1);
  }

  /* Additional dark mode enhancements */
  [data-theme="dark"] .section-title {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  [data-theme="dark"] .news-detail,
  [data-theme="dark"] .price-list li,
  [data-theme="dark"] .feature-list {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
  }

  /* Focus styles */
  .theme-button:focus,
  .lang-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--primary-color);
  }

  /* Selection color */
  ::selection {
    background: var(--primary-color);
    color: var(--bg-color);
  }

  .logo-container {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .logo-container:hover {
    transform: translateY(-2px);
  }

  /* Contact Buttons */
  .contact-buttons {
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
  }

  .contact-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    color: var(--text-color);
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
  }

  .contact-button:hover {
    background: var(--primary-color);
    color: var(--bg-color);
    transform: translateY(-2px);
  }

  .contact-button .icon {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    .navbar-content {
      flex-direction: column;
      padding: 1rem;
    }

    .nav-menu {
      flex-direction: column;
      width: 100%;
      margin: 1rem 0;
    }

    .nav-links {
      flex-direction: column;
      text-align: center;
    }

    .contact-buttons {
      flex-direction: column;
      margin: 1rem 0;
      width: 100%;
    }

    .contact-button {
      justify-content: center;
    }

    .language-controls {
      margin: 1rem 0;
      justify-content: center;
    }
  }

  .see-more-wrapper {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    margin-top: 1rem;
    border-top: 1px solid var(--border-color);
  }

  .see-more-button {
    padding: 0.75rem 2rem;
    background: var(--primary-color);
    color: var(--bg-color);
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .see-more-button:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px var(--shadow-color);
  }

  [data-theme="dark"] .see-more-button {
    background: var(--primary-color);
    color: var(--bg-color);
  }

  [data-theme="dark"] .see-more-button:hover {
    background: var(--primary-dark);
  }

  .news-description {
    font-size: 1.1rem;
    color: var(--primary-color);
    margin: 1rem 0;
    font-weight: 500;
    line-height: 1.6;
  }

  .news-content-text {
    margin-top: 1.5rem;
    line-height: 1.8;
    color: var(--text-color);
  }

  .news-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 12px var(--shadow-color);
    transition: transform 0.3s ease;
  }

  .news-image:hover {
    transform: scale(1.02);
  }

  [data-theme="dark"] .news-image {
    filter: brightness(0.9) contrast(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .visit-notice {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    color: var(--text-color);
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
  }

  .visit-notice:hover {
    background: var(--primary-color);
    color: var(--bg-color);
    transform: translateY(-2px);
  }

  .notice-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1100;
    backdrop-filter: blur(4px);
  }

  .notice-content {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 1rem;
    max-width: 600px;
    width: 90%;
    position: relative;
    box-shadow: 0 4px 24px var(--shadow-color);
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--text-color);
    cursor: pointer;
    padding: 0.5rem;
    line-height: 1;
  }

  .notice-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .notice-content p {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: var(--text-color);
  }

  .notice-footer {
    text-align: center;
  }

  @media (max-width: 768px) {
    .contact-buttons {
      flex-direction: column;
      gap: 0.5rem;
    }

    .visit-notice {
      width: 100%;
      justify-content: center;
    }

    .notice-content {
      width: 95%;
      padding: 1.5rem;
    }
  }
  </style>