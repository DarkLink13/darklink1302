import { Dark } from './dark'
import { Light } from './light'
import { INode } from '~~/types/core'

export const Mode: INode = {
  item: {
    type: NodeItemType.Root,
    label: { name: 'Mode' },
    icon: { key: 'mdi:theme-light-dark' },
    colors: {
      primary: '#FFFFFF',
      secondary: '#777777',
      hover: '#000000'
    }
  },
  children: [Light, Dark]
}
