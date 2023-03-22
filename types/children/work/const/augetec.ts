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
    colors: { primary: '#828282', secondary: '#999999', hover: '#c3c3c3' }
  },
  children: [
    undefined,
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
        colors: { primary: '#020202', secondary: '#404040', hover: '#808080' }
      },
      children: [
        {
          item: {
            ...FrontEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: '2020-01,2020-07', type: NodeItemLabelType.Date }
            ]
          },
          children: [
            {
              ...Nuxt,
              children: [Vuetify,
                VueJS]
            }
          ]
        },
        {
          item: {
            ...BackEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Collaborator, type: NodeItemLabelType.Role },
              { value: '2020-01,2020-07', type: NodeItemLabelType.Date }
            ]
          },
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
          item: {
            ...FrontEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: '2020-07,2020-11', type: NodeItemLabelType.Date }
            ]
          },
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
          item: {
            ...BackEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: '2020-07,2020-11', type: NodeItemLabelType.Date }
            ]
          },
          children: [GraphQL, Hasura, PostgreSQL]
        }
      ]
    },
    undefined,
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
          item: {
            ...FrontEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: '2020-11,2021-02', type: NodeItemLabelType.Date }
            ]
          },
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
        id: 'multillantasmax',
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
          item: {
            ...Web.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: '2021-02,2021-03', type: NodeItemLabelType.Date }
            ]
          },
          children: [Hugo]
        }
      ]
    }
  ]
}
