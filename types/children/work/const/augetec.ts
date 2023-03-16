import { INode } from '~~/types/core'

export const AugeTec: INode = {
  item: {
    id: 'augetec',
    type: NodeItemType.Work,
    label: { value: 'Auge Tec' },
    sublabels: [
      { value: '2020-01,2021-03', type: NodeItemLabelType.Date },
      { value: 'mx', type: NodeItemLabelType.Country },
      { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.Flexible, type: NodeItemLabelType.WorkType }
    ],
    background: { src: '/assets/img/auge.png' },
    colors: { primary: '#0c4151', secondary: '#246d5f', hover: '#35973b' }
  },
  children: [
    {
      item: {
        id: 'augecrm',
        type: NodeItemType.Project,
        label: { value: 'Auge CRM' },
        sublabels: [
          { value: '2020-01,2020-07', type: NodeItemLabelType.Date },
          { value: 'mx', type: NodeItemLabelType.Country }
        ],
        background: { src: '/assets/img/auge.png' },
        colors: { primary: '#393939', secondary: '#828282', hover: '#c3c3c3' }
      },
      children: [
        {
          ...FrontEndDev,
          children: [
            {
              ...Nuxt,
              children: [Vuetify,
                VueJS]
            }
          ]
        },
        {
          item: { ...BackEndDev.item, label: { value: 'Back-End Collaborator' } },
          children: [Django, PostgreSQL, ElasticSearch]
        }
      ]
    },
    {
      item: {
        id: 'augecs',
        type: NodeItemType.Project,
        label: { value: 'Auge CS' },
        sublabels: [
          { value: '2020-07,2020-11', type: NodeItemLabelType.Date },
          { value: 'mx', type: NodeItemLabelType.Country }
        ],
        background: { src: '/assets/img/auge.png' },
        colors: { primary: '#393939', secondary: '#828282', hover: '#c3c3c3' }
      },
      children: [
        {
          ...FrontEndDev,
          children: [
            {
              ...Nuxt,
              children: [Vuetify,
                VueJS]
            },
            GraphQL,
            Apollo
          ]
        },
        {
          item: { ...BackEndDev.item, label: { value: 'Back-End Collaborator' } },
          children: [GraphQL, Hasura, PostgreSQL]
        }
      ]
    },
    {
      item: {
        id: 'evaluamax',
        type: NodeItemType.Project,
        label: { value: 'EvaluaMax' },
        sublabels: [
          { value: '2020-11,2021-02', type: NodeItemLabelType.Date },
          { value: 'mx', type: NodeItemLabelType.Country }
        ],
        background: { src: '/assets/img/evaluamax.png' },
        colors: { primary: '#009192', secondary: '#00d86d', hover: '#009ffd' }
      },
      children: [
        {
          ...FrontEndDev,
          children: [
            {
              ...Nuxt,
              children: [Vuetify,
                VueJS]
            },
            GraphQL,
            Apollo
          ]
        }
      ]
    },
    {
      item: {
        id: 'mutillantasmax',
        sublabels: [
          { value: '2021-02,2021-03', type: NodeItemLabelType.Date },
          { value: 'mx', type: NodeItemLabelType.Country }
        ],
        type: NodeItemType.Project,
        label: { value: 'MultillantasMax' },
        background: { src: '/assets/img/multillantasmax.png' },
        colors: { primary: '#2867ab', secondary: '#c2230d', hover: '#ffffff' }
      },
      children: [
        {
          ...FullStackDev,
          children: [Hugo]
        }
      ]
    }
  ]
}
