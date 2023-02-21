import { INode } from '../../../core'

export const Contact: INode = {
  item: {
    type: NodeItemType.Root,
    label: { name: 'Contact' },
    icon: { key: 'material-symbols:android-contacts-outline' },
    colors: {
      primary: '#77380c',
      secondary: '#914916',
      hover: '#b76d39'
    }
  },
  children: [
    ContactEmail,
    ContactPhoneNumber
  ]
}
