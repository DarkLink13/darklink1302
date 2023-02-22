import { INodeItem } from './core'

export const Me: INodeItem = {
  type: NodeItemType.Default,
  label: {
    name: 'darklink',
    bottom: '70%'
  },
  background: { src: '/assets/avatar.jpg' },
  colors: {
    primary: '#2ac7ec',
    secondary: '#f0e5b1',
    hover: 'white'
  }
}
