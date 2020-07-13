<template lang="pug">
  div
    <WorkHeader :work="work" />

    p.ja
      | ハードウェア設計、データビジュアライズ、サウンドデザインを担当。
      | MashupAward2017にて学生部門賞受賞。

    div.image.is-16by9
      iframe(width="1120" height="630" src="https://www.youtube.com/embed/WpTlVXNGO-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).has-ratio
    p.caption
      | movie: Tetsuya Yamaura
    img(src="~assets/image/works/yabacoinsystem/01.png")
    img(src="~assets/image/works/yabacoinsystem/02.png")
    img(src="~assets/image/works/yabacoinsystem/03.png")
    img(src="~assets/image/works/yabacoinsystem/04.png")
    img(src="~assets/image/works/yabacoinsystem/05.png")
    img(src="~assets/image/works/yabacoinsystem/06.png")
    img(src="~assets/image/works/yabacoinsystem/07.png")
    img(src="~assets/image/works/yabacoinsystem/08.png")


</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Yaba Coin System',
        year: 2017,
        tags: [
          'interaction', 'touchdesigner', 'hardware', 'arduino', 'group work',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>