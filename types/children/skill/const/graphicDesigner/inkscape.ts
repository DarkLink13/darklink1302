import { INode } from '~~/types/core'

export const Inkscape: INode = {
  item: {
    id: 'inkscape',
    exp: 35,
    label: { value: 'Inkscape' },
    type: NodeItemType.Skill,
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/inkscape.png' },
    colors: {
      primary: '#1c1c24',
      secondary: '#484e60',
      hover: '#c9c8ce'
    }
  }
}
