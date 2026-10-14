<template>
  <NameGroup v-if="participants.length" name="Especialistas">
    <NameAndTitle
      v-for="person in participants"
      :key="person.name"
      :name="person.name"
      :title="person.title"
    />
  </NameGroup>
</template>

<script setup lang="ts">
import type { Participant } from '@/data/technicalSpecifications'
import NameGroup from '@/components/NameGroup.vue'
import NameAndTitle from '@/components/NameAndTitle.vue'

defineProps<{
  participants: Participant[]
}>()
</script>