import { INode } from '../../../core'

export const Certification: INode = {
  item: {
    id: 'certification',
    type: NodeItemType.Root,
    icon: { key: 'ph:medal-duotone' },
    colors: {
      primary: '#043e26',
      secondary: '#0e4d33',
      hover: '#25664b'
    }
  },
  children: [
    CertificationHackerRank
  ]
}
