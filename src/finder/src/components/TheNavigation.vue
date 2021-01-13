<template>
    <div class="font-normal leading-snug py-4">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Tree', params: { id: '2'} }">Tree</router-link>
        <router-link :to="{ name: 'Error' }">Error</router-link>
    </div>
</template>

<script>
export default {
    name: 'TheNavigation',
    methods: {},
}
</script>
