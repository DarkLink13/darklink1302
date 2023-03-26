import { INode } from '~~/types/core'

export const Payever:INode = {
  item: {
    id: 'payever',
    sublabels: [
      { value: '2022-03,2022-08', type: NodeItemLabelType.Date },
      { value: 'de', type: NodeItemLabelType.Country },
      { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.FullTime, type: NodeItemLabelType.WorkType }
    ],
    type: NodeItemType.Work,
    label: { value: 'payever', type: NodeItemLabelType.Link, subvalue: 'https://getpayever.com/' },
    background: { src: '/assets/img/payever.png' },
    colors: { primary: '#333333', secondary: '#888888', hover: '#FFFFFF' }
  },
  children: [
    {
      item: {
        id: 'commerceos',
        type: NodeItemType.Project,
        sublabels: [
          { value: '2022-03,2022-08', type: NodeItemLabelType.Date },
          { value: 'de', type: NodeItemLabelType.Country }
        ],
        label: { value: 'Commerceos', type: NodeItemLabelType.Link, subvalue: 'https://commerceos.payever.org/' },
        background: { src: '/assets/img/commerceos.png' },
        colors: { primary: '#333333', secondary: '#888888', hover: '#FFFFFF' }
      },
      children: [
        {
          item: {
            ...FrontEnd.item,
            sublabels: [
              { value: NodeItemLabelRole.Senior, type: NodeItemLabelType.Role },
              { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.FullTime, type: NodeItemLabelType.WorkType }
            ]
          },
          children: [Angular2, Nx]
        }
      ]
    }
  ]
}
