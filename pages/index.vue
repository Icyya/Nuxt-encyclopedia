<template>
    <div class="text-2xl">
        Index
        <br>
        <NuxtTime :datetime="Date.now()" year="numeric"
                  month="long"
                  day="numeric"
                  hour="2-digit"
                  minute="2-digit" />
        <br>
        <NuxtTime :datetime="Date.now() - 5 * 60 * 1000" relative />
    </div>
</template>

<script setup lang="ts">
definePageMeta({layout: 'page'})
</script>

<style scoped>

</style>
