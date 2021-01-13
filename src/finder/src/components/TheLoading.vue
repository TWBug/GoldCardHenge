<template>
    <div class="absolute inset-0 flex-center z-50">
        <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-24 fill-current">
                <path
                    d="M27.136 52.495c1.377 12.625 12.734 21.747 25.359 20.37s21.747-12.735 20.37-25.36m-3.878.423c1.14 10.438-6.378 19.91-16.915 21.06s-19.92-6.478-21.06-16.916"
                >
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>
            <span class="font-black text-base">{{ $t('loading') }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheLoading',
}
</script>
