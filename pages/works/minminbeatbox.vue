<template lang="pug">
  div
    <WorkHeader :work="work" />

    p.ja
      // | 煩わしいセミの鳴き声を
      | ハードウェア設計、サウンドプログラミング、サウンドデザイン、ロゴデザインを担当。
      br
      | HACK U TOKYO 2017にて最優秀賞、ハッピーハッキング賞を受賞。第23回学生CGコンテストノミネート作品。

    p.caption
      | wood, ipad, cicada, microphone, raspberry pi, fullcollor LED

    div.image.is-16by9
      iframe(width="560" height="315" src="https://www.youtube.com/embed/ksHpQuMxZig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).has-ratio
    p
    img(src="~assets/image/works/minminbeatbox/01.png")
    img(src="~assets/image/works/minminbeatbox/02.jpg")
    img(src="~assets/image/works/minminbeatbox/03.png")
    img(src="~assets/image/works/minminbeatbox/04.jpg")
    p.caption.ja
      | HACK U TOKYO 2017での展示の様子

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'MIN MIN Beatbox',
        year: 2017,
        tags: [
          'interaction', 'sound programing', 'hardware', 'puredata', 'raspberry pi', 'arduino', 'group work',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>