import { INode } from '~~/types/core'

export const Typescript: INode = {
  item: {
    id: 'typescript',
    exp: 95,
    type: NodeItemType.Skill,
    label: { value: 'Typescript' },
    sublabels: [{ value: '5', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/typescript.png' },
    colors: { primary: '#1867c0', secondary: '#1697f6', hover: '#aeddff' }
  }
}
