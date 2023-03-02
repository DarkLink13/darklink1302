import { INode } from '~~/types/core'

export const Dark: INode = {
  item: {
    id: 'dark',
    type: NodeItemType.Root,
    icon: { key: 'material-symbols:dark-mode-outline-sharp' },
    colors: {
      primary: '#888888',
      secondary: '#AAAAAA',
      hover: '#EEEEEE'
    },
    mode: 'dark',
    action: (colorMode: any) => { colorMode.preference = 'dark' }
  }
}
