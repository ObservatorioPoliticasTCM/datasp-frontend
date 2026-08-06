import type { SkeletonType } from "@/components/DashboardItemSkeleton.vue"

export type LegendIconType = 'line' | 'dot' | 'square' | 'triangle'

export interface DashboardLegendItem {
  text: string
  color: string
  iconType?: LegendIconType
}

export interface DashboardFilter {
  appid: string
  sheet: string
  showSelections?: boolean
}

export interface ChartItem {
  appid: string
  sheet: string
  label?: string
  mobileHeight?: number
  mobileOrder?: number
  skeletonType?: SkeletonType
  legendItems?: DashboardLegendItem[]
}

export interface DashboardConfig {
  title: string
  subtitle?: string
  downloadLink?: string
  methodologyLink?: string
  identity?: string
  desktopAppId?: string
  desktopSheetId?: string
  filterOpen?: boolean
  filter: DashboardFilter
  charts: ChartItem[]
}
