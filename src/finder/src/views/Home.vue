<template>
    <div>
        <BaseHeadline>
            {{ $t('headlines.home') }}
        </BaseHeadline>
        <div class="flex flex-col">
            <div class="my-2" v-for="(question, index) in questions" :key="index">
                <BaseQuestion :question="question" />
            </div>
        </div>
        <div class="flex justify-end items-center mt-12">
            <div class="flex-shrink-0 w-full sm:w-1/2 flex items-center justify-end p-4">
                <div
                    class="text-sm leading-snug font-semibold text-nav-end text-right pr-4"
                    v-if="disabled"
                >
                    {{ $t('info_no_selection') }}
                </div>
                <BaseButton :disabled="disabled">{{ $t('next') }}</BaseButton>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '../components/BaseButton';
import BaseQuestion from '../components/BaseQuestion';
import BaseHeadline from '../components/BaseHeadline';
import { mapActions } from 'vuex';
export default {
    name: 'Home',
    components: { BaseQuestion, BaseHeadline, BaseButton },
    data() {
        return {
            init: false,
        };
    },
    computed: {
        questions() {
            return this.$store.getters.getHome;
        },
        disabled() {
            return !this.$store.getters.hasSelected;
        },
    },
    methods: {
        ...mapActions(['toggleActive', 'setTree']),
        next() {
            this.$router.push({
                name: 'Tree',
                params: {
                    id: this.$store.getters.getNextTree,
                },
            });
        },
    },
    beforeMount() {
        this.setTree();
    },
};
</script>
