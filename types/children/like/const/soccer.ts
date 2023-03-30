import { INode } from '../../../core'

export const BrasilFC: INode = {
  item: {
    id: 'brasilfc',
    type: NodeItemType.Like,
    background: { src: '/assets/img/brasilfc.png' },
    colors: {
      primary: '#002e95',
      secondary: '#018f54',
      hover: '#f2c101'
    }
  }
}
export const Barca: INode = {
  item: {
    id: 'barca',
    type: NodeItemType.Like,
    background: { src: '/assets/img/barca.png' },
    colors: {
      primary: '#004d98',
      secondary: '#a50044',
      hover: '#edbb00'
    }
  }
}

export const LikeSoccer: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'soccer',
    icon: { key: 'ph:soccer-ball' },
    colors: {
      primary: '#1d532f',
      secondary: '#1a6e37',
      hover: '#018e37'
    }
  },
  children: [undefined, BrasilFC, undefined, undefined, undefined, Barca]
}
