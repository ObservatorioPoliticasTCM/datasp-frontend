import type { DashboardConfig } from '@/types/dashboard'

export const segurancaAlimentarDashboards: DashboardConfig[] = [
  {
    title: 'Déficit de altura e excesso de peso em crianças abaixo de 5 anos',
    identity: '1',
    desktopAppId: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
    desktopSheetId: 'bCSqze',
    filter: {
      appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
      sheet: 'BXGrh',
      showSelections: true
    },
    charts: [
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'QJPVFm',
        mobileOrder: 0,
        mobileHeight: 8,
        skeletonType: 'text'
      },
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'UjMkbp',
        mobileOrder: 0,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'aa9cc8e4-816e-4f02-8789-b1c3164fa792',
        mobileOrder: 0,
        mobileHeight: 8,
        skeletonType: 'text'
      },
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'NVjzKS',
        mobileOrder: 0,
        mobileHeight: 6,
        skeletonType: 'map'
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
      sheet: 'BXGrh',
      showSelections: true
    },
    charts: [
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: '2cdd254d-8f30-4fcc-b5bb-6a061df81049',
        mobileOrder: 0,
        mobileHeight: 8,
        skeletonType: 'kpi'
      },
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'qMQP',
        mobileOrder: 0,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'f34fee31-840d-4d1c-8d72-2fa0e4cd7ca9',
        mobileOrder: 0,
        mobileHeight: 8,
        skeletonType: 'bar',
        legendItems: [
          {
            text: 'Peso normal',
            color: '#cfe8cd',
            iconType: 'square'
          },
          {
            text: 'Baixo peso',
            color: '#df804a',
            iconType: 'square'
          }
        ]
      },
      {
        appid: 'd92a6d27-0010-49b1-a5af-6dbb1a875175',
        sheet: 'ektvhm',
        mobileOrder: 0,
        mobileHeight: 3,
        skeletonType: 'kpi'
      }
    ]
  }
]
