import { INode } from '~~/types/core'

export const Python: INode = {
  item: {
    id: 'python',
    exp: 85,
    type: NodeItemType.Skill,
    label: { value: 'Python' },
    sublabels: [
      { value: '2.7-3.x', type: NodeItemLabelType.Version },
      { value: '3', type: NodeItemLabelType.Years }
    ],
    background: { src: '/assets/img/python.png' },
    colors: { primary: '#336d9e', secondary: '#202124', hover: '#f7d54d' }
  }
}
