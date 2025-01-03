export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',  // Tailwind CSS integration
    'shadcn-nuxt',          // ShadCN UI components
    '@pinia/nuxt',          // Pinia for state management
  ],

  // TailwindCSS options (optional)
  tailwindcss: {
    // Optional TailwindCSS configurations
  },

  // Configuration for ShadCN Nuxt Module
  shadcn: {
    /**
     * Prefix for all imported components (optional)
     * Set an empty string to use default naming without a prefix.
     */
    prefix: '',

    /**
     * Directory where the components are stored.
     * By default, ShadCN components will look in "./components/ui",
     * but you can specify your custom directory path.
     */
    componentDir: './components/ui',
  },

  // Additional Nuxt configurations
  build: {
    transpile: ['shadcn-nuxt'],  // Ensure the module is transpiled if necessary
  },

  // Optionally configure TailwindCSS purge to remove unused styles in production
  tailwindcss: {
    // Configure purge options if necessary
  },

  // Pinia store is automatically available in the app
  pinia: {
    // Optional configurations for Pinia, like enabling persistence or devtools
    persist: true,  // Enable persistence if you want to store the state across page reloads
  },
})
