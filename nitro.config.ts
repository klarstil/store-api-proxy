//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    '/store-api/**': {
      proxy: 'https://korodrogerie.de/store-api/**'
    }
  }
});
