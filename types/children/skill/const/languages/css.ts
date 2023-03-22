import { INode } from '~~/types/core'

export const CSS: INode = {
  item: {
    id: 'css',
    exp: 85,
    type: NodeItemType.Skill,
    label: { value: 'CSS' },
    sublabels: [{ value: '5', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/css.png' },
    colors: { primary: '#572b8a', secondary: '#027fbc', hover: '#2c98bd' }
  }
}
