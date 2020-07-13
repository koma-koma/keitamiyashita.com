<template lang="pug">
  div.wrapper
    div.columns
      // div.column.is-narrow
      <HeaderMenu />
      // div.column.is-8
      main.column.is-8
        <nuxt />
      <Footer />
</template>

<script>
export default {
  components: {
    HeaderMenu: () => import('~/components/HeaderMenu'),
    Footer: () => import('~/components/Footer')
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
  @import '~assets/sass/variables';

  .wrapper{
    margin: 25px 30px;
    max-width: 1152px;

    @include mobile {
      margin: 25px 25px;
    }
  }

  main {
    @include mobile {
      position: relative;
      top: 32px;
      margin-bottom: 128px;
    }
  }

  .container {
  margin-top: 8px;
  
}
</style>
