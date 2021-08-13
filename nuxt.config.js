import { resolve } from 'path'
require('dotenv').config()


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alkein Villajos • Frontend Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Laravel + VueJS Developer • Highly rated Freelancer in Upwork • UI/UX Designer' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:title", content: 'Alkein Villajos | Laravel + VueJS Developer | Highly rated Freelancer in Upwork' },
      { property: "og:description", content: 'Laravel + VueJS Developer • Highly rated Freelancer in Upwork • UI/UX Designer' },
      { property: "og:image", content: 'https://i.im.ge/2021/08/12/jaTKa.png' },
      { property: "og:type", content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
    ]
  },
  // script: [
  //   {
  //     type: 'text/javascript',
  //     src: '',
  //     body: true
  //   }
  // ],

  target: 'server',

  alias: {
    'style': resolve(__dirname, './assets/scss')
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/',
    '~/components/icons',
    '~/components/sections',
    '~/components/partials'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        // 'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
