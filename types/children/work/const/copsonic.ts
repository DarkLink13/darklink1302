import { INode } from '~~/types/core'

export const CopSonic: INode = {
  item: {
    id: 'copsonic',
    type: NodeItemType.Work,
    label: { value: 'CopSonic', type: NodeItemLabelType.Link, subvalue: 'https://www.copsonic.com/' },
    sublabels: [
      { value: '2020-07,2020-10', type: NodeItemLabelType.Date },
      { value: 'fr', type: NodeItemLabelType.Country },
      { value: NodeItemLabelWorkType.Remote, subvalue: NodeItemLabelworkSchedule.PartTime, type: NodeItemLabelType.WorkType }
    ],
    background: { src: '/assets/img/copsonic.png' },
    colors: { primary: '#a62831', secondary: '#c01925', hover: '#c6c8c7' }
  }
}
