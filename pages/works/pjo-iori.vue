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
        title: 'Precious Jazz Orchestra - With Takamine Iori',
        year: 2020,
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