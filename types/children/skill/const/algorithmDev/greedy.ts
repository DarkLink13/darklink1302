import { INode } from '~~/types/core'

export const Greedy: INode = {
  item: {
    id: 'greedy',
    exp: 40,
    type: NodeItemType.Skill,
    icon: { key: 'mdi:candy-outline' },
    colors: {
      primary: '#52206a',
      secondary: '#944dad',
      hover: '#a688dd'
    }
  }
}
