<template lang="pug">
  div
    <WorkHeader :work="work" />

    p.ja
      | 煩わしい夏のセミの鳴き声をエキサイティングにするデバイス。捕まえたセミの鳴き声をリアルタイムでサンプリングし演奏を行う。機体には捕えたセミを入れることができ、音楽に合わせ鮮やかなライトがパフォーマーのようにセミを照らす。
      | ハードウェア設計、サウンドプログラミング、サウンドデザイン、ロゴデザインを担当。
      | #[a(href="https://hacku.yahoo.co.jp/hacku2017tokyo/") HACK U TOKYO 2017]にて最優秀賞、ハッピーハッキング賞を受賞。#[a(href="https://campusgenius.jp/2017/") 第23回学生CGコンテスト]ノミネート作品。

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
      | ▲HACK U TOKYO 2017での展示の様子

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