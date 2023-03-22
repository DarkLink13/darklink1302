import { INodeItem } from './core'

export const Me: INodeItem = {
  id: 'me',
  type: NodeItemType.Default,
  label: {
    color: 'white',
    value: 'darklink',
    bottom: '70%'
  },
  background: { src: '/assets/img/avatar.jpg', full: true },
  colors: {
    primary: '#2ac7ec',
    secondary: '#f0e5b1',
    hover: 'white'
  }
}
