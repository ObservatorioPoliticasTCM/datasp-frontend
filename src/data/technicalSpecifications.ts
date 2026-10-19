export interface Participant {
  name: string
  title: string
}

export interface ParticipantGroup {
  name: string
  participants: Participant[]
}

export interface WorkingGroup {
  name: string
  url: string
  participants: Participant[]
}

export interface AnnualImprint {
  year: number
  coordination: Participant[]
  support: ParticipantGroup[]
  technicalTeam: ParticipantGroup[]
  contributors: Participant[]
  specialists: Participant[]
  workingGroups: WorkingGroup[]
}

const imprint2025: AnnualImprint = {
  year: 2025,

  coordination: [
    {
      name: 'Egle Monteiro',
      title: 'Coordenadora',
    },
    {
      name: 'Harmi Takiya',
      title: 'Coordenadora Adjunta',
    },
    {
      name: 'Bruno Azuma',
      title: 'Assessor Técnico de Dados',
    },
    {
      name: 'Elizandra Hengles de Paula',
      title: 'Assessora de Comunicação',
    },
  ],

  support: [
    {
      name: 'Núcleo de Tecnologia da Informação',
      participants: [
        {
          name: 'Ricardo Ferreira Santos',
          title: 'Chefe do NTI',
        },
        {
          name: 'Adriano Barbosa dos Santos',
          title: 'Chefe da Unidade Técnica de Desenvolvimento de Sistemas',
        },
        {
          name: 'Manoel Henrique Martins',
          title: 'Auxiliar Técnico de Controle Externo',
        },
      ],
    },
    {
      name: 'Estagiários do OPP',
      participants: [
        {
          name: 'Ana Clara Stenico',
          title: 'Geografia',
        },
        {
          name: 'Bruna Santos',
          title: 'Geografia',
        },
        {
          name: 'Marcos Gabriel da Silva',
          title: 'Gestão de Tecnologia da Informação',
        },
        {
          name: 'Pedro Lima',
          title: 'Geografia',
        },
        {
          name: 'Rafael Oliveira Bezerra da Silva',
          title: 'Análise e Desenvolvimento de Sistemas',
        },
        {
          name: 'Samuel Bento Alves',
          title: 'Segurança Cibernética',
        },
      ],
    },
    {
      name: 'Estagiárias da Comunicação',
      participants: [
        {
          name: 'Anny Solon Moretti Fernandes',
          title: 'Publicidade e Propaganda',
        },
        {
          name: 'Eduarda Fonseca da Silva',
          title: 'Publicidade e Propaganda',
        },
        {
          name: 'Natália Valente Trigo',
          title: 'Publicidade e Propaganda',
        },
      ],
    },
  ],

  technicalTeam: [
    {
      name: 'Unidade de Informações Estratégicas',
      participants: [
        {
          name: 'Luciana da Cunha de Castro Guerra',
          title: 'Supervisora da Unidade',
        },
        {
          name: 'Lilian Tiemi Takada',
          title: 'Auxiliar Técnica de Controle Externo',
        },
        {
          name: 'Ana Luísa Augusto do Val',
          title: 'Estagiária de Análise e Desenvolvimento de Sistemas',
        },
      ],
    },
  ],

  contributors: [
    {
      name: 'Fulvio Giannella Junior',
      title: 'Assessor de Imprensa',
    },
    {
      name: 'Dilson Ferreira da Cruz Junior',
      title: 'Auditor de Controle Externo',
    },
    {
      name: 'Rafael Valverde Arantes',
      title: 'Secretário de Controle Externo',
    },
    {
      name: 'Maria Clara Watanabe Tanabe',
      title: 'Auditora de Controle Externo',
    },
    {
      name: 'Fredy Henrique Miller',
      title: 'Coordenador de Controle Externo II',
    },
    {
      name: 'Luiz Gustavo de Oliveira Vieira',
      title: 'Coordenador de Controle Externo IV',
    },
    {
      name: 'Rafael Rocha Lins',
      title: 'Coordenador de Controle Externo VI',
    },
    {
      name: 'Dimitri Fabricio Carvalho Rodermel',
      title: 'Coordenador de Controle Externo VII',
    },
  ],

  specialists: [
    {
      name: 'Claudio Luiz Camargo',
      title:
        'Professor associado da Universidade Federal do ABC e pesquisador do NEAMP da PUCSP e do LabLivre da UFABC.',
    },
    {
      name: 'Daniela Perre',
      title:
        'Graduada em Arquitetura e Urbanismo pela Universidade de São Paulo e pós-graduada em Direito Público Municipal pela Escola Superior de Gestão e Contas Públicas.',
    },
    {
      name: 'Danielle Bivanco',
      title:
        'Professora, supervisora do Internato em Medicina de Família e Comunidade e participante do Núcleo de Apoio Pedagógico da Universidade São Caetano do Sul.',
    },
    {
      name: 'Denise Carreira',
      title:
        'Professora da Faculdade de Educação da Universidade de São Paulo.',
    },
    {
      name: 'Maria Amelia Almeida Teles',
      title:
        'Coordenadora da União de Mulheres de São Paulo e do Programa de Promotoras Legais Populares.',
    },
    {
      name: 'Maria Carlotto',
      title:
        'Coordenadora do Programa de Pós-Graduação em Economia Política Mundial da Universidade Federal do ABC.',
    },
    {
      name: 'Marilia Roggero',
      title:
        'Doutora em Ciências pelo Programa de Pós-Graduação em Geografia Física da Universidade de São Paulo. É geógrafa na Diagonal Social.',
    },
    {
      name: 'Nelson Marconi',
      title:
        'Coordenador do curso de graduação em administração pública EAESP FGV.',
    },
    {
      name: 'Renato Eliseu Costa',
      title:
        'Professor da ESALQ-USP, onde integra o Departamento de Administração e Economia e o programa de pós-graduação stricto sensu em Administração. Também atua como docente do mestrado e doutorado em Políticas Públicas da UFABC.',
    },
    {
      name: 'Roberta Peres',
      title:
        'Docente da Universidade Federal do ABC. Coordenadora do Bacharelado em Ciências e Humanidades.',
    },
    {
      name: 'Roberto Tolosa Junior',
      title: 'Coordenador de Informação em Saúde',
    },
    {
      name: 'Ronaldo Malheiros Figueira',
      title:
        "Professor do curso de pós-graduação do Grupo Ecossistema ÂNIMA e professor do Centro Universitário Sant'Anna.",
    },
    {
      name: 'Rute Alonso da Silva',
      title:
        'Presidenta da União de Mulheres do Município de São Paulo e coordenadora do projeto Promotoras Legais Populares.',
    },
    {
      name: 'Tomás Wissenbach',
      title:
        'Geógrafo e mestre em Geografia Humana pela USP e doutor em Administração Pública e Governo pela FGV-SP. É pesquisador e coordenador de projetos no Cebrap e professor do Cebrap.Lab.',
    },
    {
      name: 'Valter Caldana',
      title:
        'Professor da Faculdade de Arquitetura e Urbanismo da Universidade Presbiteriana Mackenzie. É pesquisador do Laboratório Citer da Universidade de Ferrara-Itália e coordenador do LPP - Laboratório de Projetos e Políticas Públicas.',
    },
  ],

  workingGroups: [
    {
      name: 'GT Educação',
      url: 'https://observatorio.tcm.sp.gov.br/Educacao/559290',
      participants: [
        {
          name: 'Rômulo Felipe Manzatto',
          title: 'Coordenador',
        },
      ],
    },
    {
      name: 'GT Gênero',
      url: 'https://observatorio.tcm.sp.gov.br/Genero/556919',
      participants: [
        {
          name: 'Maria Angélica Fernandes',
          title: 'Coordenadora',
        },
        {
          name: 'Suelem Lima Benicio',
          title: 'Coordenadora Adjunta',
        },
      ],
    },
    {
      name: 'GT Saúde',
      url: 'https://observatorio.tcm.sp.gov.br/Saude/556928',
      participants: [
        {
          name: 'Luciana Berardi',
          title: 'Coordenadora',
        },
        {
          name: 'Mariana Mendes Cruz Ferreira',
          title: 'Coordenadora Adjunta',
        },
      ],
    },
    {
      name: 'GT Urbanismo',
      url: 'https://observatorio.tcm.sp.gov.br/Urbanismo/559291',
      participants: [
        {
          name: 'Egle Monteiro',
          title: 'Coordenadora',
        },
        {
          name: 'Harmi Takiya',
          title: 'Coordenadora Adjunta',
        },
      ],
    },
    {
      name: 'GT Regionalização do Orçamento',
      url: 'https://observatorio.tcm.sp.gov.br/Regionalizacao/559292',
      participants: [
        {
          name: 'Danilo Fuster',
          title: 'Coordenador',
        },
      ],
    },
  ],
}

const imprint2026: AnnualImprint = {
  ...structuredClone(imprint2025),
  year: 2026,
}

const workingGroupLinks2026: Record<string, string> = {
  'GT Educação': '#',
  'GT Gênero': '#',
  'GT Saúde': '#',
  'GT Urbanismo': '#',
  'GT Regionalização do Orçamento': '#',
}

imprint2026.workingGroups = imprint2026.workingGroups.map(group => ({
  ...group,
  url: workingGroupLinks2026[group.name] ?? group.url,
}))

export const annualImprints: AnnualImprint[] = [
  imprint2026,
  imprint2025,
]