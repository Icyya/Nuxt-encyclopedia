<script lang="ts" setup>
const {awesome} = useAppConfig()

useHead({
    title: awesome.name,
    titleTemplate: `${awesome.name} | %s`,
    meta: [
        {name: 'description', content: awesome.description || ''}
    ]
})
</script>

<template>
    <Body class="antialiased duration-300 transition-colors text-default font-suisse bg-white">
        <NuxtLayout>
            <NuxtLoadingIndicator/>
            <NuxtPage/>
        </NuxtLayout>
    </Body>
</template>
