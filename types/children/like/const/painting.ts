import { INode } from '../../../core'

export const LikePainting: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'painting',
    icon: { key: 'carbon:color-palette' },
    colors: {
      primary: '#be5504',
      secondary: '#fc6a03',
      hover: '#fda172'
    }
  }
}
