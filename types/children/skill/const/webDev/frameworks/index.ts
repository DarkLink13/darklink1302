import { INode } from '~~/types/core'
export * from './backEnd'
export * from './frontEnd'
export const Hugo: INode = {
  item: {
    type: NodeItemType.Skill,
    id: 'hugo',
    exp: 20,
    sublabels: [{ value: '<1', type: NodeItemLabelType.Years }],
    label: { value: 'Hugo' },
    background: { src: '/assets/img/hugo.png' },
    colors: { primary: '#bf1678', secondary: '#2f9a9c', hover: '#fcd900' }
  }
}
