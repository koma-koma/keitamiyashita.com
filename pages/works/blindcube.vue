<template lang="pug">
  div
    <WorkHeader :work="work" />
    
    p
      | ルーバーによる光の明暗とLEDを用い、グラデーションを生成するための立体作品。光を遮蔽する窓のブラインドから着想を得た。
      | デジタルな手法によって光を制御し、それらを混ぜ合わせることによって無段階なアナログのグラデーションを生み出している。
    p.caption
      | paper, arduino, fullcolor LED

    img(src="~assets/image/works/blindcube/01.jpg")
    img(src="~assets/image/works/blindcube/02.jpg")
    img(src="~assets/image/works/blindcube/03.jpg")
    div.image.is-16by9
      iframe(title="vimeo-player" src="https://player.vimeo.com/video/248084378" width="640" height="360" frameborder="0" allowfullscreen).has-ratio

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Blind Cube',
        year: 2017,
        tags: [
          'artwork', 'hardware', 'arduino',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>