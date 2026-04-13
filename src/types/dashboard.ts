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
}

export interface DashboardConfig {
  title: string
  subtitle?: string
  downloadLink?: string
  methodologyLink?: string
  gridCols: number
  gridRows: number
  filter: DashboardFilter
  charts: ChartItem[]
}
