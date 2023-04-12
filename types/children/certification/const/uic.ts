import { INode } from '~~/types/core'
export const SpecialPrice: INode = {
  item: {
    id: 'specialprice',
    type: NodeItemType.Default,
    background: { src: '/assets/img/uic.png' },
    colors: {
      primary: '#3e133e',
      secondary: '#5f1d5f',
      hover: '#886a8a'
    },
    sublabels: [
      { value: '26-05-2018', type: NodeItemLabelType.Date }
    ]
  }
}

export const CertificationUIC: INode = {
  item: {
    id: 'uic',
    type: NodeItemType.Default,
    background: { src: '/assets/img/uic.png' },
    colors: {
      primary: '#3e133e',
      secondary: '#5f1d5f',
      hover: '#886a8a'
    }
  },
  children: [
    SpecialPrice
  ]
}
