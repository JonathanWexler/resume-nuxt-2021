export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  router: {
    base: "/",
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "%s - Jon Wexler",
    title: "Jon Wexler | Code, Design, Opportunity ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  generate: {
    fallback: true, // Enables fallback for static site generation
  },
  /*
   ** Global CSS
   */
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "vue-image-lightbox/dist/vue-image-lightbox.min.css",
    "~/assets/fonts/Cabin-Regular.ttf",
    "~/assets/fonts/SignikaNegative-Light.otf",
    "~/assets/main.css",
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/fontawesome.js",
    "~/plugins/vue-lazyload.js",
    {
      src: "~/plugins/vue-frappe.js",
      ssr: false,
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],
  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:3000", // Set base API URL
    proxy: true, // Enable proxy
  },
  proxy: {
    "/api/rss": {
      target: "https://jonwexler.substack.com/feed",
      pathRewrite: { "^/api/rss": "" },
      changeOrigin: true,
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    babel: {
      compact: true,
    },
  },
  pageTransition: {
    name: "right",
    mode: "out-in",
    duration: 500,
    enterClass: "enter",
    enterToClass: "",
    enterActiveClass: "enter-active",
    leaveClass: "",
    leaveToClass: "leave",
    leaveActiveClass: "leave-active",
  },
};
