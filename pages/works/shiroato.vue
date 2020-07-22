<template lang="pug">
  div
    <WorkHeader :work="work" />

    p.ja
      | 岩永賢治・秋山昌大による短編映画「城跡」の音楽を担当した。
      br
      | 第7回八王子ShortFilm映画祭学生部門準グランプリ作品。
    img(src="~assets/image/works/shiroato/01.jpg")
    img(src="~assets/image/works/shiroato/02.jpg")
    img(src="~assets/image/works/shiroato/03.jpg")
    img(src="~assets/image/works/shiroato/04.jpg")
    img(src="~assets/image/works/shiroato/05.jpg")
    div.image.is-16by9
      iframe(width="560" height="315" src="https://www.youtube.com/embed/nGmFnwcdE9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).has-ratio
    p.caption
      | Credit:
      br
      | -
      br
      | 出演：元々、古谷蓮、張芮
      br
      | 監督・脚本・編集：岩永賢治、秋山昌大
      br
      | 撮影：岩永賢治
      br
      | 音楽：宮下恵太


</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'SHIROATO',
        year: 2019,
        tags: [
          'music', 'movie', 'soundtrack', 'guitar',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>