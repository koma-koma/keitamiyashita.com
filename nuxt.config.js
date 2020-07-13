export default {
    head: {
        htmlAttrs: {
            lang: 'ja',
            prefix: 'og: http://ogp.me/ns#'
        },
        title: 'keitamiyashita.com',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'This is keitamiyashita\'s website' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'keitamiyashita' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'http://keitamiyashita.com' },
            { hid: 'og:title', property: 'og:title', content: 'keitamiyashita.com' },
            { hid: 'og:description', property: 'og:description', content: 'This is keitamiyashita\'s website' },
            { hid: 'og:image', property: 'og:image', content: '' },
            { name: 'twitter:card', content: 'summary_large_image' },　//twitterの画像サイズ
            { name: 'twitter:description', content: 'This is keitamiyashita\'s website' },
            { name: 'twitter:title', content: 'keitamiyashita.com' },
            { name: 'twitter:image', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
        ],
        script: [
            {
                innerHTML: `(function(d) { var config = { kitId: 'lqg8wau', scriptTimeout: 3000, async: true }, h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s) })(document);`
            },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/101/three.min.js' },
            // { src: 'js/main.js' },
        ],
        __dangerouslyDisableSanitizers: ['script'],

    },
    css: [
        { src: '~/assets/sass/styles.scss', lang: 'scss' },
    ],
    plugins: [
        // { src: '~/plugins/vue-scrollto', ssr: false },
        // { src: '~/plugins/vue-scroll-reveal', ssr: false }
    ],
    modules: [
        'nuxt-fontawesome',
    ],
    fontawesome: {
        imports: [
            {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas']
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: ['fab']
            },
        ]
    },
    buildModules: [
        '@aceforth/nuxt-optimized-images',
    ],
    optimizedImages: {
        optimizeImages: true
    },
}