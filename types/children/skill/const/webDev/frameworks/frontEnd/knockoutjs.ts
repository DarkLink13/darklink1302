import { INode } from '~~/types/core'

export const KnockoutJS: INode = {
  item: {
    type: NodeItemType.Skill,
    id: 'knockoutjs',
    exp: 45,
    sublabels: [{ name: '1', type: NodeItemLabelType.Years }, { name: '3.5', type: NodeItemLabelType.Version }],
    label: { value: 'Knockout.JS' },
    background: { src: '/assets/img/knockoutjs.png' },
    colors: { primary: '#9a1015', secondary: '#d72f23', hover: '#e65231' }
  }
}
