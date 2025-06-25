<template>
    <div class="overflow-x-hidden">
        <LayoutsPageHeader class="h-[64px] max-h-[64px]" />
        <LayoutsPageContent>
            <slot />
        </LayoutsPageContent>
        <LayoutsPageFooter class="h-[52px] md:h-[42px]" />
    </div>
</template>
<script setup lang="ts">
</script>
