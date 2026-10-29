type AnalyticsParameters = Record<string, string | number | boolean>

export function sendPageView(parameters: AnalyticsParameters) {
    const analyticsWindow = window as Window & {
        gtag?: (...args: unknown[]) => void
    }

    analyticsWindow.gtag?.('event', 'page_view', {
        ...parameters,
        send_to: 'G-BJ06FKC39K',
    })
}