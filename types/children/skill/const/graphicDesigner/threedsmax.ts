import { INode } from '~~/types/core'

export const ThreeDsMax: INode = {
  item: {
    id: 'threedsmax',
    exp: 40,
    label: { value: 'Autodesk 3ds Max' },
    type: NodeItemType.Skill,
    sublabels: [{ value: '10', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/3dsmax.png' },
    colors: {
      primary: '#015051',
      secondary: '#016b6b',
      hover: '#09a1a1'
    }
  }
}
