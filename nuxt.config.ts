// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/sitemap'
  ],

  css: [
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  ssr: true,

  app: {
    head: {
      title: 'コンドウ印刷株式会社',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'コンドウ印刷株式会社の公式ウェブサイト' },
        { name: 'google-site-verification', content: 'zqNu8NQEFYmvzhwb4FbLwsBlrEF4J0ziy3Ewe9riRvw' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap' }
      ]
    }
  },

  compatibilityDate: '2025-03-06',

  runtimeConfig: {
    public: {
      siteUrl: 'https://kondo-printing.vercel.app'
    }
  }
})
