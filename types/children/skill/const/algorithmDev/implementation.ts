import { INode } from '~~/types/core'

export const Implementation: INode = {
  item: {
    id: 'implementation',
    exp: 80,
    type: NodeItemType.Skill,
    icon: { key: 'mdi:code-json' },
    colors: {
      primary: '#3636b8',
      secondary: '#5051cd',
      hover: '#8889dc'
    }
  }
}
