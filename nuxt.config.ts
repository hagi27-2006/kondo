// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    
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
        { hid: 'description', name: 'description', content: 'コンドウ印刷株式会社の公式ウェブサイト' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap' }
      ]
    }
  },

  compatibilityDate: '2025-03-06'
})