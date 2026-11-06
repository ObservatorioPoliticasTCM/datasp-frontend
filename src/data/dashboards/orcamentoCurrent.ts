import type { DashboardConfig } from '@/types/dashboard'

export const orcamentoCurrent: DashboardConfig[] = [
  {
    id: 'orcamento-variacao-funcao-governo',
    title: 'Variação do Orçamento por Função de Governo',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '1',
    desktopAppId: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
    desktopSheetId: 'UMJqywF',
    filter: {
      appid: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
      sheet: '8f1f009a-ae21-4ec5-bf87-92d762221a63',
      showSelections: true
    },
    charts: [
      {
        appid: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
        sheet: '64a913f9-018c-40bd-b9b2-1ac5a2ce3ee0',
        mobileHeight: 1,
        mobileOrder: 0,
        skeletonType: 'kpi'
      },
      {
        appid: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
        sheet: '2c47bf92-79df-48ae-8d20-c861df1c2e98',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
        sheet: '06e2f64c-1081-4d9f-a193-bbc9ca6ec9b4',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
        sheet: 'd72b5d40-54c1-47e3-adc0-4de1e27799ce',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
        sheet: 'e0db7a30-329e-4aee-827d-2c8590feb084',
        mobileOrder: 4,
        skeletonType: 'bar'
      },
      {
        appid: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
        sheet: '09dd83db-e9f2-49a4-902e-3bfb90477e08',
        mobileOrder: 5,
        skeletonType: 'bar'
      },
      {
        appid: '8de1759f-cbc1-4229-b714-8c54fcf1f88c',
        sheet: 'b16bbf15-8c58-4e3d-b6e1-0f33b257370f',
        mobileOrder: 6,
        skeletonType: 'bar'
      }
    ]
  },
  {
    id: 'orcamento-variacao-detalhada-funcao-governo',
    title: 'Variação detalhada do Orçamento por Função de Governo',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '2',
    desktopAppId: 'a44893fd-2171-4ad4-9d55-846287cd6534',
    desktopSheetId: 'bd2c8bf9-d161-43ed-a967-b96342558630',
    filterOpen: true,
    filter: {
      appid: 'a44893fd-2171-4ad4-9d55-846287cd6534',
      sheet: '2195998b-a1dd-48fd-af56-7d3c20a80e4d',
      showSelections: true
    },
    charts: [
      {
        appid: 'a44893fd-2171-4ad4-9d55-846287cd6534',
        sheet: 'dd764d5d-b820-443a-a4af-22faae1692d2',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'a44893fd-2171-4ad4-9d55-846287cd6534',
        sheet: '812f510d-2113-443c-b782-1058e59cb021',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: 'a44893fd-2171-4ad4-9d55-846287cd6534',
        sheet: '9611b4b0-5de3-44d9-80fc-ec8624498fd7',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: 'a44893fd-2171-4ad4-9d55-846287cd6534',
        sheet: '0a1f5b36-706d-47ef-9e37-30334ec27b84',
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: 'a44893fd-2171-4ad4-9d55-846287cd6534',
        sheet: '2f1592cc-903c-4582-aa6c-9a60c851e26e',
        mobileOrder: 5,
        skeletonType: 'bar'
      },
      {
        appid: 'a44893fd-2171-4ad4-9d55-846287cd6534',
        sheet: '048afe27-0abb-4bd7-9eef-ae1f4fe1049f',
        mobileOrder: 6,
        skeletonType: 'bar'
      },
      {
        appid: 'a44893fd-2171-4ad4-9d55-846287cd6534',
        sheet: '27712c63-00b7-459e-aac0-2f49f82274fb',
        mobileOrder: 7,
        skeletonType: 'bar'
      }
    ]
  },
  {
    id: 'orcamento-variacao-detalhada-orgao',
    title: 'Variação detalhada do Orçamento por Órgão',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '3',
    desktopAppId: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
    desktopSheetId: '826cc7f9-9f5d-498f-aba1-af1bd4aca5ba',
    filterOpen: true,
    filter: {
      appid: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
      sheet: '38a81cf9-832a-4a7f-a231-8c8b2941ce1f',
      showSelections: true
    },
    charts: [
      {
        appid: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
        sheet: '0110c6b0-be05-4d44-9304-52eb9644d244',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
        sheet: '143ad749-85a6-404d-bade-129fce434ca9',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
        sheet: '31a45cad-2b85-471c-8b79-6303d7eb3969',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
        sheet: '5291e810-0fb5-4bd2-9d9c-c95f933af159',
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
        sheet: 'a1c3099e-c5b4-4457-8a89-be90f5df808f',
        mobileOrder: 5,
        skeletonType: 'bar'
      },
      {
        appid: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
        sheet: 'e911271b-823f-4f81-886d-7da28e162e3b',
        mobileOrder: 6,
        skeletonType: 'bar'
      },
      {
        appid: 'f5fa8780-b946-4f6f-bf54-ffd1578841ee',
        sheet: 'fd799e32-ad2b-4682-8718-932257371526',
        mobileOrder: 7,
        skeletonType: 'bar'
      }
    ]
  },
  {
    id: 'orcamento-comparacao-projeto-atividade',
    title: 'Comparação do Orçamento por Projeto/Atividade',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '4',
    desktopAppId: 'e6529850-a5d3-4fbb-9e5f-3ab31875d287',
    desktopSheetId: 'bd2c8bf9-d161-43ed-a967-b96342558630',
    filterOpen: true,
    filter: {
      appid: 'e6529850-a5d3-4fbb-9e5f-3ab31875d287',
      sheet: '8f9aff06-0450-4f98-8921-03fd5287dc3e',
      showSelections: true
    },
    charts: [
      {
        appid: 'e6529850-a5d3-4fbb-9e5f-3ab31875d287',
        sheet: 'aca59608-41d2-4de4-bb3b-546a0781fd1c',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'e6529850-a5d3-4fbb-9e5f-3ab31875d287',
        sheet: '347d926f-8c70-42d9-bb12-fdb34ae721c2',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: 'e6529850-a5d3-4fbb-9e5f-3ab31875d287',
        sheet: '88be25b8-de89-49bf-b4df-b2b88c071db9',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: 'e6529850-a5d3-4fbb-9e5f-3ab31875d287',
        sheet: '74118dea-7989-48e9-85ce-1751048df9fd',
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: 'e6529850-a5d3-4fbb-9e5f-3ab31875d287',
        sheet: 'de23963f-7ddb-4042-b52b-a6f675ce470a',
        mobileOrder: 5,
        skeletonType: 'bar'
      }
    ]
  }
]
