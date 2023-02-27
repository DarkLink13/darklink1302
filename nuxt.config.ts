// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    'nuxt-icon'
  ],
  app: {
    head: {
      title: 'DarkLink',
      viewport: 'width=500, initial-scale=1',
      charset: 'utf-16',
      meta: [
        { name: 'darklink', content: 'darklink dev Portfolio' }
      ],
      link: [{
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      }]
    }
  },
  pwa: {
    installPrompt: true,
    registerType: 'autoUpdate',
    workbox: { navigateFallback: null },
    devOptions: {
      enabled: true,
      type: 'module'
    },
    includeAssets: ['favicon.svg'],
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
    }
  },
  imports: {
    dirs: [
      'types/**/*.ts',
      'types/*.ts'
    ]
  }
})
