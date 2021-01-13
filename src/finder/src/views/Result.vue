<template>
    <div v-if="init">
        <BaseHeadline icon="result" v-if="has_result">
            {{ $tc('headlines.result', result.length, { count: result.length }) }}
        </BaseHeadline>
        <BaseHeadline icon="no_result" v-else>
            {{ $t('headlines.no_result') }}
        </BaseHeadline>
        <div class="border-t-2 border-gray-400 border-dashed">
            <div
                class="border-b-2 border-gray-400 border-dashed text-base font-regular p-4"
                v-if="!has_result"
            >
                {{ $t('info_no_result') }}
            </div>
        </div>
        <BaseAccordion :item="item" v-for="(item, index) in result" :key="index" />
        <div class="flex justify-center items-center mt-12">
            <div class="p-4">
                <BaseButton direction="top">{{ $t('restart') }}</BaseButton>
            </div>
        </div>
    </div>
</template>

<script>
import BaseHeadline from '../components/BaseHeadline';
import BaseAccordion from '../components/BaseAccordion';
import BaseButton from '../components/BaseButton';
import { mapState } from 'vuex';
export default {
    name: 'Result',
    components: { BaseHeadline, BaseButton, BaseAccordion },
    data() {
        return {
            init: false,
        };
    },
    computed: {
        ...mapState(['questions', 'tree_list']),
        has_result() {
            return this.result.length > 0 ? true : false;
        },
        result() {
            return this.$store.getters.getQualifications;
        },
    },
    methods: {},
    beforeMount() {
        if (this.tree_list.length < 1) {
            this.$router.push({
                name: 'Home',
            });
            return;
        }
        localStorage.setItem('finder', this.result.length);
        this.init = true;
    },
};
</script>
