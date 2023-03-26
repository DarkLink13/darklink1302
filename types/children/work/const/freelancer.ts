import { INode } from '~~/types/core'

export const Freelancer: INode = {
  item: {
    id: 'freelancer',
    type: NodeItemType.Work,
    label: { value: 'Freelancer' },
    sublabels: [
      { value: '2018-09', type: NodeItemLabelType.Since },
      { value: NodeItemLabelWorkType.Freelancer, subvalue: NodeItemLabelworkSchedule.Flexible, type: NodeItemLabelType.WorkType }
    ],
    icon: { key: 'simple-icons:freelancer' },
    colors: { primary: '#e8960f', secondary: '#f7d800', hover: '#f7e771' }
  },
  children: [
    undefined,
    {
      item: {
        id: 'oxygen',
        type: NodeItemType.Project,
        label: { value: 'Oxygen' },
        sublabels: [
          { value: '2020-10,2020-11', type: NodeItemLabelType.Date },
          { value: 'mx', type: NodeItemLabelType.Country }
        ],
        background: { src: '/assets/img/oxygen.png' },
        colors: { primary: '#020202', secondary: '#404040', hover: '#808080' }
      },
      children: [
        {
          item: {
            ...FrontEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: '2020-10,2020-11', type: NodeItemLabelType.Date }
            ]
          },
          children: [
            {
              ...Nuxt,
              children: [VueJS]
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
        id: 'pbetta',
        type: NodeItemType.Project,
        label: { value: 'PBetta' },
        sublabels: [
          { value: '2020-01,2020-07', type: NodeItemLabelType.Date },
          { value: 'mx', type: NodeItemLabelType.Country }
        ],
        background: { src: '/assets/img/pbetta.png' },
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
    undefined,
    {
      item: {
        id: 'gymbro',
        sublabels: [
          { value: '2021-02,2021-03', type: NodeItemLabelType.Date },
          { value: 'mx', type: NodeItemLabelType.Country }
        ],
        type: NodeItemType.Project,
        label: { value: 'GymBro' },
        background: { src: '/assets/img/gymbro.png' },
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
    },
    {
      item: {
        id: 'portfolio',
        sublabels: [
          { value: '2021-02,2021-03', type: NodeItemLabelType.Date },
          { value: 'mx', type: NodeItemLabelType.Country }
        ],
        type: NodeItemType.Project,
        label: { value: 'PortFolio' },
        background: { src: '/assets/img/portfolio.png' },
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
