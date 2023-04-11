import { INode } from '../../../core'
import { Instagram } from './instagram'
import { LinkedIn } from './linkedin'

export const Contact: INode = {
  item: {
    id: 'contact',
    type: NodeItemType.Root,
    icon: { key: 'material-symbols:android-contacts-outline' },
    colors: {
      primary: '#77380c',
      secondary: '#914916',
      hover: '#b76d39'
    }
  },
  children: [
    undefined,
    ContactEmail,
    ContactPhoneNumber,
    undefined,
    LinkedIn,
    Instagram
  ]
}
