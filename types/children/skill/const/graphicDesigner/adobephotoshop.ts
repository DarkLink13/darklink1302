import { INode } from '~~/types/core'

export const AdobePhotoshop: INode = {
  item: {
    id: 'adobephotoshop',
    exp: 50,
    label: { value: 'Adobe Photoshop' },
    type: NodeItemType.Skill,
    sublabels: [{ value: '10', type: NodeItemLabelType.Years }],
    background: { src: '/assets/img/adobephotoshop.png' },
    colors: {
      primary: '#001d34',
      secondary: '#0043ff',
      hover: '#2fa3f7'
    }
  }
}
