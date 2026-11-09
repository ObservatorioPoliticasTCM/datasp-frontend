type AnalyticsParameters = Record<string, string | number | boolean>

export function sendPageView(parameters: AnalyticsParameters) {
    const analyticsWindow = window as Window & {
        gtag?: (...args: unknown[]) => void
    }

    const gtag = analyticsWindow.gtag
    if(!gtag) return

    const context = {
        dashboard_id: '',
        dashboard_name: '',
        dashboard_anchor: '',
        ...parameters,
    }

    gtag('config', 'G-BJ06FKC39K', {
        ...context,
        update: true,
        send_page_view: false,
    })

    gtag('event', 'page_view', {
        ...context,
        send_to: 'G-BJ06FKC39K',
    })
}

export function clearDashboardContext() {
  const analyticsWindow = window as Window & {
    gtag?: (...args: unknown[]) => void
  }

  const url = new URL(window.location.href)
  url.hash = ''

  analyticsWindow.gtag?.('config', 'G-BJ06FKC39K', {
    page_location: url.href,
    page_title: document.title,
    dashboard_id: '',
    dashboard_name: '',
    dashboard_anchor: '',
    content_type: 'theme',
    update: true,
    send_page_view: false,
  })
}
