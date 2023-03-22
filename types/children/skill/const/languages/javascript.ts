import { INode } from '~~/types/core'

export const Javascript: INode = {
  item: {
    id: 'javascript',
    exp: 85,
    type: NodeItemType.Skill,
    label: { value: 'Javascript' },
    sublabels: [{ value: '5', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/javascript.png' },
    colors: { primary: '#e8960f', secondary: '#f7d800', hover: '#f7e771' }
  }
}
