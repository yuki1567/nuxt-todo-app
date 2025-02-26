// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: "Nuxt Todo App",
      meta: [{ charset: "utf-8" }],
    },
  },
  devServer: {
    port: 3001,
  },
});
