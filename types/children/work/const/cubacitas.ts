import { INode } from '~~/types/core'

export const Cubacitas: INode = {
  item: {
    id: 'cubacitas',
    type: NodeItemType.Work,
    label: { value: 'Cubacitas', type: NodeItemLabelType.Link, subvalue: 'https://www.cubacitas.app/' },
    sublabels: [
      { value: '2020-09,2020-10', type: NodeItemLabelType.Date },
      { value: 'cu', type: NodeItemLabelType.Country },
      { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
    ],
    background: { src: '/assets/img/cubacitas.png' },
    colors: { primary: '#fe4860', secondary: '#ff8548', hover: '#ffa542' }
  },
  children: [
    {
      item: { id: 'cubacitasweb', type: NodeItemType.Work, label: { value: 'Cubacitas Web' } },
      children: [
        {
          ...FrontEndDev,
          children: [Angular2]
        }
      ]
    }
  ]
}
