<template lang="pug">
    footer.is-size-7
        div.content
            p ©2020 keitamiyashita
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    @import '~assets/sass/variables';

    footer {
      position: fixed;
      right: 30px;
      bottom: 20px;

      z-index: 300;
      
      p {
        font-weight: $weight-bold
      }

      @include mobile {
        // position: static;
        width: 100%;

        right: 0;

        // margin-top: 30px;
        text-align: center;
      }
    }
</style>