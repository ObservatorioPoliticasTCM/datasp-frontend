import { computed, onBeforeUnmount, onMounted, readonly, shallowRef, watch } from 'vue'
import type { ComputedRef } from 'vue'
import type { DashboardAnalyticsContext } from '@/types/dashboard'

const DEFAULT_STABILITY_MS = 1000

export function useDashboardActivation(
  candidate: ComputedRef<DashboardAnalyticsContext | null>,
  stabilityMs = DEFAULT_STABILITY_MS,
  canConfirm: ComputedRef<boolean> = computed(() => true),
  onDestinationReached?: (context: DashboardAnalyticsContext) => void,
) {
  const confirmedDashboard = shallowRef<DashboardAnalyticsContext | null>(null)
  let timer: ReturnType<typeof setTimeout> | undefined

  const cancelConfirmation = () => {
    clearTimeout(timer)
    timer = undefined
  }

  const scheduleConfirmation = () => {
    cancelConfirmation()
    if (document.hidden || !canConfirm.value) return

    const context = candidate.value
    timer = setTimeout(() => {
      timer = undefined
      if (document.hidden || !canConfirm.value || candidate.value !== context) return

      if (!context) {
        confirmedDashboard.value = null
        return
      }

      onDestinationReached?.(context)
      if (confirmedDashboard.value?.dashboardId === context.dashboardId) return
      confirmedDashboard.value = context
    }, stabilityMs)
  }

  watch([candidate, canConfirm], scheduleConfirmation, { immediate: true, flush: 'sync' })

  onMounted(() => {
    document.addEventListener('visibilitychange', scheduleConfirmation)
  })

  onBeforeUnmount(() => {
    cancelConfirmation()
    document.removeEventListener('visibilitychange', scheduleConfirmation)
  })

  return { confirmedDashboard: readonly(confirmedDashboard) }
}
