<template lang="pug">
  div
    <WorkHeader :work="work" />

    p.ja
      | 円というプリミティブな形状のパラメータをプログラムで動かすことによって生まれる軌跡を用いたグラフィック。
      br
      | openFrameworksを用い実装した。

    img(src="~assets/image/works/circlevariations/1.png")
    img(src="~assets/image/works/circlevariations/2.png")
    img(src="~assets/image/works/circlevariations/3.png")
    img(src="~assets/image/works/circlevariations/4.png")
    img(src="~assets/image/works/circlevariations/5.png")
    img(src="~assets/image/works/circlevariations/6.png")
    div.image.is-16by9
      iframe(width="560" height="315" src="https://www.youtube.com/embed/MbFkO2J6D4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).has-ratio

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Circle Variations',
        year: 2017,
        tags: [
          'visual', 'openframeworks',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>