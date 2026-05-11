import type { SkeletonType } from "@/components/DashboardItemSkeleton.vue"

export interface DashboardFilter {
  appid: string
  sheet: string
  showSelections?: boolean
}

export interface ChartItem {
  appid: string
  sheet: string
  colSpan?: number
  rowSpan?: number
  mobileHeight?: number
  mobileOrder?: number
  skeletonType?: SkeletonType
}

export interface DashboardConfig {
  title: string
  subtitle?: string
  downloadLink?: string
  methodologyLink?: string
  gridCols: number
  gridRows: number
  identity?: string
  filter: DashboardFilter
  charts: ChartItem[]
}
