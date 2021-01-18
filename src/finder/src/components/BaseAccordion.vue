<template>
    <div class="border-b-2 border-gray-400 border-dashed my-4 p-4 pb-8" :data-weight="item.weight">
        <button
            type="button"
            class="w-full flex justify-between items-center text-left focus-primary px-1 -ml-1"
            @click.prevent="toggle(item.id)"
        >
            <span class="flex-grow mr-12">
                <span class="block text-lg font-semibold text-primary mb-1">
                    {{
                        $t('results.headline', {
                            ministery: $t('qualifications.' + item.ministry),
                            regulation: item.regulation_no,
                        })
                    }}
                </span>
                <span class="block text-base font-semibold">
                    {{ $t('results.answer') }}
                    <span class="italic text-gray-700 font-medium">{{
                        getQuestion(item.questions[0])
                    }}</span>
                </span>
            </span>
            <span class="flex-shrink-0 flex-center w-8 h-8 text-primary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="fill-current w-full"
                    :alt="$t('plus')"
                    v-if="!details"
                >
                    <title>{{ $t('plus') }}</title>
                    <path
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="fill-current w-full"
                    :alt="$t('minus')"
                    v-else
                >
                    <title>{{ $t('minus') }}</title>
                    <path
                        d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                    />
                </svg>
            </span>
        </button>
        <div class="block text-base mt-4" v-if="details">
            <div class="flex items-center mb-8" v-if="has_info">
                <span class="flex-shrink-0 flex-center w-3 text-orange-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192 512"
                        class="fill-current w-full"
                        :alt="$t('exclamation')"
                    >
                        <title>{{ $t('exclamation') }}</title>
                        <path
                            d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"
                        />
                    </svg>
                </span>
                <span class="font-medium ml-4 italic">
                    {{ item.info[locale] }}
                </span>
            </div>
            <div class="mb-4" v-if="has_prepare">
                <div class="font-bold">{{ $t('results.prepare') }}</div>
                <div
                    class="flex items-center font-medium my-4"
                    v-for="(element, index) in item.prepare[locale]"
                    :key="index"
                >
                    <div class="flex-shrink-0 w-6 mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            class="fill-current w-full"
                            :alt="$t('file')"
                        >
                            <title>{{ $t('file') }}</title>
                            <path
                                d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"
                            />
                        </svg>
                    </div>
                    {{ element }}
                </div>
            </div>
            <div class="text-sm mb-4" v-else>
                {{ item.notes }}
            </div>
            <div class="flex justify-between items-center pt-4">
                <a :href="item.link" class="flex items-center text-primary font-bold focus-primary">
                    <span class="flex-shrink-0 w-3 mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                            class="fill-current w-full"
                            :alt="$t('next')"
                        >
                            <title>{{ $t('next') }}</title>
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                            />
                        </svg>
                    </span>
                    {{ $t('results.details') }} {{ $t('qualifications.' + item.ministry) }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseAccordion',
    props: {
        item: {
            required: true,
            type: Object,
        },
    },
    data() {
        return {
            details: false,
        };
    },
    watch: {},
    computed: {
        has_info() {
            return this.item.info[this.$i18n.locale] === '' ? false : true;
        },
        has_prepare() {
            return this.item.prepare[this.$i18n.locale].length === 0 ? false : true;
        },
        locale() {
            return this.$i18n.locale;
        },
    },
    methods: {
        getQuestion(id) {
            const question = this.$store.getters.getQuestion(id);
            return question.question_text;
        },
        toggle() {
            this.details = !this.details;
        },
    },
};
</script>
