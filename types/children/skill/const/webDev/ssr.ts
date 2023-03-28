import { INode } from '~~/types/core'

export const SSR: INode = {
  item: {
    id: 'ssr',
    type: NodeItemType.Skill,
    label: { value: 'SSR' },
    background: { src: '/assets/img/ssr.png' },
    colors: { primary: '#1867c0', secondary: '#1697f6', hover: '#aeddff' }
  }
}
