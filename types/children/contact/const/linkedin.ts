import { INode } from '../../../core'

export const LinkedIn: INode = {
  item: {
    type: NodeItemType.Default,
    id: 'linkedin',
    sublabels: [{ type: NodeItemLabelType.Link, subvalue: 'https://www.linkedin.com/in/jorgeamadohernandez/', value: '@jorgeamadohernandez' }],
    icon: { key: 'ph:linkedin-logo' },
    colors: { primary: '#212121', secondary: '#00d2f7', hover: '#5ed3f3' }
  }
}
