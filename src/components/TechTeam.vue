<template>
  <div
    v-if="workingGroups.length || visibleGroups.length"
    class="tech-team"
  >
    <div class="team-title">Equipe Técnica</div>

    <TechGroup
      v-for="group in workingGroups"
      :key="group.name"
      :name="group.name"
      :url="group.url"
    >
      <NameAndTitle
        v-for="person in group.participants"
        :key="person.name"
        :name="person.name"
        :title="person.title"
        remove-bottom-margin
      />
    </TechGroup>

    <NameGroup
      v-for="group in visibleGroups"
      :key="group.name"
      :name="group.name"
      :border="false"
    >
      <NameAndTitle
        v-for="person in group.participants"
        :key="person.name"
        :name="person.name"
        :title="person.title"
      />
    </NameGroup>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type {
  ParticipantGroup,
  WorkingGroup,
} from '@/data/technicalSpecifications'
import TechGroup from '@/components/TechGroup.vue'
import NameAndTitle from '@/components/NameAndTitle.vue'
import NameGroup from '@/components/NameGroup.vue'

const props = defineProps<{
  groups: ParticipantGroup[]
  workingGroups: WorkingGroup[]
}>()

const visibleGroups = computed(() =>
  props.groups.filter(group => group.participants.length > 0)
)
</script>

<style scoped>
.tech-team {
  text-align: left;
  border: 0.0625rem solid rgba(255, 255, 255, 0.75);
  border-radius: 0.5rem;
  padding: 0.9em 1.1em 1.2em;
}

.team-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1em;
  border-top: 0.1em solid #fff;
  border-bottom: 0.0625em solid #fff;
  padding-top: 0.6em;
  margin-bottom: 0.4em;
}
</style>
