<template lang="pug">
  div
    <WorkHeader :work="work" />

    img(src="~assets/image/works/simplexnoise/graphic_07.png")
    img(src="~assets/image/works/simplexnoise/graphic_08.png")
    img(src="~assets/image/works/simplexnoise/graphic_09.png")

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Poster Design - Simplex Noise',
        year: 2018,
        tags: [
          'graphic', 'poster', 'openframeworks', 'glsl'
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>