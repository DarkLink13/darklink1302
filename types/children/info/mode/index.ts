import { INode } from '~~/types/core'

export const Mode: INode = {
  item: {
    id: 'mode',
    type: NodeItemType.Root,
    label: { value: 'Mode' },
    icon: { key: 'fluent:dark-theme-20-filled' },
    colors: {
      primary: '#FFFFFF',
      secondary: '#777777',
      hover: '#000000'
    }
  },
  children: [undefined, Light, undefined, undefined, undefined, Dark]
}
