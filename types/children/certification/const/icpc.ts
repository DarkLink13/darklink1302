import { INode } from '~~/types/core'
export const ICPC: INode = {
  item: {
    id: 'icpcregional',
    type: NodeItemType.Default,
    background: { src: '/assets/img/icpc.png' },
    colors: {
      primary: '#b12a1c',
      secondary: '#4a82c3',
      hover: '#fdba31'
    },
    sublabels: [
      { value: '10-2017', type: NodeItemLabelType.Date }
    ]
  }
}

export const CertificationICPC: INode = {
  item: {
    id: 'icpc',
    type: NodeItemType.Default,
    background: { src: '/assets/img/icpc.png' },
    colors: {
      primary: '#b12a1c',
      secondary: '#4a82c3',
      hover: '#fdba31'
    }
  },
  children: [
    ICPC
  ]
}
