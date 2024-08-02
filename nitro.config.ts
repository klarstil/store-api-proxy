//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    '/store-api/**': {
      cache: {
        maxAge: 60 * 1 * 60,
        swr: true
      }
    }
  }
});
