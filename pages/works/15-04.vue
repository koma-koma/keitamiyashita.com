<template lang="pug">
  div
    <WorkHeader :work="work" />
    p.ja
      | Joseph Genの楽曲「15-04」のミュージックビデオを制作した。
      br
      | データモッシングやグリッチなどの手法を用いて撮影された映像を加工し、具象と抽象を行き来するような映像表現を行った。

    div.image.is-16by9
      iframe(width="560" height="315" src="https://www.youtube.com/embed/niFK9etVbYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).has-ratio
    p.caption
      | Credit:
      br
      | -
      br
      | Keita Miyashita: Art Direction, Edit
      br
      | Joseph Gen: Music


</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Joseph Gen - 15-04',
        year: 2019,
        tags: [
          'music video', 'python', 'glitch', 'datamoshing',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>