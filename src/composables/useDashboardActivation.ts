import { onBeforeUnmount, onMounted, readonly, shallowRef, watch } from 'vue'
import type { ComputedRef } from 'vue'
import type { DashboardAnalyticsContext } from '@/types/dashboard'

const DEFAULT_STABILITY_MS = 1000

export function useDashboardActivation(
  candidate: ComputedRef<DashboardAnalyticsContext | null>,
  stabilityMs = DEFAULT_STABILITY_MS,
) {
  const confirmedDashboard = shallowRef<DashboardAnalyticsContext | null>(null)
  let timer: ReturnType<typeof setTimeout> | undefined

  const cancelConfirmation = () => {
    clearTimeout(timer)
    timer = undefined
  }

  const scheduleConfirmation = () => {
    cancelConfirmation()
    if (document.hidden) return

    const context = candidate.value
    timer = setTimeout(() => {
      timer = undefined
      if (document.hidden || candidate.value !== context) return

      if (!context) {
        confirmedDashboard.value = null
        return
      }

      if (confirmedDashboard.value?.dashboardId === context.dashboardId) return
      confirmedDashboard.value = context
    }, stabilityMs)
  }

  watch(candidate, scheduleConfirmation, { immediate: true, flush: 'sync' })

  onMounted(() => {
    document.addEventListener('visibilitychange', scheduleConfirmation)
  })

  onBeforeUnmount(() => {
    cancelConfirmation()
    document.removeEventListener('visibilitychange', scheduleConfirmation)
  })

  return { confirmedDashboard: readonly(confirmedDashboard) }
}
