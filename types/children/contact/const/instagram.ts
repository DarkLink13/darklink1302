import { INode } from '../../../core'

export const Instagram: INode = {
  item: {
    type: NodeItemType.Default,
    id: 'instagram',
    sublabels: [{ type: NodeItemLabelType.Link, subvalue: 'https://www.instagram.com/darklink1302/', value: '@darklink1302' }],
    icon: { key: 'mdi:instagram' },
    colors: { primary: '#fe4860', secondary: '#ff8548', hover: '#ffa542' }
  }
}
