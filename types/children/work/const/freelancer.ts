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
          { value: 'cu', type: NodeItemLabelType.Country }
        ],
        background: { src: '/assets/img/oxygen.png' },
        colors: { primary: '#0043ff', secondary: '#0090f9', hover: '#00efff' }
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
        }
      ]
    },
    {
      item: {
        id: 'pbetta',
        type: NodeItemType.Project,
        label: { value: 'PBetta', type: NodeItemLabelType.Link, subvalue: 'https://pbetta.vercel.app' },
        sublabels: [
          { value: '2021-08,2021-09', type: NodeItemLabelType.Date },
          { value: 'cu', type: NodeItemLabelType.Country }
        ],
        background: { src: '/assets/img/pbetta.png' },
        colors: { primary: '#0043ff', secondary: '#006cff', hover: '#0090f9' }
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
        }
      ]
    },
    undefined,
    {
      item: {
        id: 'gymbro',
        sublabels: [
          { value: '2023-02', type: NodeItemLabelType.Since },
          { value: 'dr', type: NodeItemLabelType.Country }
        ],
        type: NodeItemType.Project,
        label: { value: 'GymBro', type: NodeItemLabelType.Link, subvalue: 'https://www.gymbro.pro' },
        background: { src: '/assets/img/gymbro.png' },
        colors: { primary: '#4d1600', secondary: '#c25b00', hover: '#ffe4b7' }
      },
      children: [
        {
          item: {
            ...FullStack.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: '2021-02,2021-03', type: NodeItemLabelType.Date }
            ]
          },
          children: [undefined, NestJS, undefined, undefined, undefined, Nuxt3]
        }
      ]
    },
    {
      item: {
        id: 'darklink',
        sublabels: [
          { value: '2021-02,2021-03', type: NodeItemLabelType.Date },
          { value: 'dr', type: NodeItemLabelType.Country }
        ],
        type: NodeItemType.Project,
        label: { value: 'DarkLink', type: NodeItemLabelType.Link, subvalue: '/' },
        background: { src: '/assets/img/portfolio.png' },
        colors: { primary: '#3b3b3b', secondary: '#e9d96d', hover: '#f3ebab' }
      },
      children: [
        {
          item: {
            ...FrontEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: '2021-02,2021-03', type: NodeItemLabelType.Date }
            ]
          },
          children: [Nuxt3]
        }
      ]
    }
  ]
}
