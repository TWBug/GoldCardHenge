<template>
    <button
        class="flex items-center font-semibold text-lg text-left py-1 focus-primary"
        :class="{ 'text-primary': !question.selected, 'text-green-700': question.selected }"
        :data-id="question.id"
        :data-tree="question.tree_id"
        @click.prevent="toggleActive(question.id)"
        role="checkbox"
        :aria-checked="question.selected"
        :title="title"
    >
        <transition name="fade" mode="out-in">
            <span class="flex-shrink-0 h-8 w-8 mr-4" v-if="question.selected" key="selected">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="fill-current w-full"
                    :alt="$t('check')"
                >
                    <title>{{ $t('check') }}</title>
                    <path
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    />
                </svg>
            </span>
            <span class="flex-shrink-0 h-8 w-8 mr-4" v-else key="notselected">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="fill-current w-full"
                    :alt="$t('circle')"
                >
                    <title>{{ $t('circle') }}</title>
                    <path
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
                    />
                </svg>
            </span>
        </transition>
        <span>
            {{ question.question_text[this.$i18n.locale] }}
        </span>
    </button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'BaseQuestion',
    props: {
        question: {
            required: true,
            type: Object,
        },
    },
    data() {
        return {};
    },
    watch: {},
    computed: {
        title() {
            if (this.question.selected) {
                return this.$t('unselect_question');
            }
            return this.$t('select_question');
        },
    },
    methods: {
        ...mapActions(['toggleActive']),
    },
};
</script>