<template>
    <div v-if="isCurrent" class="notice-container">
        <p class="text-notice">{{ text }}</p>
        <a v-if="url" :href="url" class="url-notice" target="_blank" rel="noopener noreferrer">
            {{ linkText }}
            <img src="@/assets/external-link.svg" alt="" class="ext-icon" aria-hidden="true" />
            <span class="sr-only"> (abre em uma nova aba)</span>
        </a>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    text: string
    expiresAt: string
    url?: string
    linkText?: string
}>()

const isCurrent = computed(() => {
    const expiration = Date.parse(props.expiresAt)

    return Number.isFinite(expiration) && Date.now() < expiration
})
</script>

<style scoped>
.notice-container {
    position: relative;
    z-index: 20;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
    min-width: 0;
    box-sizing: border-box;
    padding: 10px 20px;
    color: #616060;
    background-color: #fff8e1;
    border-left: 4px solid #b77900;
    border-radius: 0 0 4px 4px;
    text-align: left;
}

.text-notice,
.url-notice {
    margin: 0;
    font-size: max(0.7rem, 14px);
    line-height: 1.4;
}

.text-notice {
    font-weight: 600;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
}

.ext-icon {
    height: 0.75em;
    vertical-align: super;
    margin-bottom: -0.15em;
}

@media (max-width: 900px), (orientation: portrait) {
    .notice-container {
        margin-block: 6px;
        padding: 10px;
        border-radius: 4px;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    }
}
</style>
