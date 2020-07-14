<template lang="pug">
  div
    <WorkHeader :work="work" />

    p.ja
      | グラスハープの原理を用いた可聴化機。グラス内に浮かんだ水風船を上下させることで水位を変化させ、音程を制御する。
      br
      | 本来人間が知覚することのできない情報などを音に変換し聴くことができるようにすることを、可聴化やソフィケーションと呼ぶ。
      | 本作品は連続的な音の変化をコンピュータによって電気的に発生させるのではなく、物理的な発音原理を用いて情報の可聴化を行うデバイスである。
      br
      | このデバイスを用い、鑑賞者の生体情報を音に変換して聴くことのできるサウンドインスタレーション作品「Personal」として中原貴文との共同制作を行い、#[a(href="http://ic.jssa.info/index_2017.html") インターカレッジ・ソニック・アーツフェスティバル2017]にて展示を行った。
    p.caption
      | glass, baloon, stepping motor, arduino, aclyric plate, water

    img(src="~assets/image/works/personal/01.jpg")
    img(src="~assets/image/works/personal/02.jpg")

    div.image.is-16by9
      iframe(title="vimeo-player" src="https://player.vimeo.com/video/434839533" width="640" height="360" frameborder="0" allowfullscreen).has-ratio
    div.image.is-16by9
      iframe(title="vimeo-player" src="https://player.vimeo.com/video/436865392" width="640" height="360" frameborder="0" allowfullscreen).has-ratio

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Personal: Glassharp Sonificator',
        year: 2017,
        tags: [
          'artwork', 'sound installation', 'hardware', 'arduino', 'touchdesigner'
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>