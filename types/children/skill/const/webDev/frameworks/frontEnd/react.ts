import { INode } from '~~/types/core'

export const React: INode = {
  item: {
    type: NodeItemType.Skill,
    id: 'react',
    exp: 45,
    sublabels: [{ value: '<1', type: NodeItemLabelType.Years }, { value: '18.2', type: NodeItemLabelType.Version }],
    label: { value: 'React' },
    background: { src: '/assets/img/react.png' },
    colors: { primary: '#212121', secondary: '#00d2f7', hover: '#5ed3f3' }
  }
}

export const TailwindCSS: INode = {
  item: {
    type: NodeItemType.Skill,
    id: 'tailwindcss',
    exp: 45,
    sublabels: [{ value: '<1', type: NodeItemLabelType.Years }, { value: '3.0', type: NodeItemLabelType.Version }],
    label: { value: 'Tailwind CSS' },
    background: { src: '/assets/img/tailwindcss.png' },
    colors: { primary: '#3593a9', secondary: '#f2f2f2', hover: '#35b3eb' }
  }
}
