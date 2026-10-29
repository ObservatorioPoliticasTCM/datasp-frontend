import type { DashboardAnalyticsContext } from "@/types/dashboard";

export function buildDashboardParameters(
    dashboard: DashboardAnalyticsContext,
    themeTitle: string,
) {
    const url = new URL(window.location.href)
    url.hash = dashboard.dashboardAnchor

    const dashboardName = dashboard.dashboardName.replace(/\s+/g, ' ').trim()

    return {
        page_location: url.href,
        page_title: `${dashboardName} | ${themeTitle}`,
        dashboard_id: dashboard.dashboardId,
        dashboard_name: dashboardName,
        dashboard_anchor: dashboard.dashboardAnchor,
        theme_id: dashboard.themeId,
        content_type: 'dashboard',
    }
}