import type { DashboardConfig } from '@/types/dashboard'

export const saudeCurrent: DashboardConfig[] = [
  {
    title: 'Consultas',
    subtitle: 'Inclui as unidades municipais, estaduais e federais',
    downloadLink: '/dados/saude/consultas.zip',
    methodologyLink: '',
    identity: '1',
    desktopAppId: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
    desktopSheetId: 'EnGpsY',
    filter: {
      appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
      sheet: 'CmsPL',
      showSelections: true
    },
    charts: [
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '57b6bce0-3c86-49d7-87c0-2e2690420f8a',
        mobileOrder: 0,
        skeletonType: 'map'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '3bacdabc-915f-4f33-ab7f-92e10addfe6a',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '3b487c3e-46bb-49bb-b6d1-f07bc78bc34c',
        mobileHeight: 4,
        mobileOrder: 4,
        skeletonType: 'pie'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '76b4690d-f536-4788-b99e-b89eae1c540e',
        mobileHeight: 4,
        mobileOrder: 2,
        skeletonType: 'bar'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '60c5c2ae-6a1e-4986-bee9-6afa7f02e128',
        mobileOrder: 3,
        skeletonType: 'treemap'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '06e488a7-e8f7-43e4-9d4c-90bddc114dd3',
        mobileHeight: 1,
        mobileOrder: 5,
        skeletonType: 'text'
      }
    ]
  },
  {
    title: 'Mortalidade',
    subtitle: 'Inclui óbitos de residentes do município de São Paulo',
    downloadLink: '/dados/saude/mortalidade.zip',
    methodologyLink: '/infos/notas/saude/taxa-de-mortalidade-2024.pdf',
    identity: '2',
    desktopAppId: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
    desktopSheetId: 'hSjCf',
    filter: {
      appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
      sheet: 'b61ed3a1-544e-4be2-8c23-fe9063c63085',
      showSelections: true
    },
    charts: [
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '1bde1b53-2caa-425f-a3dc-da5ff27a1195',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '3242a1b7-9c08-4a9b-a01b-a7132565ab85',
        mobileOrder: 2,
        skeletonType: 'map'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '6e8a22bd-a038-4279-9775-900ca13c62eb',
        mobileOrder: 4,
        skeletonType: 'bar'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '327239ee-6dca-4256-813a-cf18b1cf85cf',
        mobileOrder: 3,
        skeletonType: 'pie'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: 'dcb974b6-95e1-4bc5-991d-d14951cd993c',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'text'
      }
    ]
  },
  {
    title: 'Mortalidade Infantil',
    subtitle: 'Inclui óbitos de residentes do município de São Paulo',
    downloadLink: '/dados/saude/mortalidade.zip',
    identity: '3',
    desktopAppId: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
    desktopSheetId: '7da9eb32-facc-4cef-8254-9905853e0972',
    filter: {
      appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
      sheet: 'b61ed3a1-544e-4be2-8c23-fe9063c63085',
      showSelections: true
    },
    charts: [
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '1bde1b53-2caa-425f-a3dc-da5ff27a1195',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '3242a1b7-9c08-4a9b-a01b-a7132565ab85',
        mobileOrder: 2,
        skeletonType: 'map'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '6e8a22bd-a038-4279-9775-900ca13c62eb',
        mobileOrder: 4,
        skeletonType: 'bar'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '327239ee-6dca-4256-813a-cf18b1cf85cf',
        mobileOrder: 3,
        skeletonType: 'pie'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: 'dcb974b6-95e1-4bc5-991d-d14951cd993c',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'text'
      }
    ]
  },
  {
    title: 'Mortalidade Materna',
    subtitle: 'Inclui óbitos de residentes do município de São Paulo',
    downloadLink: '/dados/saude/mortalidade.zip',
    identity: '4',
    desktopAppId: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
    desktopSheetId: '3423dd31-c14a-4b45-9fda-30390c573164',
    filter: {
      appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
      sheet: 'b61ed3a1-544e-4be2-8c23-fe9063c63085',
      showSelections: true
    },
    charts: [
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '1bde1b53-2caa-425f-a3dc-da5ff27a1195',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '3242a1b7-9c08-4a9b-a01b-a7132565ab85',
        mobileOrder: 2,
        skeletonType: 'map'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '6e8a22bd-a038-4279-9775-900ca13c62eb',
        mobileOrder: 4,
        skeletonType: 'bar'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '327239ee-6dca-4256-813a-cf18b1cf85cf',
        mobileOrder: 3,
        skeletonType: 'pie'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: 'dcb974b6-95e1-4bc5-991d-d14951cd993c',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'text'
      }
    ]
  },
  {
    title: 'Leitos',
    subtitle: 'Inclui leitos das unidades municipais, estaduais e federais',
    downloadLink: '/dados/saude/leitos-internacao-complementares.zip',
    identity: '5',
    desktopAppId: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
    desktopSheetId: 'kPfKtR',
    filter: {
      appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
      sheet: 'a4e288ed-0cc5-4f45-bae5-0f5afeee2113',
      showSelections: true
    },
    charts: [
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '9f22cdfc-2dfe-46fe-8aec-b94a7973211a',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '1b9f6b3c-27a7-4d23-bd8e-edb7c0f617b2',
        mobileOrder: 2,
        skeletonType: 'map'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '00cc9341-af08-4997-a3a8-ca48f5038396',
        mobileOrder: 4,
        skeletonType: 'bar'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: 'd90e1549-26d2-4907-a1e9-e899bc99cc9d',
        mobileOrder: 3,
        skeletonType: 'pie'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '1fbb3d8e-ee73-49e6-92e6-f36b5a3308c4',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'text'
      }
    ]
  },
  {
    title: 'Despesas',
    subtitle: 'Inclui apenas despesas municipais',
    downloadLink: '/dados/saude/despesas.zip',
    identity: '6',
    desktopAppId: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
    desktopSheetId: 'XFZvFPN',
    filter: {
      appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
      sheet: 'a602802b-16f9-40e1-a864-df8be8567e30',
      showSelections: true
    },
    charts: [
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: 'fe47beea-a668-46bd-8fde-37e341f5379b',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: 'c31c537c-dc17-47bd-98c2-ed49b4ae9af6',
        mobileHeight: 2,
        mobileOrder: 4,
        skeletonType: 'treemap'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '9ef2adf8-328f-4020-80d4-e7ea0d3155e4',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '657488d4-7aca-4c4f-8d82-0299686b7e21',
        mobileOrder: 5,
        skeletonType: 'treemap'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: 'b17519e1-5931-4d69-a7be-0c6a9b4e3767',
        mobileOrder: 3,
        skeletonType: 'treemap'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: 'ca956e69-7077-4cad-b097-7dd94bbf085e',
        mobileOrder: 6,
        skeletonType: 'map'
      },
      {
        appid: 'f210ae15-9411-4e4d-bcbd-6d17dace26d2',
        sheet: '26f1e2b4-2359-4857-afd1-f83f34a0957a',
        mobileOrder: 7,
        mobileHeight: 1,
        skeletonType: 'text'
      }
    ]
  }
]
