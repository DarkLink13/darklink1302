import { INode } from '../../../core'

export const Certification: INode = {
  item: {
    type: NodeItemType.Root,
    label: { name: 'Certifications' },
    icon: { key: 'game-icons:achievement' },
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
