<template>
    <div>
        <welfare-item/>
        <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
        ></v-skeleton-loader>
    </div>
</template>
<script>
import WelfareItem from '../components/WelfareItem.vue'
export default {
    name: 'Index',
    props: {},
    components: {
        WelfareItem
    },
    data: () => ({
    }),
    methods: {},
    created() {
    },
    mounted() {},
    destroyed() {},
}
</script>