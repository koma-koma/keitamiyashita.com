<template lang="pug">
    div.workheader
        div.columns
            div.column.is-narrow
                p
                    | #[span.year.is-size-6 {{ work.year }}]
            div.column
                p
                    | #[span(v-for="tag in work.tags").tag {{ tag }}]
        h1._title {{ work.title }}
</template>

<script>
export default {
    props: ['work'],
    components: {
    },
    data () {
        return {
        }
    },
}
</script>

<style lang="scss">
@import '~assets/sass/variables';

.workheader {
    margin-bottom: 20px;
    ._title {
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 0.5em;
        text-decoration: underline;
    }
    p {
        margin-bottom: 0px;
    }
    .column {
        text-align: right;
        padding-top: 0;
        padding-bottom: 0;

        @include mobile {
            text-align: left;
        }
    }

    .year {
        position: absolute;
        left: 0;
        font-weight: 800;
        display: inline-block;

        @include mobile {
            position: static;
        }
    }

    .tag {
        margin-right: 8px;
        margin-bottom: 8px;
        // display: inline-block;
        // font-size: 0.75rem;
    }

    span:last-child {
        margin-right: 0;
    }
}

</style>