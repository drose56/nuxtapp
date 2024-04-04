// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    domains: ['dog.ceo']
  }
})
