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
        <div class="flex justify-between items-center mt-12">
            <div class="p-4">
                <BaseButton direction="top">{{ $t('restart') }}</BaseButton>
            </div>
            <div class="p-4" v-if="has_result">
                <a
                    :href="link_apply"
                    class="flex items-center border-2 border-primary rounded-md px-6 py-4 text-base leading-none uppercase font-bold text-primary focus-primary"
                >
                    {{ $t('start_application') }}
                    <span class="flex-shrink-0 flex-center w-4 h-4 ml-4">
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
                        </svg> </span
                ></a>
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
    props: ['hash'],
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
        link_apply() {
            return '/' + this.$i18n.locale + '/apply/step-2/';
        },
    },
    methods: {
        setStorage(item, value) {
            try {
                localStorage.setItem(item, value);
                return true;
            } catch (e) {
                if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
                    alert(this.message);
                }
                this.setCookie(item, value);
                return false;
            }
        },
        getStorage(item) {
            try {
                return localStorage.getItem(item).replace(/(<([^>]+)>)/gi, '');
            } catch (e) {
                if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
                    alert(this.message);
                }
                return this.getCookie(item);
            }
        },
        setCookie(item, value) {
            var expires = '';
            var date = new Date();
            date.setTime(date.getTime() + 12 * 30 * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
            document.cookie = item + '=' + value + expires + '; path=/';
        },
        getCookie(item) {
            var itemValue = document.cookie.match('(^|;) ?' + item + '=([^;]*)(;|$)');
            return itemValue ? itemValue[2].replace(/(<([^>]+)>)/gi, '') : null;
        },
    },
    beforeMount() {
        if (this.tree_list.length < 1) {
            this.$router.push({
                name: 'Home',
            });
            return;
        }
        var storage = this.getStorage('ta-check.application');
        if (storage === null) {
            storage = [];
        } else {
            try {
                storage = JSON.parse(storage);
            } catch (e) {
                console.warn('Visa Finder - storage file corrupted');
                storage = [];
            }
        }
        this.setStorage('tgc_visa_finder', this.result.length);
        if (this.has_result) {
            if (storage.indexOf(this.hash) === -1) {
                storage.push(this.hash);
            }
            this.setStorage('ta-check.application', JSON.stringify(storage));
        }
        this.init = true;
    },
};
</script>
