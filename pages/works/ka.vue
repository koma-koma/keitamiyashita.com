<template lang="pug">
  div
    <WorkHeader :work="work" />

    p.ja
      | アルゴリズムを用いた映像ジェネレータ。パラメータの操作のみで自然的で混沌とした幅広い表現を行うことを目指した。
      br
      | 実装にはopenFrameworks, GLSLを使用した。

    p.caption case.1
    img(src="~assets/image/works/ka/01.png")
    img(src="~assets/image/works/ka/02.png")
    img(src="~assets/image/works/ka/03.png")
    p.caption case.2
    img(src="~assets/image/works/ka/04.png")
    img(src="~assets/image/works/ka/05.png")
    img(src="~assets/image/works/ka/06.png")

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Video Generater - "Ka"',
        year: 2019,
        tags: [
          'video generator', 'audio visual', 'openframeworks', 'glsl'
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>