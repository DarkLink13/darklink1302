import { INode } from '~~/types/core'

export const React: INode = {
  item: {
    type: NodeItemType.Skill,
    id: 'react',
    exp: 45,
    sublabels: [{ name: '1', type: NodeItemLabelType.Years }, { name: '18.2', type: NodeItemLabelType.Version }],
    label: { value: 'React' },
    background: { src: '/assets/img/react.png' },
    colors: { primary: '#212121', secondary: '#00d2f7', hover: '#5ed3f3' }
  }
}
