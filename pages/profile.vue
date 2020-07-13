<template lang="pug">
  div.container.is-size-7
    img(src="~assets/image/profile.jpg")

    h1 #[span.ja 宮下 恵太] / KEITA miyashita
    p sound artist / guitarist / designer / engineer
    p.ja
      | 1995年生まれ。北海道出身。東京在住。
      // br
      // | 大学ではデザインやメディアアートを学び、通信技術とサウンドアートに関する研究を行う。
      // br
      // | プログラミングやハードウェアなどの一般化したテクノロジーを手段として技術、音、物を主題とした作品の制作を行っている。
      // br
      // | 

    p.ja
      | 2020　首都大学東京（現東京都立大学）大学院システムデザイン研究科インダストリアルアート学域修了
      br
      | 2017　首都大学東京（現東京都立大学）システムデザイン学部インダストリアルアートコース卒業

    ul.ja
      li - 電子工作 / 基板設計(Eagle) / Arduino / Raspberry Pi
      li - openFrameworks / Processing / GLSL
      li - HTML / CSS / javascript / Nuxt.js(静的ページ構築)
      li - Python / Django / Flask
      li - PureData / Max
      li - TouchDesigner / Unity
      li - Adobe Illustrator / Adobe Photoshop
      li - Adobe Premiere Pro / Adobe AfterEffects

</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5em;
}
p {
  margin-bottom: 2em;
}
li {
  // margin-left: 20px;
  font-weight: 400;
  // list-style-type: circle;
}

</style>