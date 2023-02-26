import { INode } from '~~/types/core'
export * from './backEnd'
export * from './frontEnd'
export const Hugo: INode = {
  item: {
    type: NodeItemType.Skill,

    label: { name: 'Hugo' },
    background: { src: '/assets/hugo.png' },
    colors: { primary: '#bf1678', secondary: '#2f9a9c', hover: '#fcd900' }
  }
}
