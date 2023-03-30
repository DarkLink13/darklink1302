import { INode } from '../../../core'

export const LikeMusic: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'music',
    icon: { key: 'ph:music-notes-duotone' },
    colors: {
      primary: '#fda172',
      secondary: '#f7d100',
      hover: '#f7e771'
    }
  },
  children: [undefined, Rock, Ee, undefined, Rap, NPre]
}
