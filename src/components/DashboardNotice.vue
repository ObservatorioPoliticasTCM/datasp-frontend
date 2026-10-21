<template>
    <div class="notice-container">
        <p class="text-notice">{{ text }}</p>
        <a v-if="url" :href="url" class="url-notice">
            {{ linkText }}
        </a>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    text: string
    expiresAt: string
    url?: string
    linkText?: string
}>()
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

.url-notice {
    max-width: 100%;
    color: #1559eb;
    text-decoration: underline;
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
