export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Redaction Web Valentin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'uikit/dist/css/uikit.min.css',
    '~assets/styles/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
    '@nuxtjs/date-fns'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    'vue-scrollto/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Nuxt Appollo config
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
      }
    }
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  }
}
