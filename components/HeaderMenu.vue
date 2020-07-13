<template lang="pug">
    header.column.is-narrow
        div.nav
            div.navheader
                h1.is-size-5
                    nuxt-link(to="/") keitamiyashita.com
                    // nuxt-link(to="/") KEITAMIYASHITA
                a(:class="{ 'is-active': isActive }" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="changeNavVisibility()" ).is-hidden-tablet-only
                    span(aria-hidden="true")
                    span(aria-hidden="true")
                    span(aria-hidden="true")

            div(:class="{ 'is-show': isActive }").navmenu
                ul(v-on:click="changeNavVisibility()")
                    // li(v-for="work in works")
                    //     nuxt-link(:to="work.path") {{work.title}}
                    li
                        nuxt-link(to="/profile") profile
                    li
                        p works
                        // nuxt-link(to="/works") works
                        ul.categories
                            li(v-for="category in works_category")
                                p {{ category.name }}
                                ul.works
                                    li(v-for="work in category.works").is-size-7
                                        nuxt-link(:to="'/works' + work.path") {{work.title}}
                    // li
                    //     a(href="mailto:keikei12@gmail.com") contact
                div.font-awesome
                    a(href="mailto:koma.keitamiyashita@gmail.com")
                        font-awesome-icon(:icon="['fas', 'envelope']")
                    a(href="http://twitter.com/internet_club2" target="_blank")
                        font-awesome-icon(:icon="['fab', 'twitter']")
                    a(href="http://instagram.com/koma12" target="_blank")
                        font-awesome-icon(:icon="['fab', 'instagram']")
                    a(href="http://github.com/koma-koma" target="_blank")
                        font-awesome-icon(:icon="['fab', 'github']")
                    a(href="https://vimeo.com/keitamiyashita" target="_blank")
                        font-awesome-icon(:icon="['fab', 'vimeo']")
            div(:class="{ 'is-show': isActive }" v-on:click="changeNavVisibility()").bg
</template>

<script>
export default {
    data () {
        return {
            isActive: false,
            works_category: [
                {
                    name: 'artwork',
                    works: [
                        {
                            title: 'BEAT/BIT',
                            path: '/beat-bit',
                            img: '',
                        },
                        {
                            title: 'Personal',
                            path: '/personal',
                            img: '',
                        },
                        {
                            title: 'Blind Cube',
                            path: '/blindcube',
                            img: '',
                        },
                        {
                            title: 'Sound in a Bottle',
                            path: '/soundinabottle',
                            img: '',
                        },
                        {
                            title: 'Still Music',
                            path: '/stillmusic',
                            img: '',
                        },
                    ],
                },
                {
                    name: 'interaction',
                    works: [
                        // {
                        //     title: 'Kenta Tanaka - Is City Yours?',
                        //     path: '/iscityyours',
                        //     img: '',
                        // },
                        {
                            title: 'Yaba Coin System',
                            path: '/yabacoinsystem',
                            img: '',
                        },
                        {
                            title: 'MIN MIN Beatbox',
                            path: '/minminbeatbox',
                            img: '',
                        },
                    ],
                },
                {
                    name: 'visual',
                    works: [
                        {
                            title: 'Video Generator - "Ka"',
                            path: '/ka',
                            img: '',
                        },
                        // {
                        //     title: 'Joseph Gen - 15-04',
                        //     path: '/15-04',
                        //     img: '',
                        // },
                        {
                            title: 'Poster Design - Simplex Noise',
                            path: '/simplexnoise',
                            img: '',
                        },
                        {
                            title: 'Circle Variations',
                            path: '/circlevariations',
                            img: '',
                        },
                    ],
                },
                // {
                //     name: 'graphic',
                //     works: [
                //         {
                //             title: 'Precious Jazz Orchestra - With Takamine Iori',
                //             path: '/pjo-iori',
                //             img: '',
                //         },
                //         {
                //             title: 'Takamine Iori - project_nil',
                //             path: '/projectnil',
                //             img: '',
                //         },
                //         {
                //             title: 'Calender: 72 micro-seasons',
                //             path: '/calender',
                //             img: '',
                //         },
                //     ],
                // },
                // {
                //     name: 'music',
                //     works: [
                //         {
                //             title: 'Keniji Iwanaga - SHIROATO',
                //             path: '/shiroato',
                //             img: '',
                //         },
                //     ],
                // },
            ],
        };
    },
    methods: {
        changeNavVisibility() {
            this.isActive = !this.isActive;
        }
    }
};
</script>

<style lang="scss">
    @import '~assets/sass/variables';

    header {
        width: 220px;
        height: 100vh;

        h1 {
            margin-bottom: 10px;
        }
        ul {
            margin-bottom: 15px;
            // height: 30px;
        }
        li {
            margin: 5px 0;
            .nuxt-link-exact-active {
                opacity: 0.6;
            }
        }

        .categories {
            margin-left: 4px;
            padding-left: 12px;
            border-left: 1px solid #DDD;
            p {
                font-weight: 700;
                font-size: 0.9rem;
            }
        }

        .works {
            margin-left: 8px;
            font-weight: 500;

        }

        .font-awesome {
            font-size: 20px;
            a {
                margin-right: 12px;
            }
        }

        @include mobile {
            position: fixed;
            top: 0;
            left: 0;

            padding-top: 0 !important;
            padding-right: 0 !important;

            width: 100%;
            height: 52px;

            z-index: 100;

            .navheader {
                position: relative;
                display: flex;
                h1 {
                    margin: auto 0;
                }
                z-index: 100;
            }

            .navmenu {
                // height: 100vh;
                position: fixed;
                // display: none;

                visibility: collapse;
                opacity: 0;

                z-index: 100;

                transition: opacity 0.3s, visibility 0.3s;
            }

            .bg {
                background-color: rgba(255, 255, 255, 0.9);

                position: fixed;
                top: 0;
                left: 0;

                visibility: hidden;
                opacity: 0;

                width: 100%;
                height: 100vh;

                z-index: 10;

                transition: opacity 0.3s, visibility 0.3s;
            }

            .is-show {
                visibility: visible;
                opacity: 1;
            }

        }
    }
    
</style>