// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  imports: {
    dirs: [
      'types/**/*.ts',
      'types/*.ts'
    ]
  }
})
