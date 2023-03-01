import { INode } from '~~/types/core'

export const Light: INode = {
  item: {
    type: NodeItemType.Root,
    label: { name: 'Light' },
    icon: { key: 'material-symbols:light-mode-outline-sharp' },
    colors: {
      primary: '#000000',
      secondary: '#222222',
      hover: '#444444'
    },
    mode: 'light',
    action: (colorMode: any) => { colorMode.preference = 'light' }
  },
  children: []
}
