<template>
    <div id="finder" class="relative w-full max-w-3xl min-h-64 mx-auto">
        <div v-if="init">
            <router-view :key="view_key"></router-view>
        </div>
        <div class="" v-else>
            <TheLoading />
        </div>
    </div>
</template>

<script>
import TheLoading from './components/TheLoading';
export default {
    name: 'App',
    components: { TheLoading },
    data() {
        return {
            init: false,
        };
    },
    watch: {},
    computed: {
        view_key() {
            return this.$i18n.locale + this.$route.path
        }
    },
    methods: {},
    beforeMount() {
        if (location.pathname.substr(0, 3) === '/zh') {
            this.$i18n.locale = 'zh'
        }
    },
    mounted() {
        this.init = true
        // const vertical_position = document.getElementById('app').getBoundingClientRect().top
        // this.$store.commit('SET_VERTICAL_POSITION', vertical_position)
    }
};
</script>
<style lang="postcss" scoped>
</style>
