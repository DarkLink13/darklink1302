import { INode } from '~~/types/core'

export const Light: INode = {
  item: {
    id: 'light',
    label: { color: '#243746' },
    type: NodeItemType.Root,
    icon: { key: 'material-symbols:light-mode-outline-sharp' },
    colors: {
      primary: '#000000',
      secondary: '#222222',
      hover: '#444444'
    },
    mode: 'light',
    action: (colorMode: any) => { colorMode.preference = 'light' }
  }
}
