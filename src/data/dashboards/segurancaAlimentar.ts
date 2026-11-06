import type { DashboardConfig } from '@/types/dashboard'

export const segurancaAlimentarDashboards: DashboardConfig[] = [
  {
    title: 'Déficit de altura e excesso de peso em crianças abaixo de 5 anos',
    identity: '1',
    desktopAppId: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
    desktopSheetId: 'bCSqze',
    filter: {
      appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
      sheet: 'bCSqze',
      showSelections: true
    },
    charts: [
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'bCSqze',
        label: 'Déficit de altura e excesso de peso em crianças abaixo de 5 anos',
        mobileOrder: 0,
        mobileHeight: 8
      }
    ]
  },
  {
    title: 'Nascidos Vivos (NV) em condição de baixo peso',
    identity: '2',
    desktopAppId: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
    desktopSheetId: 'a4ac8f85-556d-44c8-8c8b-bb0c4d016ad8',
    filter: {
      appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
      sheet: 'a4ac8f85-556d-44c8-8c8b-bb0c4d016ad8',
      showSelections: true
    },
    charts: [
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'a4ac8f85-556d-44c8-8c8b-bb0c4d016ad8',
        label: 'Nascidos Vivos (NV) em condição de baixo peso',
        mobileOrder: 0,
        mobileHeight: 8
      }
    ]
  }
]
