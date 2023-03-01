import { INode } from '~~/types/core'

export const Dark: INode = {
  item: {
    type: NodeItemType.Root,
    label: { name: 'Dark' },
    icon: { key: 'material-symbols:dark-mode-outline-sharp' },
    colors: {
      primary: '#888888',
      secondary: '#AAAAAA',
      hover: '#EEEEEE'
    },
    mode: 'dark',
    action: (colorMode: any) => { colorMode.preference = 'dark' }
  },
  children: []
}
