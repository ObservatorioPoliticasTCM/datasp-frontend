import type { SkeletonType } from "@/components/DashboardItemSkeleton.vue"

export interface DashboardFilter {
  appid: string
  sheet: string
  showSelections?: boolean
}

export interface ChartItem {
  appid: string
  sheet: string
  mobileHeight?: number
  mobileOrder?: number
  skeletonType?: SkeletonType
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
