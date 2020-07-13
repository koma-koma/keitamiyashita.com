<template lang="pug">
  div.container.work
    <nuxt-child />


</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    };
  },
}
</script>

<style lang="scss">
.work {
  h2 {
    font-weight: 700;
  }
  p {
    margin: 0.5em 0 2em 0;
    font-size: 0.75rem;
  }
  li {
    // margin-left: 20px;
    font-weight: 400;
    // list-style-type: circle;
  }
  a {
    text-decoration: underline;
  }
  blockquote {
    margin-left: 16px;
  }

  .caption {
    font-style: italic; 
  }
}

</style>