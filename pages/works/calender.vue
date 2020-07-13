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
        title: 'Calender: 72 micro-seasons',
        year: 2016,
        tags: [
          'graphic', 'calender',
        ]
      }
    }
  },
}
</script>

<style lang="scss">

</style>