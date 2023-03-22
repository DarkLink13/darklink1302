import { INode } from '~~/types/core'

export const HTML: INode = {
  item: {
    id: 'html',
    exp: 85,
    type: NodeItemType.Skill,
    label: { value: 'HTML' },
    sublabels: [{ value: '5', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/html.png' },
    colors: { primary: '#c4002b', secondary: '#de002d', hover: '#ec5f5f' }
  }
}
