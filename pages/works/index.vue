<template lang="pug">
  // div.container
  //   div
  //     ul.is-size-7
  //       li(v-for="tag in tags")
  //         a {{ tag.name }}
  //   div.works.is-multiline
  //     div(v-for="work in works")
  //       nuxt-link(:to="'/works' + work.path")
  //         div.work
  //           h2.is-size-7 {{ work.title }}
  //           img(:src="work.img")


</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      tags: [
        {
          name: 'all',
        },
        {
          name: 'artwork',
        },
        {
          name: 'graphic',
        },
        {
          name: 'interaction',
        },
        {
          name: 'movie',
        },
        {
          name: 'music',
        },
      ],
      works: [
        {
          title: 'BEAT/BIT',
          path: '/beat-bit',
          img: '',
        },
        {
          title: 'Video Generator - "Ka"',
          path: '/ka',
          img: '',
        },
        {
          title: 'Personal',
          path: '/personal',
          img: '',
        },
        {
          title: 'Kenta Tanaka - Is City Yours?',
          path: '/iscityyours',
          img: '',
        },
        {
          title: 'Joseph Gen - 15-04',
          path: '/15-04',
          img: '',
        },
        {
          title: 'Kenji Iwanaga - SHIROATO',
          path: '/shiroato',
          img: '',
        },
        {
          title: 'Takamine Iori - project_nil',
          path: '/projectnil',
          img: '',
        },
        {
          title: 'Precious Jazz Orchestra - With Takamine Iori',
          path: '/pjo-iori',
          img: '',
        },
        {
          title: 'Poster Design - Simplex Noise',
          path: '/simplexnoise',
          img: '',
        },
        {
          title: 'Circle Variations',
          path: '/cirlcevariation',
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
        {
          title: 'Calender: 72 micro-seasons',
          path: '/calender',
          img: '',
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.works {
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}

.work {
  position: relative;
  height: 150px;
    :hover {
      opacity: 0.5;
    }
  img {
    background-color: gray;
    width: 100%;
    height: 100%;
  }
  h2 {
    position: absolute;
    background-color: white;
    bottom: 0;
    font-weight: 700;
  }
}
ul {
  margin-bottom: 20px;
}
li {
  font-weight: 600;
  display: inline-block;
  text-decoration: underline;
  margin-right: 8px;
}

</style>