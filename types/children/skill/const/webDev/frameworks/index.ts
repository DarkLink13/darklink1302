import { INode } from '~~/types/core'
export * from './backEnd'
export * from './frontEnd'
export const Hugo: INode = {
  item: {
    type: NodeItemType.Skill,
    id: 'hugo',
    label: { name: 'Hugo' },
    background: { src: '/assets/img/hugo.png' },
    colors: { primary: '#bf1678', secondary: '#2f9a9c', hover: '#fcd900' }
  }
}
