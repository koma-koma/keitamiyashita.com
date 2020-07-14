<template lang="pug">
  div
    <WorkHeader :work="work" />

</template>

<script>
export default {
  components: {
    WorkHeader: () => import('~/components/WorkHeader'),
  },
  data () {
    return {
      work: {
        title: 'Takamine Iori - project_nil',
        year: 2018,
        tags: [
          'graphic', 'cd',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>