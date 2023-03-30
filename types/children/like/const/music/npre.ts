import { INode } from '~~/types/core'
export const FrankSinatra: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'franksinatra',
    label: { value: 'Frank Sinatra' },
    background: { src: '/assets/img/franksinatra.png' },
    colors: {
      primary: '#3636b8',
      secondary: '#5051cd',
      hover: '#8889dc'
    }
  }
}

export const NPre: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'npre',
    icon: { key: 'mdi:music-clef-treble' },
    colors: {
      primary: '#034938',
      secondary: '#018f54',
      hover: '#25a394'
    }
  },
  children: [FrankSinatra]
}
