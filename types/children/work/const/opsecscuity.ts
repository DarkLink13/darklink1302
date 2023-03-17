import { INode } from '~~/types/core'

export const OpsecSecurity: INode = {
  item: {
    id: 'opsecsecurity',
    type: NodeItemType.Work,
    label: { value: 'Opsec Security', type: NodeItemLabelType.Link, subvalue: 'https://www.opsecsecurity.com/' },
    sublabels: [
      { value: '2021-11', type: NodeItemLabelType.Since },
      { value: 'us', type: NodeItemLabelType.Country },
      { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.FullTime, type: NodeItemLabelType.WorkType }
    ],
    background: { src: '/assets/img/opsecsecurity.png' },
    colors: { primary: '#2b145e', secondary: '#54329d', hover: '#6742b7' }
  },
  children: [
    {
      item: {
        id: 'insight',
        type: NodeItemType.Project,
        sublabels: [{ value: '2021-11,2022-12', type: NodeItemLabelType.Date }, { value: 'us', type: NodeItemLabelType.Country }],
        label: { value: 'Insight' },
        background: { src: '/assets/img/opsecsecurity.png' },
        colors: { primary: '#181e41', secondary: '#003b78', hover: '#3d6292' }
      },
      children: [
        {
          ...FullStackDev,
          children: [DotNet, KnockoutJS]
        }
      ]
    },
    {
      item: {
        id: 'ere',
        type: NodeItemType.Project,
        label: { value: 'eRE' },
        sublabels: [{ value: '2023-01', type: NodeItemLabelType.Since }, { value: 'pr', type: NodeItemLabelType.Country }],
        background: { src: '/assets/img/ere.png' },
        colors: { primary: '#000000', secondary: '#faec17', hover: '#FFFFFF' }
      },
      children: [
        {
          ...FullStackDev,
          children: [DotNet, React]
        }
      ]
    }
  ]
}
