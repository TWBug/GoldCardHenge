<template>
    <div v-if="init">
        <BaseHeadline>
            {{ $t('headlines.' + id) }}
        </BaseHeadline>
        <div class="my-2" v-for="(question, index) in questions" :key="index">
            <BaseQuestion :question="question" />
        </div>
        <div class="flex justify-between items-center mt-12">
            <div class="p-4">
                <BaseButton direction="left">{{ $t('back') }}</BaseButton>
            </div>
            <div class="p-4">
                <BaseButton direction="right">{{ $t('next') }}</BaseButton>
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
    name: 'Tree',
    props: ['id'],
    components: { BaseQuestion, BaseHeadline, BaseButton },
    data() {
        return {
            init: false,
        };
    },
    computed: {
        questions() {
            return this.$store.getters.getByTree(parseInt(this.id));
        },
    },
    methods: {
        ...mapActions(['setTree']),
        next() {
            const next_tree = this.$store.getters.getNextTree;
            if (next_tree === -1) {
                this.$router.push({
                    name: 'Result',
                });
                return;
            }
            this.$router.push({
                name: 'Tree',
                params: {
                    id: next_tree,
                },
            });
        },
    },
    beforeMount() {
        if (!this.$store.getters.isTreeValid(this.id)) {
            this.$router.push({
                name: 'Home',
            });
            return;
        }
        if (this.questions.length < 1 && this.$store.getters.getQualifications.length > 0) {
            this.$router.push({
                name: 'Result',
            });
            return;
        }
        this.setTree(this.id);
    },
    mounted() {
        this.init = true;
    },
};
</script>
