
export default {
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '박찬민의 웹사이트',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '박찬민의 웹사이트입니다. 개발자로서의 저에 대해 소개하고 있습니다.' },
      { name: 'subject', content: '박찬민의 웹사이트' },
      { name: 'keywords', content: 'ChanMin Park, walkinpcm, pcm, developer, web, front-end, portfolio, 박찬민, 개발자, 웹프론트엔드, 프론트엔드, 포트폴리오' },
      { name: 'copyright', content: '© 2019. walkinpcm. All Rights Reserved.' },

      { name: 'theme-color', content: '#1A1A1A' },

      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'walkinpcm.com' },
      { property: 'og:site_name', content: '박찬민의 웹사이트' },
      { property: 'og:title', content: '박찬민의 웹사이트' },
      { property: 'og:description', content: '박찬민의 웹사이트입니다. 개발자로서의 저에 대해 소개하고 있습니다.' },
      { property: 'og:image', content: '/og.jpg' },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '600' },
      { property: 'og:image:height', content: '315' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: 'walkinpcm.com' },
      { name: 'twitter:site', content: '박찬민의 웹사이트' },
      { name: 'twitter:title', content: '박찬민의 웹사이트' },
      { name: 'twitter:description', content: '박찬민의 웹사이트입니다. 개발자로서의 저에 대해 소개하고 있습니다.' },
      { name: 'twitter:image', content: '/og.jpg' },
      { name: 'twitter:domain', content: 'walkinpcm.com' },
    ],
    link: [
      /* Favicon */
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T', crossorigin: 'anonymous' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/index.scss',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources'
  ],
  googleAnalytics: {
    id: 'UA-87247322-2'
  },
  styleResources: {
    scss: ['./assets/scss/variables.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
