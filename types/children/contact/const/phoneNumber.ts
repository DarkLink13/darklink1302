import { INode } from '../../../core'

export const ContactPhoneNumber: INode = {
  item: {
    type: NodeItemType.Default,
    id: 'phonenumber',
    sublabels: [{ type: NodeItemLabelType.Link, subvalue: 'tel:+18094936290', value: '+18094936290' }],
    icon: { key: 'material-symbols:call-outline' },
    colors: { primary: '#c4002b', secondary: '#de002d', hover: '#ec5f5f' }
  }
}
