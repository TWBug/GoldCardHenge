<template>
    <button
        type="button"
        class="flex items-center border-2 border-primary rounded-md px-6 py-4 text-base leading-none font-bold text-primary focus-primary"
        :class="{'opacity-25 cursor-default': disabled}"
        :disabled="disabled"
        :tabindex="tabindex"
        @click.prevent="action()"
    >
        <span class="flex-shrink-0 flex-center w-4 h-4 mr-4" v-if="direction === 'left'">
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
        <slot></slot>
        <span class="flex-shrink-0 flex-center w-4 h-4 ml-4" v-if="direction === 'right'">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="fill-current w-full"
                :alt="$t('right')"
            >
                <title>{{ $t('right') }}</title>
                <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                />
            </svg>
        </span>
        <span class="flex-shrink-0 flex-center w-4 h-4 ml-4" v-if="direction === 'top'">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                class="fill-current w-full"
                :alt="$t('right')"
            >
                <title>{{ $t('top') }}</title>
                <path
                    d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
                />
            </svg>
        </span>
    </button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'BaseButton',
    props: {
        direction: {
            required: false,
            default: 'right',
            type: String,
        },
        disabled: {
            required: false,
            default: false,
            type: Boolean,
        },
    },
    data() {
        return {};
    },
    watch: {},
    computed: {
        tabindex() {
            return this.disabled === true ? '-1' : 'auto'
        }
    },
    methods: {
        ...mapActions(['setTree']),
        action() {
            if (this.direction === 'left') {
                this.$router.go(-1);
                return;
            }
            if (this.direction === 'top') {
                this.$store.commit('RESET');
                this.$router.push({
                    name: 'Home',
                });
                return;
            }
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
};
</script>
