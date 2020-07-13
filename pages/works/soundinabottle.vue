<template lang="pug">
  div
    <WorkHeader :work="work" />

    img(src="~assets/image/works/soundinabox/01.jpg")
    img(src="~assets/image/works/soundinabox/02.jpg")
    div.image.is-16by9
      iframe(title="vimeo-player" src="https://player.vimeo.com/video/434816061" width="640" height="360" frameborder="0" allowfullscreen).has-ratio

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Sound in a Bottle',
        year: 2017,
        tags: [
          'artwork', 'soundart', 'hardware', 'arduino',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>