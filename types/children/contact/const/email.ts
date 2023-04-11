import { INode } from '../../../core'

export const ContactEmail: INode = {
  item: {
    type: NodeItemType.Default,
    id: 'email',
    sublabels: [{ type: NodeItemLabelType.Link, subvalue: 'mailto:darklink1302@gmail.com', value: 'darklink1302@gmail.com' }],
    icon: { key: 'material-symbols:mail-outline' },
    colors: { primary: '#05235e', secondary: '#2c4e9a', hover: '#2c59e6' }
  }
}
