<template lang="pug">
  div
    <WorkHeader :work="work" />

    img(src="~assets/image/works/stillmusic/01.png")
    img(src="~assets/image/works/stillmusic/02.png")
    img(src="~assets/image/works/stillmusic/03.jpg")
    div.image.is-16by9
      iframe(title="vimeo-player" src="https://player.vimeo.com/video/222800813" width="640" height="360" frameborder="0" allowfullscreen).has-ratio

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Still Music',
        year: 2017,
        tags: [
          'artwork', 'sound programing', 'puredata', 'openframeworks', 'kinect',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>