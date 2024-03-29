// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  },
  i18n: {
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en.js'
    }, {
      code: 'es',
      iso: 'es-ES',
      file: 'es.js'
    }],
    lazy: true,
    langDir: 'types/i18n',
    defaultLocale: 'en'
  },
  css: ['/main.scss'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'DarkLink',
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'darklink', content: 'darklink dev Portfolio' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { property: 'og:title', content: 'Elk' },
        { property: 'og:description', content: 'Brief neuronal connection about Jorge Amado Hernandez Betancourt (darklink) dev.' },
        { property: 'og:image', content: 'https://www.darkiink.com/assets/img/avatar.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image:width', content: '500' },
        { property: 'og:image:height', content: '500' },
        { property: 'og:site_name', content: 'DarkLink' },
        { property: 'og:', content: '' },
        { property: 'twitter:site', content: '@darklink1302' },
        { property: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [{
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      }]
    }
  },
  routeRules: {
    '/manifest.webmanifest': {
      headers: {
        'Content-Type': 'application/manifest+json',
        'Cache-Control': 'public, max-age=0, must-revalidate'
      }
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      type: 'module'
    },
    manifest: {
      name: 'DarkLink',
      short_name: 'DarkLink',
      description: 'Web portfolio for DarkLink Dev',
      theme_color: '#202020',
      icons: [
        {
          src: 'icon32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: 'icon64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'icon128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: 'icon256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: 'icon512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['../**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true
    }
  },
  imports: {
    dirs: [
      'types/**/*.ts',
      'types/*.ts'
    ]
  }
})
