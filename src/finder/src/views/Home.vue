<template>
    <div>
        <BaseHeadline>
            {{ $t('headlines.home') }}
        </BaseHeadline>
        <div class="flex flex-col">
            <div class="my-1" v-for="(question, index) in questions" :key="index">
                <BaseQuestion :question="question" />
            </div>
        </div>
        <div class="flex justify-between items-center mt-12">
            <div class="w-1/2 p-4">
                <a
                    :href="link_previous"
                    class="flex items-center border-2 border-primary rounded-md px-4 py-2 text-base leading-none font-bold text-primary focus-primary"
                >
                    <span class="flex-center w-4 h-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                            class="fill-current w-full"
                            :alt="$t('left')"
                        >
                            <title>{{ $t('left') }}</title>
                            <path
                                d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                            />
                        </svg>
                    </span>
                    <span class="ml-4"
                        ><span class="block font-bold text-base">{{ $t('previous_step') }}</span>
                        <span class="block font-medium text-xs">{{ $t('application_easy_mode') }}</span></span
                    >
                </a>
            </div>
            <div class="flex flex-col sm:flex-row justify-end items-center w-1/2 p-4">
                <div
                    class="text-xs leading-snug font-semibold text-nav-end text-right pr-4"
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
        link_previous() {
            return '/' + this.$i18n.locale + '/apply/';
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
